// src/lib/pase.ts
//
// Textos de la tarjeta del pase que dependen del número. Los usan tanto el
// render del servidor (Pase.astro) como el script que pinta los datos del
// invitado: si se armaran en dos lugares, terminarían diciendo cosas
// distintas.

/** "Pase" / "Pases" debajo del número. */
export function palabraPases(pases: number): string {
  return pases === 1 ? "Pase" : "Pases";
}

/** Frase de cierre de la tarjeta según cuántos vienen. */
export function frasePases(pases: number): string {
  if (pases === 1) return "Esperamos contar con tu presencia";
  if (pases === 2) return "Esperamos contar con la presencia de ambos";
  return `Esperamos contar con la presencia de los ${pases}`;
}
