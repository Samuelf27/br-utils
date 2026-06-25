import { onlyDigits, allSameDigits } from './utils';

const FIRST = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const SECOND = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function checkDigit(base: string, weights: number[]): number {
  let total = 0;
  for (let i = 0; i < weights.length; i++) total += Number(base[i]) * weights[i];
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

/**
 * Valida um CNPJ brasileiro (com ou sem máscara), conferindo os dígitos verificadores.
 *
 * @example
 * isValidCNPJ('11.222.333/0001-81') // true
 * isValidCNPJ('11.111.111/1111-11') // false
 */
export function isValidCNPJ(cnpj: string): boolean {
  const digits = onlyDigits(cnpj);
  if (digits.length !== 14 || allSameDigits(digits)) return false;

  const d1 = checkDigit(digits.slice(0, 12), FIRST);
  const d2 = checkDigit(digits.slice(0, 13), SECOND);
  return d1 === Number(digits[12]) && d2 === Number(digits[13]);
}

/**
 * Formata um CNPJ no padrão `00.000.000/0000-00`.
 *
 * @example
 * formatCNPJ('11222333000181') // '11.222.333/0001-81'
 */
export function formatCNPJ(cnpj: string): string {
  const d = onlyDigits(cnpj).slice(0, 14);
  if (d.length !== 14) return d;
  return d.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

/**
 * Gera um CNPJ válido e aleatório — útil para testes e seeds.
 *
 * @example
 * generateCNPJ() // '11.222.333/0001-81'
 */
export function generateCNPJ(formatted = true): string {
  const base = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('') + '0001';
  const d1 = checkDigit(base, FIRST);
  const d2 = checkDigit(base + d1, SECOND);
  const cnpj = `${base}${d1}${d2}`;
  return formatted ? formatCNPJ(cnpj) : cnpj;
}
