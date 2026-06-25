import { describe, it, expect } from 'vitest';
import { isValidCreditCard, getCardBrand, formatCreditCard } from '../src/card';

describe('Cartão de crédito', () => {
  it('valida números pelo algoritmo de Luhn', () => {
    expect(isValidCreditCard('4111 1111 1111 1111')).toBe(true); // Visa de teste
    expect(isValidCreditCard('5555 5555 5555 4444')).toBe(true); // Mastercard de teste
    expect(isValidCreditCard('3782 822463 10005')).toBe(true);   // Amex de teste
  });

  it('rejeita números inválidos', () => {
    expect(isValidCreditCard('4111 1111 1111 1112')).toBe(false);
    expect(isValidCreditCard('1234')).toBe(false);
  });

  it('detecta a bandeira', () => {
    expect(getCardBrand('4111111111111111')).toBe('Visa');
    expect(getCardBrand('5555555555554444')).toBe('Mastercard');
    expect(getCardBrand('378282246310005')).toBe('Amex');
    expect(getCardBrand('0000000000000000')).toBe(null);
  });

  it('formata em grupos', () => {
    expect(formatCreditCard('4111111111111111')).toBe('4111 1111 1111 1111');
    expect(formatCreditCard('378282246310005')).toBe('3782 822463 10005');
  });
});
