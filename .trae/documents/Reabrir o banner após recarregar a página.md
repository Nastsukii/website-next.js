## Objetivo
- Quando o usuário fechar o banner e recarregar (refresh) a página, o banner deve voltar a aparecer. Ao navegar entre rotas sem recarregar, ele pode permanecer fechado durante a sessão atual.

## Estratégia
- Remover a persistência do estado "fechado" em `sessionStorage`, pois ela persiste mesmo após refresh.
- Usar uma flag em memória no `window` (por exemplo, `window.__topRibbonClosed`) para manter o banner fechado apenas durante a navegação SPA (enquanto a aba não é recarregada). Ao recarregar a página, essa flag some e o banner volta a aparecer.

## Alterações Propostas
1) `components/ui/TopRibbon.js`
- Remover leituras/escritas de `sessionStorage` referentes ao estado "fechado".
- Ao montar: se `window.__topRibbonClosed === true`, aplicar `setIsVisible(false)` para manter fechado dentro da sessão.
- No fechar (X): definir `window.__topRibbonClosed = true`, pausar a animação e colapsar suavemente como já está implementado.
- Manter a lógica atual de persistência do `offset` em `localStorage` e de continuidade de animação entre rotas.

2) `vivieli-terapeuta/components/ui/TopRibbon.js`
- Repetir as mesmas alterações para manter consistência entre os dois projetos.

## Testes Manuais
- Fechar o banner e navegar para outra rota: o banner permanece fechado.
- Dar refresh (CTRL+R/F5): o banner reaparece.
- Verificar: hover contínuo, continuidade da animação entre páginas e ausência de erros de hooks.

## Observação
- Se desejar que o banner reabra também ao trocar de rota (sem refresh), basta limpar `window.__topRibbonClosed` no evento `routeChangeComplete`. Não incluído agora para cumprir seu pedido exatamente.