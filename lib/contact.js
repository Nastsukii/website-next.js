export const WHATSAPP_LINK = 'https://wa.me/5545991046124'

export function isExternalHref(href = '') {
  return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
}

export function isWaMe(href = '') {
  return /^https?:\/\/wa\.me\/\d+/.test(href)
}

export function normalizeWhatsAppHref(href = '') {
  if (!href) return href
  if (isWaMe(href) && href !== WHATSAPP_LINK) return WHATSAPP_LINK
  return href
}