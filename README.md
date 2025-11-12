# Vivieli Comiran — Site Profissional (Next.js)

[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/en/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38b2ac?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Site estático profissional para a terapeuta Vivieli Comiran, construído em Next.js 14 com foco em performance, SEO e experiência do usuário. O projeto inclui páginas institucionais, blog com conteúdo em Markdown, tema claro/escuro e deploy simplificado em plataformas como Netlify.

## Funcionalidades

- Páginas institucionais: `Início`, `Sobre`, `Serviços`, `Contato`.
- Blog com posts em Markdown (SSG) e página de listagem.
- Tema claro/escuro com `next-themes` (persistido via `localStorage`).
- Layout responsivo usando Tailwind CSS.
- SEO básico com títulos, descrições e imagem OG por página.
- Componentes reutilizáveis para seções, cards, cabeçalho e rodapé.
- Configurações de conteúdo via arquivos JSON (marca, menu, tema, etc.).
- Export estático (`output: 'export'`) pronto para hospedagem em CDN.

### Tecnologias

- Frontend: `Next.js 14`, `React 18`, `Tailwind CSS`.
- Conteúdo: `gray-matter` (frontmatter), `remark` + `remark-html` (Markdown → HTML).
- UI/UX: `next-themes`, `react-icons`, `@fontsource-variable/inter`.
- Utilitários: `date-fns` (datas), utilidades próprias em `lib/utils.js`.
- Deploy: Netlify (build estático), Vercel (alternativo).

## Pré-requisitos

- `Node.js` 18 LTS ou superior.
- `npm` (ou `yarn`, opcional).
- `Git` para versionamento e deploy contínuo.
- Opcional: `Netlify CLI` (`npm i -g netlify-cli`) para deploy manual.

Versões utilizadas no projeto:

- Next.js `^14.0.0`
- React `^18.0.0`
- Tailwind CSS `^3.4.18`
- ESLint `^8.0.0`

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```
2. Garanta o Node 18:
   ```bash
   nvm use 18 # se usar nvm
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

Arquivos principais de configuração:

- `next.config.mjs`
  - `output: 'export'` (gera site estático)
  - `trailingSlash: true` (URLs com barra final)
  - `images.unoptimized: true` (sem Image Optimization no modo estático)
- `netlify.toml`
  - `command = "npm run build"`
  - `publish = "out"`
  - `NODE_VERSION = "18"`
- `public/_redirects` (regras de redirecionamento estático para Netlify)

Configurações de conteúdo (editar em `content/settings/`):

- `business.json`: nome da marca, descrição, contato, telefone, endereço.
- `general.json`: URL do site, rodapé, quantidade de posts, dark mode, etc.
- `mainMenu.json`: itens do menu principal (rótulo e link).
- `theme.json`: cores e temas (se aplicável).
- `version.json`: metadados de versão.

## Uso

Executar em desenvolvimento:
```bash
npm run dev
# abre em http://localhost:3000
```

Build de produção (export estático):
```bash
npm run build
# saída fica em ./out
```

Pré-visualizar o build estático localmente:
```bash
npx serve out
# ou: npx http-server out -p 5000
```

### Conteúdo do Blog (Markdown)

Os posts ficam em `content/posts/*.md` com frontmatter YAML e corpo Markdown. Exemplo:

```md
---
title: "Constelações Familiares: Entendendo o Processo"
excerpt: "Uma introdução prática às constelações familiares e seus benefícios."
publishDate: "2025-01-15"
author: "Vivieli Comiran"
authorImage: "/images/authors/vivieli-profile.png"
categories: ["Constelações Familiares", "Terapia"]
tags: ["família", "autoconhecimento", "bem-estar"]
featuredImage: "/images/posts/constelacoes-familiares.jpg"
featuredPost: true
readTime: "5 min"
---

Conteúdo em **Markdown** suportando títulos, listas, links e imagens.
```

As páginas institucionais em Markdown ficam em `content/pages/*.md` e seguem o mesmo padrão de frontmatter.

## Deploy

### Netlify (recomendado para estático)

- Conecte o repositório ao Netlify.
- Configure:
  - Build command: `npm run build`
  - Publish directory: `out`
  - Node version: `18`
- Opcional (CLI):
  ```bash
  netlify deploy --prod --dir=out
  ```

### Vercel (alternativo)

- Funciona bem com Next.js; para export estático, a publicação será de assets gerados.
- Configure projeto e defina `npm run build` como comando de build.

## Contribuição

- Abra uma issue para discutir mudanças antes de enviar PRs.
- Crie uma branch a partir de `main` com um nome descritivo (`feature/…`, `fix/…`).
- Mantenha commits claros e objetivos.
- Rode o linter antes de enviar:
  ```bash
  npm run lint
  ```
- Garanta que o site builda sem erros (`npm run build`).
- Envie PR com descrição, screenshots (se UI) e passos de teste.

Padrões de código:

- Componentes em React com função e props claras.
- Tailwind para estilos; evite CSS inline não necessário.
- Utilize utilitários presentes em `lib/utils.js` para datas, slugs, excerpt e tempo de leitura.

## Licença

Este projeto está licenciado sob a licença **MIT** conforme definido em `package.json`. Se necessário, adicione um arquivo `LICENSE` com o texto completo da licença.

---

### Estrutura de Pastas (resumo)

```
components/        # componentes de layout e UI
containers/        # containers para compor páginas
content/
  pages/           # páginas institucionais em Markdown
  posts/           # blog posts em Markdown
  settings/        # JSONs de configuração (marca, menu, tema)
lib/               # utilitários e acesso ao conteúdo
pages/             # páginas Next.js (rotas)
public/            # assets públicos e _redirects
styles/            # estilos globais (Tailwind)
out/               # saída de build (gerado pelo build)
```

## Suporte

Em caso de dúvidas, erros de build ou problemas de deploy:
- Verifique `netlify.toml` e a versão do Node.
- Confirme que não há `pages/api/` (não compatível com export estático).
- Confira se o conteúdo Markdown possui `publishDate` válido e frontmatter completo.
- Consulte `DEPLOY.md` para dicas específicas de troubleshooting.