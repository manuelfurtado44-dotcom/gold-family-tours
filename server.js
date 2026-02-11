import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Configurar transporte de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreply@goldfamilytours.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
});

// Rota para enviar emails do formulário de contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    // Email para o cliente
    await transporter.sendMail({
      from: 'noreply@goldfamilytours.com',
      to: email,
      subject: 'Confirmação de Contacto - Gold Family Tours',
      html: `
        <h2>Obrigado por contactar a Gold Family Tours!</h2>
        <p>Olá ${name},</p>
        <p>Recebemos a sua mensagem e entraremos em contacto em breve.</p>
        <p><strong>Detalhes da sua mensagem:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Contacte-nos:</p>
        <p>📞 +351 938 659 615 / +351 211 814 016</p>
        <p>✉️ info@goldfamilytours.com</p>
        <p>📍 Rua Brigadeiro Batista de Carvalho, Nº 7, Lisboa, Portugal</p>
      `
    });

    // Email para o proprietário (reenviado para manuelfurtado@msn.com)
    await transporter.sendMail({
      from: 'noreply@goldfamilytours.com',
      to: 'manuelfurtado@msn.com',
      subject: `Nova Solicitação de Contacto - ${name}`,
      html: `
        <h2>Nova Solicitação de Contacto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Responda directamente para ${email}</p>
      `
    });

    res.json({ 
      success: true, 
      message: 'Email enviado com sucesso! Entraremos em contacto em breve.' 
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ 
      error: 'Erro ao enviar email. Por favor, tente novamente mais tarde.' 
    });
  }
});

// Servir a aplicação React para todas as outras rotas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌍 Gold Family Tours - Servidor em execução na porta ${PORT}`);
  console.log(`📱 Aceda a http://localhost:${PORT}`);
  console.log(`🌐 Domínio: goldfamilytours.com`);
});
