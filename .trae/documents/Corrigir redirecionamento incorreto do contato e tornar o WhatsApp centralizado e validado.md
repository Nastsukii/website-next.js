## Diagnóstico
- Revisei os pontos que podem causar redirecionamento errado:
  - CTAs renderizados por `components/ui/PageSection.js` recebem `ctaBtnLink`/`ctaContrastBtnLink` diretamente; se algum arquivo passar um URL antigo, o componente não corrige.
  - Botões diretos (ex.: `pages/sobre.js` e `vivieli-terapeuta/pages/sobre.js`) usam `<a href=...>` sem validação.
  - Não há `router.push`/`window.open` nem middleware/rewrites; o problema decorre de URLs inconsistentes em páginas ou cache.

## Correções propostas
1. Centralizar a fonte do link de WhatsApp:
   - Criar `lib/contact.js` com:
     - `export const WHATSAPP_LINK = 'https://wa.me/5545991046124'`
     - `export function normalizeWhatsAppHref(href)` que retorna `WHATSAPP_LINK` quando detectar `wa.me` com número incorreto.
     - `export function isExternalHref(href)` para setar `target`/`rel` corretamente.
2. Validar e corrigir automaticamente em componentes:
   - Em `components/ui/PageSection.js`:
     - Normalizar `ctaBtnLink` e `ctaContrastBtnLink` quando contiverem `wa.me`.
     - Adicionar `target="_blank"` e `rel="noopener noreferrer"` para links externos.
   - Em `components/layout/Layout.js`:
     - Adicionar um `useEffect` que varre anchors na página e normaliza qualquer `wa.me` divergente (camada de segurança), registrando `console.warn` quando corrigir.
3. Atualizar os pontos diretos:
   - Substituir `<a href>` dos CTAs em `pages/sobre.js` e `vivieli-terapeuta/pages/sobre.js` para usar `WHATSAPP_LINK`.
   - Opcional: Unificar `Footer.js` e `vivieli-terapeuta/components/ui/Footer.js` para importar `WHATSAPP_LINK` (ambos já estão corretos; a mudança reduz risco futuro).
4. Tratamento de erros e prevenção:
   - Validação simples: se `href` contiver `wa.me` com número que não corresponde ao esperado, bloquear a navegação e abrir `WHATSAPP_LINK` corretamente.
   - Logs: `console.warn('[contact] whatsapp href normalized', { original, normalized })` quando ocorrer correção.
5. Testes e verificação
   - Testar nas páginas: Início, Sobre, Serviços, Contato e Posts (nos dois conjuntos: raiz e `vivieli-terapeuta`).
   - Testar pós hard reload e limpeza de cache.
   - Validar em pelo menos dois navegadores (Chrome/Edge).
6. Persistência e documentação
   - (Opcional) Adicionar `whatsappLink` em `content/settings/business.json` e consumir via util.
   - Atualizar `report.md` com a seção “Correção de redirecionamento do WhatsApp”: o que foi alterado, onde e como validar.

## Resultado esperado
- Todos os links de contato e CTAs que usam WhatsApp redirecionam consistentemente para `https://wa.me/5545991046124`.
- Hard reload e limpeza de cache não exibem o número antigo.
- Qualquer link divergente é normalizado em tempo de execução e gera log para monitoramento.