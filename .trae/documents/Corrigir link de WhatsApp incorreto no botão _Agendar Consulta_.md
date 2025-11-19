## O que encontrei

* O botão "Agendar Consulta" em `vivieli-terapeuta/pages/sobre.js:242` ainda está com `href="https://wa.me/5545999999999"`.

* Os demais locais principais (Home, Serviços, Contato, Posts, Footer e JSONs) já estão com `https://wa.me/5545991046124`.

## O que vou fazer

1. Substituir o link incorreto em `vivieli-terapeuta/pages/sobre.js:242` para `https://wa.me/5545991046124`.
2. Reexecutar verificação por `wa.me/5545999999999` e por CTAs "Agendar Consulta" para garantir que não restou nenhuma ocorrência incorreta.
3. (Se aplicável) Reiniciar o servidor local/limpar `.next` para garantir que o site reflita a correção.

   1. Validar nos seguintes pontos: páginas Início, Sobre, Serviços, Contato, Posts e rodapés em ambos projetos (root e `vivieli-terapeuta`).

## Resultado esperado

* Todos os botões "Agendar Consulta" e links de WhatsApp direcionam para `https://wa.me/5545991046124` em todas as abas/páginas.

