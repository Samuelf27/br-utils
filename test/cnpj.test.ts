import { describe, it, expect } from 'vitest';
import { isValidCNPJ, formatCNPJ, generateCNPJ } from '../src/cnpj';

describe('isValidCNPJ', () => {
  it('aceita CNPJs válidos (com e sem máscara)', () => {
    expect(isValidCNPJ('11.222.333/0001-81')).toBe(true);
    expect(isValidCNPJ('11222333000181')).toBe(true);
  });

  it('rejeita dígitos verificadores incorretos', () => {
    expect(isValidCNPJ('11.222.333/0001-80')).toBe(false);
  });

  it('rejeita sequências repetidas e tamanhos inválidos', () => {
    expect(isValidCNPJ('11.111.111/1111-11')).toBe(false);
    expect(isValidCNPJ('123')).toBe(false);
  });
});

describe('formatCNPJ', () => {
  it('formata 14 dígitos', () => {
    expect(formatCNPJ('11222333000181')).toBe('11.222.333/0001-81');
  });
});

describe('generateCNPJ', () => {
  it('gera CNPJs sempre válidos', () => {
    for (let i = 0; i < 200; i++) {
      expect(isValidCNPJ(generateCNPJ())).toBe(true);
    }
  });
});
