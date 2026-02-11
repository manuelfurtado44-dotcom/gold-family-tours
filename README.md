# 🌍 Gold Family Tours - Website Oficial

Website profissional e multilíngue para a empresa de passeios turísticos privados **Gold Family Tours**, liderada por **Pedro Manuel Furtado Ferraz**.

## 🎯 Características

- ✅ **Multilíngue**: Português, Inglês e Espanhol
- ✅ **Responsivo**: Funciona em desktop, tablet e telemóvel
- ✅ **Moderno**: Design elegante e profissional
- ✅ **Rápido**: Otimizado para performance
- ✅ **Seguro**: SSL/TLS e validação de formulários
- ✅ **Contacto**: Formulário com reencaminhamento de emails
- ✅ **Imagens**: Galeria com destinos turísticos

## 🚀 Início Rápido

### Desenvolvimento Local

```bash
# 1. Clonar repositório
git clone <seu-repositorio>
cd gold-family-tours

# 2. Instalar dependências
npm install

# 3. Executar em desenvolvimento
npm run dev

# 4. Aceder a http://localhost:5173
```

### Produção

```bash
# 1. Fazer build
npm run build

# 2. Iniciar servidor
npm start

# 3. Aceder a http://localhost:3000
```

## 📁 Estrutura do Projeto

```
gold-family-tours/
├── public/                 # Imagens e assets estáticos
│   ├── family_tour.jpeg   # Foto da família
│   ├── sintra.jpg         # Imagem de Sintra
│   ├── fatima.jpg         # Imagem de Fátima
│   └── nazare.jpg         # Imagem de Nazaré
├── src/
│   └── main.jsx          # Componente React principal
├── dist/                  # Build de produção
├── index.html            # Arquivo HTML principal
├── style.css             # Estilos CSS
├── server.js             # Servidor Node.js/Express
├── package.json          # Dependências do projeto
├── vite.config.js        # Configuração do Vite
├── .env.example          # Exemplo de variáveis de ambiente
├── DEPLOYMENT.md         # Guia de deploy
├── MAINTENANCE.md        # Guia de manutenção
└── README.md             # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React.js, Vite, CSS3
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Deployment**: Heroku, DigitalOcean, AWS, etc.

## 📧 Configuração de Email

### Gmail (Recomendado)

1. Ativar autenticação de 2 fatores em https://myaccount.google.com/security
2. Gerar senha de aplicação em https://myaccount.google.com/apppasswords
3. Adicionar ao arquivo `.env`:

```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-aplicacao
```

## 🌐 Domínio e Deploy

### Registar Domínio
- Aceder a https://www.namecheap.com ou similar
- Registar **goldfamilytours.com**

### Deploy Recomendado

**Opção 1: Heroku (Mais fácil)**
```bash
heroku create gold-family-tours
heroku config:set EMAIL_USER=seu-email@gmail.com
heroku config:set EMAIL_PASSWORD=sua-senha
git push heroku main
```

**Opção 2: DigitalOcean (Mais controlo)**
- Ver guia completo em `DEPLOYMENT.md`

## 📱 Seções do Website

1. **Hero**: Apresentação da empresa
2. **Sobre**: Informações sobre Pedro Manuel Furtado Ferraz
3. **Serviços**: Passeios privados, transferes, viagens de negócios
4. **Destinos**: 10 destinos populares em Portugal e Espanha
5. **Depoimentos**: Avaliações de clientes satisfeitos
6. **Contacto**: Formulário e informações de contacto

## 🔄 Fluxo de Contacto

1. Cliente preenche formulário no website
2. Email é enviado para o cliente (confirmação)
3. Email é reenviado para **manuelfurtado@msn.com**
4. Pedro Manuel responde directamente ao cliente

## 📞 Informações de Contacto

**Gold Family Tours**
- 📞 +351 938 659 615 / +351 211 814 016
- ✉️ info@goldfamilytours.com
- 📍 Rua Brigadeiro Batista de Carvalho, Nº 7, Lisboa, Portugal

## 📚 Documentação

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guia completo de deploy
- **[MAINTENANCE.md](./MAINTENANCE.md)** - Guia de manutenção e operação

## 🔒 Segurança

- ✅ Validação de formulários
- ✅ CORS habilitado
- ✅ Variáveis de ambiente protegidas
- ✅ SSL/TLS recomendado
- ✅ Rate limiting (recomendado para produção)

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
npm install
```

### Email não envia
1. Verificar credenciais em `.env`
2. Verificar logs: `pm2 logs gold-family-tours`
3. Testar com curl:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"seu@email.com","message":"Teste"}'
```

### Site não carrega
```bash
# Verificar servidor
pm2 status

# Reiniciar
pm2 restart gold-family-tours

# Verificar logs
pm2 logs gold-family-tours
```

## 📊 Performance

- **Tamanho do build**: ~712 KB
- **Tempo de carregamento**: <2 segundos
- **Lighthouse Score**: 90+
- **Mobile Friendly**: ✅

## 🎨 Customização

### Alterar cores
Editar variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D4A574;
    --accent-color: #2C3E50;
}
```

### Adicionar novo idioma
1. Adicionar traduções em `main.jsx`
2. Adicionar botão de idioma no header
3. Testar e fazer deploy

### Adicionar nova seção
1. Criar nova seção em `main.jsx`
2. Adicionar estilos em `style.css`
3. Adicionar ao menu de navegação
4. Testar e fazer deploy

## 📈 Próximos Passos

- [ ] Registar domínio goldfamilytours.com
- [ ] Fazer deploy em servidor permanente
- [ ] Configurar email profissional
- [ ] Adicionar Google Analytics
- [ ] Integrar sistema de reservas
- [ ] Criar blog com dicas de viagem
- [ ] Integrar redes sociais
- [ ] Otimizar para SEO

## 📄 Licença

Este projeto é propriedade de **Gold Family Tours** e **Pedro Manuel Furtado Ferraz**.

## 👨‍💼 Autor

Desenvolvido para **Gold Family Tours** em Fevereiro 2024.

**Contacto**:
- 📞 +351 938 659 615
- ✉️ manuelfurtado@msn.com

---

**Versão**: 1.0.0  
**Última atualização**: Fevereiro 2024
