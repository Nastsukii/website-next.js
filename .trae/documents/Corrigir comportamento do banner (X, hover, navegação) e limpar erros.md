## Diagnóstico Rápido
- Componente ativo do banner: `components/ui/TopRibbon.js` (animação via requestAnimationFrame) e um duplicado em `vivieli-terapeuta/components/ui/TopRibbon.js` (CSS marquee).
- Pausa no hover: habilitada por padrão (`pauseOnHover = true`), causando travamento no hover em ambas as versões.
- Reinício ao trocar de página: o banner é remontado a cada navegação porque o `Layout` é usado por página. O código tenta persistir o deslocamento no `localStorage`, porém o salvamento no unmount usa um valor de `offset` antigo por causa de closure estagnada (cleanup lê um `offset` desatualizado). Isso explica o "reinicia".
- Fechar (X) "quebra a página": fechamento remove o banner instantaneamente; isso provoca salto de layout e pode aparentar quebra. Não há persistência do estado de fechado, então ao navegar ele volta.

## Objetivos
1) Ao clicar no X não quebrar a página e manter a interface estável.
2) Não pausar no hover; a animação deve seguir contínua.
3) Ao navegar entre páginas, o banner continua de onde estava (sem reiniciar) e, se fechado, permanece fechado durante a sessão.
4) Resolver eventuais erros/avisos do terminal relacionados a esse fluxo.

## Alterações Propostas (cirúrgicas)
### 1) `components/ui/TopRibbon.js`
- Hover contínuo: alterar default para `pauseOnHover = false` e manter handlers (linhas 8–11, 80–81 do arquivo atual) com a lógica intacta.
- Persistência robusta do offset:
  - Introduzir `const offsetRef = useRef(0)` e um `useEffect` sincronizando `offsetRef.current = offset` sempre que `offset` mudar.
  - No cleanup do efeito principal (linhas 72–76), gravar `offsetRef.current` no `localStorage` para evitar valor antigo por closure.
  - Opcional: adicionar um `useEffect` leve para gravar o offset a cada ~250ms enquanto animando, reduzindo a chance de perda de progresso em desmontagens rápidas.
- Continuidade na navegação:
  - Integrar `useRouter` e, em `routeChangeStart`, salvar imediatamente o `offsetRef.current` antes de desmontar.
  - Na montagem (linhas 32–38), manter a leitura do `localStorage` para retomar do último deslocamento.
- Fechar sem "quebrar":
  - Em vez de retornar `null` imediatamente quando `isVisible` for falso, animar colapso de altura (por exemplo, transição de `max-height`/`opacity` por 200–300ms) e só então desmontar.
  - Armazenar `topRibbonClosed = '1'` em `sessionStorage` ao clicar no X; na montagem, se presente, iniciar fechado para a sessão atual.

### 2) `components/layout/Layout.js`
- Passar `pauseOnHover={false}` ao `<TopRibbon>` (linhas 61–65) para garantir comportamento contínuo no hover.

### 3) Sincronização do duplicado
- Atualizar `vivieli-terapeuta/components/ui/TopRibbon.js` para usar a mesma lógica do arquivo principal (RAF + persistência + fechamento com colapso).
- Em `vivieli-terapeuta/components/layout/Layout.js`, também passar `pauseOnHover={false}` ao `<TopRibbon>` (linhas 61–65).

### 4) Limpeza de erros/avisos
- Verificar e ajustar:
  - Acesso ao `localStorage` apenas no client (já está em `useEffect`).
  - Dependências de `useEffect` para não recriar o loop a cada render (separar o efeito do loop do efeito que sincroniza o `offsetRef`).
  - Conferir se não há hidratação problemática no Header; já há `suppressHydrationWarning` no toggle de tema, evitando avisos.

## Testes Manuais
- Hover sobre o banner: animação segue contínua.
- Clique no X: colapso suave sem deslocar bruscamente o layout; navegar para outra página e confirmar que permanece fechado na sessão.
- Navegação Início → Sobre → Serviços: posição do texto do banner continua (sem reiniciar) quando não fechado.
- Checar terminal: ausência de erros e redução de avisos.

## Observação sobre alternativa estrutural
- Caso desejado no futuro, podemos mover `<TopRibbon>` para `pages/_app.js` para que seja montado apenas uma vez durante toda a navegação. O plano acima já resolve o problema sem refatoração global, mas a alternativa deixa o comportamento ainda mais estável.