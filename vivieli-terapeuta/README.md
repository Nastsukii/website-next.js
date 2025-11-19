# Site da Terapeuta Vivieli Comiran

Site profissional para Vivieli Comiran, terapeuta especializada em Constelações Familiares, Psicoterapia Individual e Sessões de Autoconhecimento e Desenvolvimento Pessoal.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para aplicações web
- **Tailwind CSS** - Framework CSS utilitário
- **next-themes** - Sistema de temas claro/escuro
- **React Icons** - Biblioteca de ícones
- **gray-matter** - Processamento de arquivos Markdown
- **remark** - Processador de Markdown
- **date-fns** - Manipulação de datas
- **@fontsource-variable/inter** - Fonte Inter Variable

## 📁 Estrutura do Projeto

```
vivieli-terapeuta/
├── components/
│   ├── ui/                    # Componentes de interface
│   │   ├── PageSection.js     # Seção de página reutilizável
│   │   ├── Header.js          # Cabeçalho do site
│   │   ├── Footer.js          # Rodapé do site
│   │   ├── TopRibbon.js       # Banner superior
│   │   └── PostCard.js        # Card de post
│   └── layout/
│       └── Layout.js           # Layout principal
├── containers/                # Containers com lógica de estado
│   ├── HeaderContainer.js
│   └── PostsContainer.js
├── pages/                     # Páginas do Next.js
│   ├── index.js              # Homepage
│   ├── sobre.js              # Página sobre
│   ├── servicos.js           # Página de serviços
│   ├── contato.js            # Página de contato
│   └── posts/                # Blog
│       ├── index.js          # Lista de posts
│       └── [slug].js         # Post individual
├── content/                   # Conteúdo em Markdown
│   ├── posts/                # Posts do blog
│   ├── pages/                # Páginas estáticas
│   └── settings/             # Configurações JSON
├── lib/                      # Bibliotecas utilitárias
│   ├── posts.js              # Processamento de posts
│   ├── settings.js           # Configurações do site
│   └── utils.js              # Funções utilitárias
├── styles/
│   └── globals.css           # Estilos globais
└── public/
    └── images/               # Imagens do site
```

## 🛠️ Instalação e Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3. Build para Produção

```bash
npm run build
npm start
```

## 📝 Como Adicionar Conteúdo

### Adicionando Posts

1. Crie um arquivo `.md` na pasta `content/posts/`
2. Use o frontmatter para metadados:

```yaml
---
title: "Título do Post"
publishDate: "2025-01-25T10:30:00Z"
author: "Vivieli Comiran"
authorImage: "/images/authors/vivieli.jpg"
categories: ["Categoria1", "Categoria2"]
tags: ["tag1", "tag2"]
featuredImage: "/images/posts/imagem.jpg"
featuredPost: true
draft: false
excerpt: "Resumo do post"
readTime: "5 min"
---
```

### Adicionando Páginas Estáticas

1. Crie um arquivo `.md` na pasta `content/pages/`
2. Use o frontmatter:

```yaml
---
title: "Título da Página"
description: "Descrição da página"
showInMenu: true
menuOrder: 1
template: "default"
---
```

### Configurando o Site

Edite os arquivos JSON em `content/settings/`:

- `business.json` - Informações da empresa
- `general.json` - Configurações gerais
- `mainMenu.json` - Menu principal
- `theme.json` - Configurações de tema
- `linkTree.json` - Links de contato

## 🎨 Personalização

### Cores do Tema

Edite `content/settings/theme.json`:

```json
{
  "themeColors": {
    "brand_color": "#8B5CF6",
    "ctaColor": "#8B5CF6",
    "background_color": "#ffffff",
    "darkBrandColor": "#A78BFA",
    "secondaryColor": "#1F2937",
    "darkBackgroundColor": "#111827"
  }
}
```

### Componentes

Os componentes estão em `components/ui/` e podem ser personalizados conforme necessário.

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🌙 Sistema de Temas

O site possui suporte a temas claro e escuro:
- Toggle no cabeçalho
- Persistência no localStorage
- Transições suaves
- Suporte a preferência do sistema

## 🔍 SEO

O site inclui:
- Meta tags dinâmicas
- Open Graph tags
- Twitter Card
- Structured data
- Sitemap automático
- URLs amigáveis

## 📊 Performance

Otimizações incluídas:
- Lazy loading de imagens
- Code splitting automático
- Compressão de assets
- Cache otimizado
- Fontes otimizadas

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configure redirects para SPA

### Servidor Próprio

```bash
npm run build
npm start
```

## 📞 Suporte

Para dúvidas ou suporte:

- **E-mail**: contato@vivielicomiran.com
- **WhatsApp**: (45) 99104-6124
- **Endereço**: Rua Centro, 528 - Centro, Catanduvas - PR

## 📄 Licença

Este projeto é propriedade de Vivieli Comiran. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para promover o bem-estar e desenvolvimento pessoal**