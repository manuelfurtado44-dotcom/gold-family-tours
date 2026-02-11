# Guia de Manutenção - Gold Family Tours

## 📋 Operações Diárias

### Verificar emails recebidos
- Aceder a manuelfurtado@msn.com
- Verificar novos contactos do formulário
- Responder em até 24 horas

### Monitorar site
- Aceder a goldfamilytours.com
- Verificar se todas as páginas carregam corretamente
- Testar formulário de contacto

## 🔧 Tarefas Semanais

### Backup de dados
```bash
# Criar backup
tar -czf backup-$(date +%Y%m%d).tar.gz dist/

# Guardar em local seguro
```

### Verificar logs de erro
```bash
# Heroku
heroku logs --tail

# Servidor próprio
pm2 logs gold-family-tours
```

### Testar funcionalidades
- [ ] Navegação entre páginas
- [ ] Seletor de idiomas (PT, EN, ES)
- [ ] Formulário de contacto
- [ ] Links de contacto (telefone, email)
- [ ] Responsividade em telemóvel

## 📱 Atualizar Conteúdo

### Adicionar novo destino
Editar `main.jsx` e adicionar à seção `translations`:

```javascript
destinations: {
  title: 'Destinos Populares',
  novo_destino: { 
    name: 'Nome do Destino', 
    desc: 'Descrição breve' 
  }
}
```

### Atualizar depoimentos
Editar `main.jsx` na seção `testimonials`:

```javascript
testimonials: {
  title: 'O Que Dizem Nossos Clientes',
  testimonial1: {
    text: 'Novo depoimento aqui',
    author: 'Nome do Cliente'
  }
}
```

### Adicionar imagens
1. Guardar imagem em `/public`
2. Atualizar função `getDestinationImage()` em `main.jsx`
3. Fazer build: `npm run build`
4. Fazer deploy

### Atualizar informações de contacto
Editar `main.jsx` na seção `contact`:

```javascript
contact: {
  title: 'Entre em Contacto',
  phone: 'Telefone',
  email: 'Email',
  address: 'Morada'
}
```

## 🔐 Segurança

### Alterar credenciais de email
```bash
# Atualizar .env
EMAIL_USER=novo-email@gmail.com
EMAIL_PASSWORD=nova-senha

# Reiniciar aplicação
pm2 restart gold-family-tours
```

### Atualizar dependências
```bash
# Verificar atualizações
npm outdated

# Atualizar tudo
npm update

# Atualizar versão específica
npm install express@latest

# Fazer build e testar
npm run build
npm run prod
```

### Verificar vulnerabilidades
```bash
npm audit
npm audit fix
```

## 📊 Estatísticas e Analytics

### Adicionar Google Analytics (Opcional)
1. Criar conta em https://analytics.google.com
2. Adicionar código de rastreamento ao `index.html`
3. Monitorar visitantes e comportamento

### Monitorar performance
- Usar https://pagespeed.web.dev/
- Verificar velocidade de carregamento
- Otimizar imagens se necessário

## 🐛 Resolução de Problemas

### Site não carrega
```bash
# Verificar se servidor está ativo
pm2 status

# Reiniciar
pm2 restart gold-family-tours

# Verificar logs
pm2 logs gold-family-tours
```

### Email não envia
1. Verificar credenciais em `.env`
2. Verificar se Gmail tem autenticação 2FA ativa
3. Gerar nova senha de aplicação
4. Testar com curl:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"seu@email.com","message":"Teste"}'
```

### Formulário não funciona
1. Abrir console do navegador (F12)
2. Verificar erros
3. Verificar se servidor está respondendo
4. Testar endpoint: `curl http://localhost:3000/api/contact`

### Site lento
1. Verificar recursos do servidor: `top`
2. Verificar se há muitos processos Node.js
3. Aumentar memória/CPU se necessário
4. Otimizar imagens

## 📈 Crescimento e Expansão

### Adicionar mais idiomas
1. Adicionar novo idioma em `translations` (ex: `fr` para francês)
2. Adicionar botão de idioma no header
3. Traduzir todo conteúdo
4. Testar e fazer deploy

### Integrar sistema de reservas
1. Adicionar formulário de reserva
2. Integrar com calendário
3. Enviar confirmação por email
4. Sincronizar com agenda

### Adicionar blog
1. Criar pasta `/blog`
2. Adicionar artigos sobre destinos
3. Otimizar para SEO
4. Promover em redes sociais

### Integrar redes sociais
1. Adicionar links para Facebook, Instagram, etc.
2. Adicionar widget de feed
3. Integrar comentários

## 📞 Contacto e Suporte

**Proprietário**: Pedro Manuel Furtado Ferraz
- 📞 +351 938 659 615 / +351 211 814 016
- ✉️ manuelfurtado@msn.com

**Suporte Técnico**:
- Para dúvidas técnicas, contacte o desenvolvedor
- Manter backups regulares
- Documentar todas as alterações

## 📋 Checklist Mensal

- [ ] Verificar se site está online
- [ ] Revisar emails de contacto
- [ ] Fazer backup completo
- [ ] Atualizar dependências
- [ ] Verificar certificado SSL (data de expiração)
- [ ] Revisar logs de erro
- [ ] Testar todas as funcionalidades
- [ ] Verificar performance
- [ ] Atualizar conteúdo se necessário
- [ ] Documentar alterações

## 📋 Checklist Anual

- [ ] Renovar domínio
- [ ] Renovar certificado SSL
- [ ] Atualizar Node.js
- [ ] Revisar e atualizar dependências
- [ ] Fazer auditoria de segurança
- [ ] Revisar estratégia de marketing
- [ ] Coletar feedback de clientes
- [ ] Planejar melhorias para próximo ano

---

**Última atualização**: Fevereiro 2024
