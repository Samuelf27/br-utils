/**
 * Remove todos os caracteres não numéricos de uma string.
 *
 * @example
 * onlyDigits('123.456.789-09') // '12345678909'
 */
export function onlyDigits(value: string): string {
  return (value ?? '').replace(/\D/g, '');
}

/**
 * Verifica se todos os dígitos de uma string são iguais (ex.: "11111111111").
 * Usado para descartar sequências inválidas em CPF/CNPJ.
 */
export function allSameDigits(value: string): boolean {
  return /^(\d)\1+$/.test(value);
}
