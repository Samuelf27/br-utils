import { onlyDigits } from './utils';

/** Bandeiras de cartão reconhecidas. */
export type CardBrand =
  | 'Visa' | 'Mastercard' | 'Amex' | 'Elo' | 'Hipercard' | 'Diners' | 'Discover' | null;

const BRANDS: { brand: Exclude<CardBrand, null>; re: RegExp }[] = [
  { brand: 'Visa', re: /^4\d{12}(\d{3})?$/ },
  { brand: 'Mastercard', re: /^(5[1-5]\d{4}|2(22[1-9]|2[3-9]\d|[3-6]\d{2}|7[01]\d|720)\d{10})\d*$/ },
  { brand: 'Amex', re: /^3[47]\d{13}$/ },
  { brand: 'Diners', re: /^3(0[0-5]|[68]\d)\d{11}$/ },
  { brand: 'Discover', re: /^6(011|5\d{2})\d{12}$/ },
  { brand: 'Hipercard', re: /^(606282\d{10}(\d{3})?|3841\d{15})$/ },
  { brand: 'Elo', re: /^(4011|4312|4389|5041|5066|5067|509\d|6277|6362|6363|650\d|6516|6550)\d+$/ },
];

/**
 * Valida um número de cartão de crédito pelo algoritmo de Luhn.
 *
 * @example
 * isValidCreditCard('4111 1111 1111 1111') // true
 */
export function isValidCreditCard(card: string): boolean {
  const d = onlyDigits(card);
  if (d.length < 13 || d.length > 19) return false;
  let sum = 0;
  let alt = false;
  for (let i = d.length - 1; i >= 0; i--) {
    let n = Number(d[i]);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}

/**
 * Detecta a bandeira de um cartão a partir do número. Retorna `null` se não reconhecer.
 *
 * @example
 * getCardBrand('4111111111111111') // 'Visa'
 * getCardBrand('3782 822463 10005') // 'Amex'
 */
export function getCardBrand(card: string): CardBrand {
  const d = onlyDigits(card);
  for (const { brand, re } of BRANDS) if (re.test(d)) return brand;
  return null;
}

/**
 * Formata um número de cartão em grupos (Amex usa 4-6-5; demais, grupos de 4).
 *
 * @example
 * formatCreditCard('4111111111111111') // '4111 1111 1111 1111'
 */
export function formatCreditCard(card: string): string {
  const d = onlyDigits(card);
  if (getCardBrand(d) === 'Amex') {
    return d.replace(/^(\d{4})(\d{6})(\d{0,5}).*/, '$1 $2 $3').trim();
  }
  return d.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}
