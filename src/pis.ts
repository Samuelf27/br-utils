import { onlyDigits, allSameDigits } from './utils';

const WEIGHTS = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function checkDigit(base: string): number {
  let total = 0;
  for (let i = 0; i < 10; i++) total += Number(base[i]) * WEIGHTS[i];
  const rest = 11 - (total % 11);
  return rest >= 10 ? 0 : rest;
}

/**
 * Valida um número de PIS/PASEP (11 dígitos), conferindo o dígito verificador.
 *
 * @example
 * isValidPIS('120.9876.543-2') // depende do dígito verificador
 */
export function isValidPIS(pis: string): boolean {
  const d = onlyDigits(pis);
  if (d.length !== 11 || allSameDigits(d)) return false;
  return checkDigit(d.slice(0, 10)) === Number(d[10]);
}

/**
 * Formata um PIS/PASEP no padrão `000.00000.00-0`.
 *
 * @example
 * formatPIS('12098765432') // '120.98765.43-2'
 */
export function formatPIS(pis: string): string {
  const d = onlyDigits(pis).slice(0, 11);
  if (d.length !== 11) return d;
  return d.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/, '$1.$2.$3-$4');
}

/**
 * Gera um PIS/PASEP válido e aleatório — útil para testes.
 *
 * @example
 * generatePIS() // '120.98765.43-2'
 */
export function generatePIS(formatted = true): string {
  const base = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
  const dv = checkDigit(base);
  const pis = `${base}${dv}`;
  return formatted ? formatPIS(pis) : pis;
}
