/**
 * br-utils — utilitários de validação e formatação para o Brasil 🇧🇷
 *
 * Zero dependências, tipado em TypeScript e tree-shakeable.
 */
export { onlyDigits, allSameDigits } from './utils';
export { isValidCPF, formatCPF, generateCPF } from './cpf';
export { isValidCNPJ, formatCNPJ, generateCNPJ } from './cnpj';
export { isValidCEP, formatCEP } from './cep';
export { isValidPhone, formatPhone } from './phone';
export { formatBRL, parseBRL } from './currency';
