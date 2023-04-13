import { clsx, type ClassValue } from 'clsx'

export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs)
}

export function formatDate(dateString: string, locale = 'en-US') {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  })
}
