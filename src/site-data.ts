/* Single source for the association's identity and contact details. Fields left
 * empty render as `pendingLabel` until the real values are supplied. */

export const pendingLabel = 'se completează în curând'

export const site = {
  name: 'Asociația O Singură Inimă pentru Comunitate',
  nameGenitive: 'Asociației O Singură Inimă pentru Comunitate',
  motto: 'O singură inimă. O comunitate. Oamenii contează.',
  tagline: 'Împreună schimbăm vieți!',
  city: 'Tălmaciu, județul Sibiu',
  county: 'județul Sibiu',
  schedule: 'Luni–Vineri: 09:00–17:00',
  email: '',
  phone: '',
  cif: '',
  bank: {
    name: '',
    ibanRon: '',
    ibanEur: '',
  },
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },
}

export function orPending(value: string): string {
  return value || pendingLabel
}
