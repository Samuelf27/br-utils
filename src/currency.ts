/**
 * Formata um número como moeda brasileira (Real).
 *
 * @example
 * formatBRL(1234.5)  // 'R$ 1.234,50'
 * formatBRL(0)       // 'R$ 0,00'
 */
export function formatBRL(value: number): string {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError('formatBRL espera um número válido.');
  }
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/**
 * Converte uma string de moeda brasileira em número.
 * Aceita "R$", pontos de milhar e vírgula decimal.
 *
 * @example
 * parseBRL('R$ 1.234,56') // 1234.56
 * parseBRL('1.000')       // 1000
 */
export function parseBRL(value: string): number {
  const clean = (value ?? '')
    .replace(/\s|R\$| /g, '')
    .replace(/\./g, '')
    .replace(',', '.');
  const n = Number(clean);
  if (Number.isNaN(n)) throw new TypeError(`Valor inválido para parseBRL: "${value}"`);
  return n;
}
