## Análise
- Existem dois Footers: `components/ui/Footer.js` e `vivieli-terapeuta/components/ui/Footer.js`.
- Estrutura atual: grid com colunas; coluna de empresa usa blocos com ícone + texto em `flex items-center`; colunas de menu usam lista; seção de redes sociais usa `justify-between`.
- O pedido: centralizar os itens com seus pais (horizontal e visualmente), mantendo responsividade.

## Correções propostas
1. Coluna de empresa
- Tornar container `flex flex-col items-center text-center`.
- Linhas de endereço/telefone/e-mail: usar `flex items-center justify-center` para alinhar ícone + texto ao centro.
2. Colunas de menu
- Adicionar `text-center` nos títulos e listas; manter espaçamento.
3. Redes sociais e copyright
- Alterar container para `justify-center` com espaçamento, mantendo `items-center`.
- Garantir que o texto de copyright fique centralizado.
4. Responsividade
- Manter grid e breakpoints; centralização aplicada em todas larguras.

## Implementação
- Aplicar as classes de centralização nos dois arquivos de Footer, respeitando o estilo Tailwind existente.
- Não adicionar comentários; seguir o padrão do código atual.

## Testes
- Abrir `http://localhost:3001/` e navegar pelas páginas para visualizar o Footer.
- Verificar centralização em desktop e mobile.

## Resultado esperado
- Todos os itens do Footer ficam centralizados visualmente dentro de seus contêineres pais em ambos projetos.