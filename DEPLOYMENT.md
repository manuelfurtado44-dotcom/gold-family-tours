# Guia de Deploy - Gold Family Tours

## 📋 Índice
1. [Requisitos](#requisitos)
2. [Configuração Local](#configuração-local)
3. [Deploy em Servidor Permanente](#deploy-em-servidor-permanente)
4. [Configuração de Email](#configuração-de-email)
5. [Domínio e DNS](#domínio-e-dns)
6. [Manutenção](#manutenção)

## Requisitos

### Para desenvolvimento local:
- Node.js 16+ (https://nodejs.org/)
- npm ou yarn
- Git

### Para servidor de produção:
- Node.js 16+ instalado no servidor
- npm ou yarn
- Acesso SSH ao servidor
- Domínio registado (goldfamilytours.com)
- Certificado SSL/TLS (recomendado)

## Configuração Local

### 1. Clonar o repositório
```bash
git clone <seu-repositorio> gold-family-tours
cd gold-family-tours
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
```bash
cp .env.example .env
```

Editar `.env` com as suas credenciais:
```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-aplicacao
PORT=3000
NODE_ENV=development
```

### 4. Executar em desenvolvimento
```bash
npm run dev
```

Aceder a http://localhost:5173

### 5. Testar em produção localmente
```bash
npm run prod
```

Aceder a http://localhost:3000

## Deploy em Servidor Permanente

### Opção 1: Heroku (Recomendado para iniciantes)

#### 1. Criar conta em Heroku
- Aceder a https://www.heroku.com
- Criar conta gratuita

#### 2. Instalar Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows/Linux
# Descarregar de https://devcenter.heroku.com/articles/heroku-cli
```

#### 3. Fazer login
```bash
heroku login
```

#### 4. Criar aplicação
```bash
heroku create gold-family-tours
```

#### 5. Configurar variáveis de ambiente
```bash
heroku config:set EMAIL_USER=seu-email@gmail.com
heroku config:set EMAIL_PASSWORD=sua-senha-de-aplicacao
heroku config:set NODE_ENV=production
```

#### 6. Deploy
```bash
git push heroku main
```

#### 7. Abrir aplicação
```bash
heroku open
```

### Opção 2: DigitalOcean / Linode / AWS (Mais controlo)

#### 1. Criar servidor Ubuntu 22.04 LTS

#### 2. Conectar via SSH
```bash
ssh root@seu-ip-do-servidor
```

#### 3. Atualizar sistema
```bash
apt update && apt upgrade -y
```

#### 4. Instalar Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs
```

#### 5. Instalar Git
```bash
apt install -y git
```

#### 6. Clonar repositório
```bash
cd /var/www
git clone <seu-repositorio> gold-family-tours
cd gold-family-tours
```

#### 7. Instalar dependências
```bash
npm install --production
```

#### 8. Configurar variáveis de ambiente
```bash
nano .env
```

Adicionar:
```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-aplicacao
PORT=3000
NODE_ENV=production
```

#### 9. Instalar PM2 (gestor de processos)
```bash
npm install -g pm2
```

#### 10. Iniciar aplicação com PM2
```bash
pm2 start server.js --name "gold-family-tours"
pm2 startup
pm2 save
```

#### 11. Instalar Nginx (reverse proxy)
```bash
apt install -y nginx
```

#### 12. Configurar Nginx
```bash
nano /etc/nginx/sites-available/gold-family-tours
```

Adicionar:
```nginx
server {
    listen 80;
    server_name goldfamilytours.com www.goldfamilytours.com;

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

#### 13. Ativar site
```bash
ln -s /etc/nginx/sites-available/gold-family-tours /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

#### 14. Instalar SSL (Let's Encrypt)
```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d goldfamilytours.com -d www.goldfamilytours.com
```

## Configuração de Email

### Gmail (Recomendado)

#### 1. Ativar autenticação de 2 fatores
- Aceder a https://myaccount.google.com/security
- Ativar "Verificação em 2 passos"

#### 2. Gerar senha de aplicação
- Aceder a https://myaccount.google.com/apppasswords
- Selecionar "Mail" e "Windows Computer"
- Copiar a senha gerada
- Usar esta senha em `EMAIL_PASSWORD`

### Outro provedor de email

Modificar `server.js`:
```javascript
const transporter = nodemailer.createTransport({
  host: 'seu-servidor-smtp.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

## Domínio e DNS

### 1. Registar domínio
- Aceder a https://www.namecheap.com ou similar
- Registar goldfamilytours.com

### 2. Configurar DNS

Se usar Heroku:
```
Apontar para: seu-app.herokuapp.com
```

Se usar servidor próprio:
```
A Record: seu-ip-do-servidor
CNAME: www -> seu-dominio.com
```

### 3. Verificar DNS
```bash
nslookup goldfamilytours.com
```

## Manutenção

### Verificar logs
```bash
# Heroku
heroku logs --tail

# PM2
pm2 logs gold-family-tours

# Nginx
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Atualizar código
```bash
git pull origin main
npm install
npm run build

# Heroku
git push heroku main

# Servidor próprio
pm2 restart gold-family-tours
```

### Monitorar aplicação
```bash
# PM2
pm2 monit

# Heroku
heroku ps
```

### Backup de dados
```bash
# Fazer backup da pasta dist
tar -czf backup-$(date +%Y%m%d).tar.gz dist/
```

## Troubleshooting

### Erro: "Cannot find module 'express'"
```bash
npm install
```

### Erro: "Email não envia"
1. Verificar credenciais em `.env`
2. Verificar se a senha de aplicação está correta (Gmail)
3. Verificar logs: `pm2 logs` ou `heroku logs`

### Erro: "Domínio não funciona"
1. Aguardar propagação de DNS (até 48 horas)
2. Verificar registos DNS: `nslookup goldfamilytours.com`
3. Verificar certificado SSL: `https://www.ssllabs.com/ssltest/`

### Aplicação lenta
1. Verificar recursos do servidor: `top`, `free -h`
2. Verificar logs de erro
3. Aumentar memória/CPU se necessário

## Suporte

Para dúvidas sobre deploy, contacte:
- 📞 +351 938 659 615
- ✉️ manuelfurtado@msn.com

## Checklist de Deploy

- [ ] Node.js instalado no servidor
- [ ] Repositório clonado
- [ ] Dependências instaladas (`npm install`)
- [ ] Variáveis de ambiente configuradas (`.env`)
- [ ] Email testado e funcional
- [ ] Domínio registado
- [ ] DNS apontado para servidor
- [ ] SSL/TLS configurado
- [ ] Aplicação iniciada (PM2 ou Heroku)
- [ ] Testes de funcionalidade completos
- [ ] Backups configurados
- [ ] Monitoramento ativo

---

**Última atualização**: Fevereiro 2024
