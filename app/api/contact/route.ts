import { NextRequest, NextResponse } from 'next/server';

// Almacenar intentos de envío por IP (en memoria)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Configuración
const MAX_REQUESTS = 2; // Máximo 2 mensajes
const WINDOW_MS = 30 * 60 * 1000; // 30 minutos en milisegundos

// Función para obtener la IP del cliente
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

// Función para limpiar entradas antiguas del mapa
function cleanupOldEntries() {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

// Endpoint para verificar rate limit antes de enviar
export async function GET(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    cleanupOldEntries();

    const now = Date.now();
    const ipData = rateLimitMap.get(clientIp);

    // Si no existe o ya expiró
    if (!ipData || now > ipData.resetTime) {
      return NextResponse.json({ allowed: true, remaining: MAX_REQUESTS });
    }

    // Si ya alcanzó el límite
    if (ipData.count >= MAX_REQUESTS) {
      const timeLeft = Math.ceil((ipData.resetTime - now) / 60000);
      return NextResponse.json(
        { allowed: false, remainingTime: timeLeft },
        { status: 429 }
      );
    }

    return NextResponse.json({ allowed: true, remaining: MAX_REQUESTS - ipData.count });
  } catch (error) {
    console.error('Error verificando rate limit:', error);
    return NextResponse.json({ allowed: true });
  }
}

// Endpoint para registrar un envío exitoso
export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    cleanupOldEntries();

    const now = Date.now();
    let ipData = rateLimitMap.get(clientIp);

    // Si no existe o ya expiró, crear nueva entrada
    if (!ipData || now > ipData.resetTime) {
      ipData = {
        count: 0,
        resetTime: now + WINDOW_MS
      };
    }

    // Verificar si excedió el límite
    if (ipData.count >= MAX_REQUESTS) {
      const timeLeft = Math.ceil((ipData.resetTime - now) / 60000);
      return NextResponse.json(
        {
          success: false,
          error: 'rate_limit',
          remainingTime: timeLeft
        },
        { status: 429 }
      );
    }

    // Incrementar contador
    ipData.count += 1;
    rateLimitMap.set(clientIp, ipData);

    return NextResponse.json({
      success: true,
      remaining: MAX_REQUESTS - ipData.count
    });
  } catch (error) {
    console.error('Error en rate limit:', error);
    return NextResponse.json(
      { success: false, error: 'server_error' },
      { status: 500 }
    );
  }
}
