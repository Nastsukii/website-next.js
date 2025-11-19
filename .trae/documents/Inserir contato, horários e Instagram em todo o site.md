## Objetivo
- Atualizar o site com os dados fornecidos: telefone/WhatsApp (45) 99104-6124, e-mail vivielicomiran4@gmail.com, Instagram “Vivieli Comiran”, horários (segunda a sexta, 9:00–21:00), atendimento presencial e online, e graduação (Gestão de Recursos Humanos) em todas as áreas relevantes.

## Onde Atualizar
- Configurações globais:
  - `content/settings/business.json`: `brandPhone`, `brandEmail`, `workingHours`.
  - `content/settings/linkTree.json`: adicionar Instagram com rótulo “Instagram” e link (provisório) `https://instagram.com/VivieliComiran`.
- Navegação/TopRibbon:
  - `components/layout/Layout.js` e `vivieli-terapeuta/components/layout/Layout.js`: atualizar `ribbonMessages` com WhatsApp correto.
- Páginas raiz e espelho:
  - Home (`pages/index.js` e `vivieli-terapeuta/pages/index.js`): atualizar CTAs `ctaBtnLink` e `ctaContrastBtnLink` para `https://wa.me/5545991046124` e textos que mencionam contato/horários.
  - Serviços (`pages/servicos.js` e `vivieli-terapeuta/pages/servicos.js`): atualizar card de “Horários” para 9:00–21:00 e links de agendamento para o WhatsApp correto.
  - Sobre (`pages/sobre.js` e `vivieli-terapeuta/pages/sobre.js`): atualizar bloco de contato (telefone, e-mail) e reforçar “Atendimento Presencial e Online”; manter graduação já destacada.
  - Contato (`pages/contato.js` e `vivieli-terapeuta/pages/contato.js`, se existir): atualizar telefone, e-mail e WhatsApp.
- Conteúdo legal (MD):
  - `content/pages/aviso-medico.md`, `content/pages/termos-uso.md`, `content/pages/politica-privacidade.md`: atualizar campos de contato (telefone/e-mail) e, quando aplicável, horários.

## Padrões/Formatos
- WhatsApp: usar link internacional `https://wa.me/5545991046124` (sem espaços/dígitos extras).
- Telefone textual: mostrar “(45) 99104-6124” em páginas e MDs.
- Horários: “segunda-feira a sexta-feira, das 9:00 às 21:00”.
- Instagram: rótulo “Instagram — Vivieli Comiran”; link provisório até confirmação do @.

## Entregáveis
- Todas as atualizações implementadas no repositório.
- Relatório detalhado (por arquivo/campo) do que foi alterado/adicionado e quaisquer pendências (ex.: confirmação do handle do Instagram, ajustes de endereço se necessário).

## Validação
- Verificar que todas as páginas e o rodapé exibem os dados novos.
- Conferir links de WhatsApp e Instagram.

Posso aplicar este plano agora? Após a execução, envio o relatório solicitado com tudo o que foi substituído/adicionado e o que resta confirmar.