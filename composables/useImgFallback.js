export const PLACEHOLDER_IMG = '/assets/images/placeholder.svg'

export function onImgError(e) {
  const el = e?.target
  if (el && el.src !== PLACEHOLDER_IMG) {
    el.src = PLACEHOLDER_IMG
  }
}
