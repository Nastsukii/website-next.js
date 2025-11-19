## Objetivo
- Corrigir todos os links/telefones remanescentes para usar o WhatsApp correto (5545991046124) em todo o site (raiz e espelho).
- Adicionar mais quadros de serviços na Home para refletir todas as abordagens informadas (Hipnose Regressiva, Reiki, Apometria Regressiva, Barras de Access, Creso Midas, 7 Safiras e Comandos Quânticos).

## Correções de Contato (WhatsApp/Telefone)
- Páginas e componentes (raiz):
  - `pages/sobre.js`: botão “Agendar Consulta” (CTA) → atualizar para `https://wa.me/5545991046124`.
  - `pages/servicos.js`: seção CTA final (dois links de WhatsApp) → atualizar.
  - `pages/posts/[slug].js`: CTA “Agendar Consulta” → atualizar.
  - `components/ui/Footer.js`: atualizar default menu/links sociais (WhatsApp, Telefone, E-mail).
- Páginas e componentes (espelho `vivieli-terapeuta/`):
  - `pages/sobre.js`: CTA para WhatsApp.
  - `pages/servicos.js`: seção CTA final.
  - `pages/posts/[slug].js`: CTA “Agendar Consulta”.
  - `components/ui/Footer.js`: atualizar default menu/links sociais.
  - `content/settings/linkTree.json`: WhatsApp/Telefone.
  - `content/settings/business.json`: `brandPhone`.
  - `content/pages/*`: substituir telefone em aviso médico, termos de uso e privacidade.

## Ampliação de Serviços na Home
- Raiz `pages/index.js`: adicionar 6 cards adicionais ao array `services` com:
  - Hipnose Regressiva
  - Reiki Tradicional — Níveis 1 e 2
  - Apometria Regressiva
  - Barras de Access
  - Creso Midas
  - 7 Safiras e Comandos Quânticos
- Espelho `vivieli-terapeuta/pages/index.js`: replicar os 6 novos cards.

## Entregáveis
- Aplicar todas as correções e ampliações solicitadas.
- Validar que nenhum link aponta para números antigos.
- Garantir consistência entre raiz e espelho.

Posso aplicar agora? Em seguida te envio um relatório resumindo exatamente onde corrigi os links e onde acrescentei serviços.