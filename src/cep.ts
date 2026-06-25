import { onlyDigits } from './utils';

/**
 * Valida o formato de um CEP brasileiro (8 dígitos).
 *
 * @example
 * isValidCEP('01310-100') // true
 * isValidCEP('123')       // false
 */
export function isValidCEP(cep: string): boolean {
  return onlyDigits(cep).length === 8;
}

/**
 * Formata um CEP no padrão `00000-000`.
 *
 * @example
 * formatCEP('01310100') // '01310-100'
 */
export function formatCEP(cep: string): string {
  const d = onlyDigits(cep).slice(0, 8);
  if (d.length !== 8) return d;
  return d.replace(/(\d{5})(\d{3})/, '$1-$2');
}
