## Objetivo
- Ajustar os links remanescentes de WhatsApp nas páginas Sobre e Serviços (raiz e espelho) que ainda apontam para o número antigo.

## Alvos Específicos
- Raiz:
  - `pages/sobre.js`: âncora do botão dentro da seção de contato → `https://wa.me/5545991046124`.
  - `pages/servicos.js`: CTA final (`ctaBtnLink`, `ctaContrastBtnLink`) → `https://wa.me/5545991046124`.
- Espelho `vivieli-terapeuta/`:
  - `pages/sobre.js`: âncora do botão “Agendar Consulta” → `https://wa.me/5545991046124`.
  - `pages/servicos.js`: CTA final (`ctaBtnLink`, `ctaContrastBtnLink`) → `https://wa.me/5545991046124`.

## Verificação
- Rodar uma busca por `https://wa.me/5545999999999` e confirmar 0 ocorrências em arquivos de código/MD JSON.

Após a execução, envio confirmação das linhas atualizadas e da verificação sem ocorrências remanescentes.