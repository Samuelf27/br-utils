import { onlyDigits } from './utils';

/** DDDs válidos no Brasil (códigos de área existentes). */
const VALID_DDD = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64,
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
]);

/**
 * Valida um telefone brasileiro (fixo ou celular), com ou sem máscara.
 * Aceita 10 dígitos (fixo) ou 11 dígitos (celular, que deve começar com 9 após o DDD).
 *
 * @example
 * isValidPhone('(11) 98888-7777') // true (celular)
 * isValidPhone('(11) 3030-4040')  // true (fixo)
 * isValidPhone('(00) 1234-5678')  // false (DDD inválido)
 */
export function isValidPhone(phone: string): boolean {
  const d = onlyDigits(phone);
  if (d.length !== 10 && d.length !== 11) return false;
  if (!VALID_DDD.has(Number(d.slice(0, 2)))) return false;
  // Celular: 11 dígitos e o primeiro número após o DDD é 9
  if (d.length === 11 && d[2] !== '9') return false;
  // Fixo: 10 dígitos e o primeiro número após o DDD é de 2 a 5
  if (d.length === 10 && !'2345'.includes(d[2])) return false;
  return true;
}

/**
 * Formata um telefone brasileiro:
 * - 11 dígitos → `(00) 00000-0000`
 * - 10 dígitos → `(00) 0000-0000`
 *
 * @example
 * formatPhone('11988887777') // '(11) 98888-7777'
 * formatPhone('1130304040')  // '(11) 3030-4040'
 */
export function formatPhone(phone: string): string {
  const d = onlyDigits(phone);
  if (d.length === 11) return d.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  if (d.length === 10) return d.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  return d;
}
