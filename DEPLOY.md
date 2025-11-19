# Guia de Deploy - Site Vivieli Comiran

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado)

#### Passo a Passo:
1. **Criar conta no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub

2. **Conectar Repositório**
   - Clique em "New Project"
   - Conecte seu repositório GitHub
   - Selecione o projeto `vivieli-terapeuta`

3. **Configurações**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Variáveis de Ambiente**
   ```
   NEXT_PUBLIC_SITE_URL=https://vivielicomiran.com
   CONTACT_EMAIL=contato@vivielicomiran.com
   ```

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o processo (2-3 minutos)
   - Site estará disponível em `https://seu-projeto.vercel.app`

#### Vantagens:
- ✅ Deploy automático a cada push
- ✅ CDN global
- ✅ SSL automático
- ✅ Analytics integrado
- ✅ Preview deployments

### 2. Netlify

#### Passo a Passo:
1. **Criar conta no Netlify**
   - Acesse [netlify.com](https://netlify.com)
   - Faça login com GitHub

2. **Conectar Repositório**
   - Clique em "New site from Git"
   - Conecte seu repositório GitHub
   - Selecione o projeto `vivieli-terapeuta`

3. **Configurações de Build**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Deploy**
   - Clique em "Deploy site"
   - Aguarde o processo
   - Site estará disponível em `https://seu-projeto.netlify.app`

#### Vantagens:
- ✅ Deploy contínuo
- ✅ Formulários integrados
- ✅ CDN global
- ✅ SSL automático

### 3. Servidor Próprio

#### Requisitos:
- Node.js 18+
- PM2 (opcional, para produção)
- Nginx (opcional, para proxy reverso)
- SSL Certificate

#### Passo a Passo:
1. **Preparar Servidor**
   ```bash
   # Instalar Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Instalar PM2
   sudo npm install -g pm2
   ```

2. **Clonar e Buildar**
   ```bash
   git clone https://github.com/seu-usuario/vivieli-terapeuta.git
   cd vivieli-terapeuta
   npm install
   npm run build
   ```

3. **Executar com PM2**
   ```bash
   pm2 start npm --name "vivieli-site" -- start
   pm2 save
   pm2 startup
   ```

4. **Configurar Nginx (Opcional)**
   ```nginx
   server {
       listen 80;
       server_name vivielicomiran.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Configurações Pós-Deploy

### 1. Domínio Personalizado

#### Vercel:
1. Acesse Project Settings
2. Vá em "Domains"
3. Adicione seu domínio
4. Configure DNS conforme instruções

#### Netlify:
1. Acesse Site Settings
2. Vá em "Domain management"
3. Adicione seu domínio
4. Configure DNS conforme instruções

### 2. SSL Certificate

#### Automático (Vercel/Netlify):
- SSL é configurado automaticamente
- Renovação automática

#### Manual (Servidor Próprio):
```bash
# Usando Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d vivielicomiran.com
```

### 3. Analytics

#### Google Analytics 4:
1. Crie conta no [Google Analytics](https://analytics.google.com)
2. Adicione o código de tracking no `_document.js`
3. Configure goals de conversão

#### Google Search Console:
1. Acesse [Search Console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Verifique propriedade via DNS ou HTML

## 📊 Monitoramento

### 1. Performance
- **Core Web Vitals**: Monitore LCP, FID, CLS
- **PageSpeed Insights**: Teste regular de performance
- **GTmetrix**: Análise detalhada de velocidade

### 2. Uptime
- **UptimeRobot**: Monitoramento de disponibilidade
- **Pingdom**: Testes de conectividade
- **StatusCake**: Alertas de downtime

### 3. Erros
- **Sentry**: Monitoramento de erros JavaScript
- **LogRocket**: Gravação de sessões de usuário
- **Bugsnag**: Relatórios de bugs

## 🔒 Segurança

### 1. Headers de Segurança
```javascript
// Já configurado no next.config.mjs
{
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin'
}
```

### 2. HTTPS
- ✅ Obrigatório em produção
- ✅ Redirect automático de HTTP para HTTPS
- ✅ HSTS headers

### 3. Rate Limiting
```javascript
// Implementar com middleware
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // máximo 100 requests por IP
})
```

## 📈 Otimizações

### 1. Performance
- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Compressão gzip/brotli
- ✅ Cache de assets estáticos

### 2. SEO
- ✅ Meta tags dinâmicas
- ✅ Sitemap automático
- ✅ URLs amigáveis
- ✅ Structured data

### 3. Acessibilidade
- ✅ Navegação por teclado
- ✅ Contraste adequado
- ✅ Alt text em imagens
- ✅ ARIA labels

## 🚨 Troubleshooting

### Problemas Comuns:

#### 1. Build Falha
```bash
# Limpar cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

#### 2. Erro de Imagens
- Verificar se imagens estão em `/public/images/`
- Usar caminhos relativos: `/images/nome.jpg`
- Verificar permissões de arquivo

#### 3. Erro de Markdown
- Verificar sintaxe do frontmatter
- Validar YAML com ferramentas online
- Verificar encoding UTF-8

#### 4. Problemas de CSS
- Verificar configuração do Tailwind
- Limpar cache do navegador
- Verificar imports de CSS

## 📞 Suporte

### Contatos Técnicos:
- **E-mail**: contato@vivielicomiran.com
- **WhatsApp**: (45) 99104-6124

### Documentação:
- **README.md**: Instruções completas
- **report.md**: Relatório técnico
- **Comentários no código**: Documentação inline

---

**Última atualização: Janeiro de 2025**
**Status: Pronto para produção**
