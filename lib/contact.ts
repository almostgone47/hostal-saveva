export const BOOKING_URL = 'https://hostal-saveva.roomleo.com/book';

export const WHATSAPP_NUMBER = '573332627268';

/** Roomleo skips its own date step when these params are present. Dates are YYYY-MM-DD. */
export function bookingSearchUrl({ checkIn, checkOut, guests }: { checkIn?: string; checkOut?: string; guests?: number }) {
  const params = new URLSearchParams();
  if (checkIn && checkOut) {
    params.set('check_in', checkIn);
    params.set('check_out', checkOut);
  }
  if (guests) params.set('guests', String(guests));
  const qs = params.toString();
  return qs ? `${BOOKING_URL}?${qs}` : BOOKING_URL;
}

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Pre-filled message for asking about a specific room or apartment. */
export function unitInquiryText(unitLabel: string, language: 'es' | 'en') {
  return language === 'es'
    ? `¡Hola SAVEVA! 🐦 Estoy viendo ${unitLabel} en la web y tengo algunas preguntas antes de reservar.`
    : `Hi SAVEVA! 🐦 I'm looking at ${unitLabel} on your website and have a few questions before booking.`;
}
