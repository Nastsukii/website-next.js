## Objetivo
- Substituir e enriquecer os textos do site com a biografia completa de Viviéli Comiran, criando uma nova página “História”, atualizando páginas existentes, metadados (SEO) e navegação. Entregar um relatório detalhado do que foi substituído, adicionado e do que ficou pendente.

## Escopo de Atualização
### Páginas
- Home (`pages/index.js` e espelho em `vivieli-terapeuta/pages/index.js`)
  - Atualizar hero: título e subtítulo para “Terapeuta Integrativa”, CTAs e bio curta sob a foto.
  - Reescrever serviços para refletir formações e abordagens: Psicologia Transgenerativa, Hipnose Regressiva, PNL, Apometria Regressiva, Constelação Transgenerativa, Reiki (Níveis 1 e 2), 7 Safiras e Comandos Quânticos, Inteligência Espiritual, Reconstrução do Eu, Barras de Access, Creso Midas.
  - Ajustar “Artigos em Destaque” e CTA final conforme nova narrativa (texto motivacional alinhado à missão).
- Sobre (`pages/sobre.js` e espelho em `vivieli-terapeuta/pages/sobre.js`)
  - Reescrever a seção principal com resumo da biografia (missão, abordagem integrativa).
  - Adicionar/atualizar timeline: 1977 nascimento, graduação em RH, virada de propósito, início dos atendimentos em 2022, formações (lista acima).
  - Seção de valores: propósito, sensibilidade humana, união ciência-espiritualidade, acolhimento.
- Serviços (`pages/servicos.js` e espelho em `vivieli-terapeuta/pages/servicos.js`)
  - Atualizar lista detalhada de serviços com descrições, benefícios e modalidades (online/presencial), mantendo dados de preço/duração somente se fornecidos; caso contrário, manter genérico e focar no valor terapêutico.

### Nova Página “História”
- Criar `pages/historia.js` (e espelho em `vivieli-terapeuta/pages/historia.js`).
- Estrutura: hero com título e subtítulo; conteúdo longo em seções (chamado interior, transição de carreira, integração de técnicas, missão e entrega diária). Opcional: linha do tempo e valores.
- Adicionar item de menu: `content/settings/mainMenu.json` → `{ label: "História", href: "/historia" }` (ordenar próximo de “Sobre”).

### Configurações e Metadados
- Marca (`content/settings/business.json`)
  - Atualizar `brandDescription` com resumo conciso da missão (cura, consciência, liberdade emocional, expansão da alma).
  - Revisar `brandKeywords` para incluir termos das abordagens e “Terapeuta Integrativa”.
  - Manter `brandName` e contatos como estão (a menos que você forneça novos dados); onde há placeholders (WhatsApp), manter até atualização futura.
- Legal/MD (`content/pages/*.md`)
  - Atualizar frontmatter (`title`, `description`, `seoTitle`, `seoDescription`) para refletir “Terapeuta Integrativa”.
  - Ajustar descrição dos serviços citados nos textos para manter consistência com a nova lista.
- LinkTree (`content/settings/linkTree.json`)
  - Revisar rótulos/links (WhatsApp, Instagram, etc.) apenas se você quiser incluir novos canais; caso contrário, manter.

## Espelho “vivieli-terapeuta”
- Replicar todas as alterações de conteúdo nas páginas correspondentes dentro de `vivieli-terapeuta/` para consistência.

## SEO e Tom
- Unificar o tom: compassivo, técnico e humano, com ênfase em missão e acolhimento.
- Atualizar metadados (`title`, `description`, `keywords`) nas páginas que recebem texto novo.

## Entregáveis
- Implementação completa das alterações.
- Relatório detalhado com três seções:
  1) Substituído: lista por arquivo (caminho e campo) com antes → depois.
  2) Adicionado: nova página “História”, novos blocos/seções e ajustes de menu/SEO.
  3) Faltou/pendente: itens que requerem dados (ex.: preços, horários exatos, canais adicionais), para futura complementação.

## Validação
- Navegar entre páginas para conferir textos, menu e SEO.
- Revisar consistência entre raiz e `vivieli-terapeuta`.

Confirma que posso aplicar esse plano agora? Após a confirmação, executo as mudanças e entrego o relatório solicitado.