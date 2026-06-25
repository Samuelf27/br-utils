<h1 align="center">🇧🇷 br-utils</h1>

<p align="center">
Utilitários de <b>validação</b> e <b>formatação</b> para o Brasil — CPF, CNPJ, CEP, telefone, moeda, PIS e cartão.<br>
Zero dependências · Tipado em TypeScript · Tree-shakeable · ESM + CJS.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://github.com/Samuelf27/br-utils/actions/workflows/ci.yml/badge.svg" alt="CI"/>
  <img src="https://img.shields.io/badge/tests-30%20passing-34d399?style=flat" alt="tests"/>
  <img src="https://img.shields.io/badge/dependencies-0-blue?style=flat" alt="zero deps"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat" alt="MIT"/>
</p>

<p align="center">
  <a href="https://samuelf27.github.io/br-utils/"><b>🔗 Demo interativo ao vivo</b></a>
</p>

<p align="center"><img src="https://raw.githubusercontent.com/Samuelf27/br-utils/main/preview.png" alt="Preview do projeto" width="760" /></p>

---

## ✨ Por que usar?

- ✅ **Validação real** — algoritmos oficiais de dígitos verificadores de CPF e CNPJ
- 🎭 **Formatação e máscaras** — saída pronta para exibir ao usuário
- 🧪 **Testado** — 30 testes com [Vitest](https://vitest.dev) e CI no GitHub Actions
- 📦 **Leve** — **zero dependências**, ESM + CJS, com *tree-shaking*
- 🦺 **Tipado** — definições `.d.ts` incluídas

## 📦 Instalação

```bash
npm install @samuelf27/br-utils
```

## 🚀 Uso

```ts
import { isValidCPF, formatCPF, formatBRL, isValidPhone } from '@samuelf27/br-utils';

isValidCPF('529.982.247-25');   // true
formatCPF('52998224725');       // '529.982.247-25'

isValidPhone('(11) 98888-7777'); // true
formatBRL(1234.5);               // 'R$ 1.234,50'
```

## 📚 API

| Função | Descrição |
|---|---|
| `isValidCPF(cpf)` | Valida um CPF (dígitos verificadores) |
| `formatCPF(cpf)` | Formata como `000.000.000-00` |
| `generateCPF(formatted?)` | Gera um CPF válido aleatório (para testes) |
| `isValidCNPJ(cnpj)` | Valida um CNPJ |
| `formatCNPJ(cnpj)` | Formata como `00.000.000/0000-00` |
| `generateCNPJ(formatted?)` | Gera um CNPJ válido aleatório |
| `isValidCEP(cep)` | Valida o formato (8 dígitos) |
| `formatCEP(cep)` | Formata como `00000-000` |
| `isValidPhone(phone)` | Valida telefone fixo/celular com DDD |
| `formatPhone(phone)` | Formata `(00) 00000-0000` ou `(00) 0000-0000` |
| `formatBRL(value)` | Formata número como `R$ 1.234,56` |
| `parseBRL(value)` | Converte `'R$ 1.234,56'` → `1234.56` |
| `isValidPIS(pis)` | Valida um PIS/PASEP (dígito verificador) |
| `formatPIS(pis)` | Formata como `000.00000.00-0` |
| `generatePIS(formatted?)` | Gera um PIS válido aleatório |
| `isValidCreditCard(card)` | Valida cartão pelo algoritmo de Luhn |
| `getCardBrand(card)` | Detecta a bandeira (Visa, Mastercard, Amex...) |
| `formatCreditCard(card)` | Formata em grupos (`4111 1111 1111 1111`) |
| `onlyDigits(str)` | Remove tudo que não for dígito |

> Todas as funções aceitam entradas **com ou sem máscara**.

## 🛠️ Desenvolvimento

```bash
npm install
npm test          # roda os testes (Vitest)
npm run typecheck # checagem de tipos
npm run build     # gera dist/ (ESM + CJS + .d.ts)
```

## 🤖 Publicação

O workflow [`publish.yml`](.github/workflows/publish.yml) publica no npm automaticamente ao criar uma tag `v*` (basta configurar o secret `NPM_TOKEN`):

```bash
npm version patch   # cria a tag
git push --follow-tags
```

## 📄 Licença

[MIT](LICENSE) © Samuel Ferreira

---

<p align="center">
  <a href="https://github.com/Samuelf27">GitHub</a> ·
  <a href="https://www.linkedin.com/in/samuel-ferreira27/">LinkedIn</a>
</p>
