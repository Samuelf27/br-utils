import { describe, it, expect } from 'vitest';
import { isValidCEP, formatCEP } from '../src/cep';
import { isValidPhone, formatPhone } from '../src/phone';
import { formatBRL, parseBRL } from '../src/currency';
import { onlyDigits } from '../src/utils';

describe('CEP', () => {
  it('valida 8 dígitos', () => {
    expect(isValidCEP('01310-100')).toBe(true);
    expect(isValidCEP('123')).toBe(false);
  });
  it('formata', () => {
    expect(formatCEP('01310100')).toBe('01310-100');
  });
});

describe('Telefone', () => {
  it('valida celular e fixo', () => {
    expect(isValidPhone('(11) 98888-7777')).toBe(true);
    expect(isValidPhone('(11) 3030-4040')).toBe(true);
  });
  it('rejeita DDD inválido e celular sem 9', () => {
    expect(isValidPhone('(00) 1234-5678')).toBe(false);
    expect(isValidPhone('11888887777')).toBe(false); // 11 dígitos sem 9
  });
  it('formata celular e fixo', () => {
    expect(formatPhone('11988887777')).toBe('(11) 98888-7777');
    expect(formatPhone('1130304040')).toBe('(11) 3030-4040');
  });
});

describe('Moeda (BRL)', () => {
  it('formata número (tolerante ao tipo de espaço do Intl)', () => {
    expect(formatBRL(1234.5)).toMatch(/^R\$\s1\.234,50$/);
  });
  it('faz parse de string', () => {
    expect(parseBRL('R$ 1.234,56')).toBe(1234.56);
    expect(parseBRL('1.000')).toBe(1000);
  });
  it('lança erro para entrada inválida', () => {
    expect(() => parseBRL('abc')).toThrow();
    expect(() => formatBRL(NaN)).toThrow();
  });
});

describe('onlyDigits', () => {
  it('remove não-dígitos', () => {
    expect(onlyDigits('123.456-78')).toBe('12345678');
  });
});
