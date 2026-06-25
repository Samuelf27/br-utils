import { onlyDigits, allSameDigits } from './utils';

function checkDigit(base: string, factor: number): number {
  let total = 0;
  for (const digit of base) total += Number(digit) * factor--;
  const rest = (total * 10) % 11;
  return rest === 10 ? 0 : rest;
}

/**
 * Valida um CPF brasileiro (com ou sem máscara), conferindo os dígitos verificadores.
 *
 * @example
 * isValidCPF('529.982.247-25') // true
 * isValidCPF('111.111.111-11') // false
 */
export function isValidCPF(cpf: string): boolean {
  const digits = onlyDigits(cpf);
  if (digits.length !== 11 || allSameDigits(digits)) return false;

  const d1 = checkDigit(digits.slice(0, 9), 10);
  const d2 = checkDigit(digits.slice(0, 10), 11);
  return d1 === Number(digits[9]) && d2 === Number(digits[10]);
}

/**
 * Formata um CPF no padrão `000.000.000-00`.
 * Retorna o valor original (apenas dígitos) caso não tenha 11 dígitos.
 *
 * @example
 * formatCPF('52998224725') // '529.982.247-25'
 */
export function formatCPF(cpf: string): string {
  const d = onlyDigits(cpf).slice(0, 11);
  if (d.length !== 11) return d;
  return d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Gera um CPF válido e aleatório — útil para testes e seeds.
 * (Não corresponde a uma pessoa real.)
 *
 * @example
 * generateCPF() // '529.982.247-25'
 */
export function generateCPF(formatted = true): string {
  const base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
  const d1 = checkDigit(base, 10);
  const d2 = checkDigit(base + d1, 11);
  const cpf = `${base}${d1}${d2}`;
  return formatted ? formatCPF(cpf) : cpf;
}
