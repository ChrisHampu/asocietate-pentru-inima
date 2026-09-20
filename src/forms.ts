import type { FormEvent } from 'react'

/* Blocks the browser's default form navigation while the site is static and no
 * submission endpoint exists. */
export function preventSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}
