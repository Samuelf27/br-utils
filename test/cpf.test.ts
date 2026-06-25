import { describe, it, expect } from 'vitest';
import { isValidCPF, formatCPF, generateCPF } from '../src/cpf';

describe('isValidCPF', () => {
  it('aceita CPFs válidos (com e sem máscara)', () => {
    expect(isValidCPF('529.982.247-25')).toBe(true);
    expect(isValidCPF('52998224725')).toBe(true);
  });

  it('rejeita dígitos verificadores incorretos', () => {
    expect(isValidCPF('529.982.247-24')).toBe(false);
  });

  it('rejeita sequências repetidas', () => {
    expect(isValidCPF('111.111.111-11')).toBe(false);
    expect(isValidCPF('00000000000')).toBe(false);
  });

  it('rejeita tamanhos inválidos', () => {
    expect(isValidCPF('123')).toBe(false);
    expect(isValidCPF('')).toBe(false);
  });
});

describe('formatCPF', () => {
  it('formata 11 dígitos', () => {
    expect(formatCPF('52998224725')).toBe('529.982.247-25');
  });
  it('mantém entrada incompleta sem quebrar', () => {
    expect(formatCPF('529')).toBe('529');
  });
});

describe('generateCPF', () => {
  it('gera CPFs sempre válidos', () => {
    for (let i = 0; i < 200; i++) {
      expect(isValidCPF(generateCPF())).toBe(true);
    }
  });
  it('respeita a opção sem formatação', () => {
    expect(generateCPF(false)).toMatch(/^\d{11}$/);
  });
});
