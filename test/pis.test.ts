import { describe, it, expect } from 'vitest';
import { isValidPIS, formatPIS, generatePIS } from '../src/pis';

describe('PIS/PASEP', () => {
  it('gera PIS sempre válidos', () => {
    for (let i = 0; i < 200; i++) {
      expect(isValidPIS(generatePIS())).toBe(true);
    }
  });

  it('rejeita sequências repetidas e tamanhos inválidos', () => {
    expect(isValidPIS('111.11111.11-1')).toBe(false);
    expect(isValidPIS('123')).toBe(false);
  });

  it('rejeita dígito verificador incorreto', () => {
    const valid = generatePIS(false);
    const wrongLast = valid.slice(0, 10) + ((Number(valid[10]) + 1) % 10);
    expect(isValidPIS(wrongLast)).toBe(false);
  });

  it('formata corretamente', () => {
    expect(formatPIS('12098765432')).toBe('120.98765.43-2');
  });
});
