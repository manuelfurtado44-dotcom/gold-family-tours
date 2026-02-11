import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

// Translations
const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      destinations: 'Destinos',
      testimonials: 'Depoimentos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Experiências Únicas e Personalizadas',
      subtitle: 'O melhor para si e sua Família, à sua medida e ao melhor preço.',
      cta: 'Solicitar Passeio'
    },
    about: {
      title: 'Sobre a Gold Family Tours',
      subtitle: 'Mais de 20 Anos de Excelência',
      description: 'Com mais de 20 anos de experiência, a Gold Family Tours, liderada por Pedro Manuel Furtado Ferraz, oferece passeios turísticos privados de alta qualidade. Somos especialistas em criar roteiros personalizados que superam as expectativas, combinando conhecimento histórico profundo com conforto e pontualidade. Cada viagem é uma oportunidade de descobrir Portugal e Espanha de forma única e memorável.'
    },
    services: {
      title: 'Nossos Serviços',
      private: {
        name: 'Passeios Privados',
        desc: 'Roteiros exclusivos personalizados em Portugal e Espanha, adaptados aos seus interesses e preferências.'
      },
      transfers: {
        name: 'Transferes de Luxo',
        desc: 'Transporte confortável com Wi-Fi gratuito, veículos modernos e motoristas profissionais e pontuais.'
      },
      business: {
        name: 'Viagens de Negócios',
        desc: 'Logística completa e organização para eventos corporativos, reuniões e incentivos.'
      }
    },
    destinations: {
      title: 'Destinos Populares',
      lisbon: { name: 'Lisboa', desc: 'A capital encantadora com história e cultura' },
      sintra: { name: 'Sintra', desc: 'Palácios românticos e paisagens mágicas' },
      cascais: { name: 'Cascais', desc: 'Praia elegante à beira do Oceano Atlântico' },
      fatima: { name: 'Fátima', desc: 'Santuário de Nossa Senhora do Rosário' },
      obidos: { name: 'Óbidos', desc: 'Vila medieval murada de conto de fadas' },
      nazare: { name: 'Nazaré', desc: 'Panorâmica espetacular e ondas lendárias' },
      porto: { name: 'Porto', desc: 'Cidade histórica do Douro e vinho do Porto' },
      coimbra: { name: 'Coimbra', desc: 'Universidade antiga e tradições académicas' },
      evora: { name: 'Évora', desc: 'Cidade romana com templo antigo preservado' },
      santiago: { name: 'Santiago de Compostela', desc: 'Destino de peregrinação histórico' }
    },
    testimonials: {
      title: 'O Que Dizem Nossos Clientes',
      testimonial1: {
        text: 'O Sr. Pedro é um excelente guia, pessoa carismática, de confiança, muita responsabilidade e pontualidade. Um ótimo historiador, seus passeios são perfeitos e muito aproveitosos.',
        author: 'Soraia Paulinelli'
      },
      testimonial2: {
        text: 'Fiquei encantada com a qualidade e o serviço prestado por esta empresa. Uma guia turístico ímpar com conhecimento profundo da história de Portugal.',
        author: 'Jeanne Silva'
      },
      testimonial3: {
        text: 'Se Portugal já é linda, fica ainda mais maravilhosa pelas mãos da competentíssima equipe do Lisboa Tours. Cordialidade, confiabilidade, pontualidade!',
        author: 'Adalberto Luque'
      }
    },
    contact: {
      title: 'Entre em Contacto',
      subtitle: 'Estamos prontos para criar sua experiência perfeita',
      phone: 'Telefone',
      email: 'Email',
      address: 'Morada',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        submit: 'Enviar'
      }
    },
    footer: {
      copyright: '© 2024 Gold Family Tours. Todos os direitos reservados.',
      contact: 'Contacto'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      destinations: 'Destinations',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      title: 'Unique and Personalized Experiences',
      subtitle: 'The best for you and your family, tailored to your needs at the best price.',
      cta: 'Request a Tour'
    },
    about: {
      title: 'About Gold Family Tours',
      subtitle: 'Over 20 Years of Excellence',
      description: 'With over 20 years of experience, Gold Family Tours, led by Pedro Manuel Furtado Ferraz, offers high-quality private tours. We specialize in creating personalized itineraries that exceed expectations, combining deep historical knowledge with comfort and punctuality. Each journey is an opportunity to discover Portugal and Spain in a unique and memorable way.'
    },
    services: {
      title: 'Our Services',
      private: {
        name: 'Private Tours',
        desc: 'Exclusive personalized itineraries in Portugal and Spain, adapted to your interests and preferences.'
      },
      transfers: {
        name: 'Luxury Transfers',
        desc: 'Comfortable transport with free Wi-Fi, modern vehicles and professional, punctual drivers.'
      },
      business: {
        name: 'Business Trips',
        desc: 'Complete logistics and organization for corporate events, meetings and incentives.'
      }
    },
    destinations: {
      title: 'Popular Destinations',
      lisbon: { name: 'Lisbon', desc: 'The charming capital with history and culture' },
      sintra: { name: 'Sintra', desc: 'Romantic palaces and magical landscapes' },
      cascais: { name: 'Cascais', desc: 'Elegant beach by the Atlantic Ocean' },
      fatima: { name: 'Fatima', desc: 'Sanctuary of Our Lady of the Rosary' },
      obidos: { name: 'Obidos', desc: 'Fairy-tale walled medieval village' },
      nazare: { name: 'Nazare', desc: 'Spectacular panorama and legendary waves' },
      porto: { name: 'Porto', desc: 'Historic city of the Douro and Port wine' },
      coimbra: { name: 'Coimbra', desc: 'Ancient university and academic traditions' },
      evora: { name: 'Evora', desc: 'Roman city with preserved ancient temple' },
      santiago: { name: 'Santiago de Compostela', desc: 'Historic pilgrimage destination' }
    },
    testimonials: {
      title: 'What Our Clients Say',
      testimonial1: {
        text: 'Pedro is an excellent guide, charismatic person, trustworthy, very responsible and punctual. A great historian, his tours are perfect and very rewarding.',
        author: 'Soraia Paulinelli'
      },
      testimonial2: {
        text: 'I was delighted with the quality and service provided by this company. An outstanding tour guide with deep knowledge of Portuguese history.',
        author: 'Jeanne Silva'
      },
      testimonial3: {
        text: 'If Portugal is already beautiful, it becomes even more wonderful in the hands of this competent team. Cordiality, reliability, punctuality!',
        author: 'Adalberto Luque'
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are ready to create your perfect experience',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send'
      }
    },
    footer: {
      copyright: '© 2024 Gold Family Tours. All rights reserved.',
      contact: 'Contact'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      destinations: 'Destinos',
      testimonials: 'Testimonios',
      contact: 'Contacto'
    },
    hero: {
      title: 'Experiencias Únicas y Personalizadas',
      subtitle: 'Lo mejor para usted y su familia, a su medida y al mejor precio.',
      cta: 'Solicitar un Tour'
    },
    about: {
      title: 'Sobre Gold Family Tours',
      subtitle: 'Más de 20 Años de Excelencia',
      description: 'Con más de 20 años de experiencia, Gold Family Tours, liderada por Pedro Manuel Furtado Ferraz, ofrece tours privados de alta calidad. Somos especialistas en crear itinerarios personalizados que superan las expectativas, combinando profundo conocimiento histórico con comodidad y puntualidad. Cada viaje es una oportunidad para descubrir Portugal y España de forma única y memorable.'
    },
    services: {
      title: 'Nuestros Servicios',
      private: {
        name: 'Tours Privados',
        desc: 'Itinerarios exclusivos personalizados en Portugal y España, adaptados a sus intereses y preferencias.'
      },
      transfers: {
        name: 'Traslados de Lujo',
        desc: 'Transporte cómodo con Wi-Fi gratuito, vehículos modernos y conductores profesionales y puntuales.'
      },
      business: {
        name: 'Viajes de Negocios',
        desc: 'Logística completa y organización para eventos corporativos, reuniones e incentivos.'
      }
    },
    destinations: {
      title: 'Destinos Populares',
      lisbon: { name: 'Lisboa', desc: 'La capital encantadora con historia y cultura' },
      sintra: { name: 'Sintra', desc: 'Palacios románticos y paisajes mágicos' },
      cascais: { name: 'Cascais', desc: 'Playa elegante a orillas del Océano Atlántico' },
      fatima: { name: 'Fátima', desc: 'Santuario de Nuestra Señora del Rosario' },
      obidos: { name: 'Óbidos', desc: 'Pueblo medieval amurallado de cuento de hadas' },
      nazare: { name: 'Nazaré', desc: 'Panorama espectacular y olas legendarias' },
      porto: { name: 'Porto', desc: 'Ciudad histórica del Douro y vino de Oporto' },
      coimbra: { name: 'Coimbra', desc: 'Universidad antigua y tradiciones académicas' },
      evora: { name: 'Évora', desc: 'Ciudad romana con templo antiguo preservado' },
      santiago: { name: 'Santiago de Compostela', desc: 'Destino de peregrinación histórico' }
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      testimonial1: {
        text: 'Pedro es un excelente guía, persona carismática, confiable, muy responsable y puntual. Un gran historiador, sus tours son perfectos y muy provechosos.',
        author: 'Soraia Paulinelli'
      },
      testimonial2: {
        text: 'Quedé encantada con la calidad y el servicio prestado por esta empresa. Una guía turística excepcional con profundo conocimiento de la historia portuguesa.',
        author: 'Jeanne Silva'
      },
      testimonial3: {
        text: 'Si Portugal ya es hermoso, se vuelve aún más maravilloso en manos de este equipo competente. ¡Cordialidad, confiabilidad, puntualidad!',
        author: 'Adalberto Luque'
      }
    },
    contact: {
      title: 'Póngase en Contacto',
      subtitle: 'Estamos listos para crear su experiencia perfecta',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      address: 'Dirección',
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        submit: 'Enviar'
      }
    },
    footer: {
      copyright: '© 2024 Gold Family Tours. Todos los derechos reservados.',
      contact: 'Contacto'
    }
  }
};

function App() {
  const [language, setLanguage] = useState('pt');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const t = translations[language];

  const getDestinationImage = (key) => {
    const images = {
      lisbon: '/sintra.jpg',
      sintra: '/sintra.jpg',
      cascais: '/sintra.jpg',
      fatima: '/fatima.jpg',
      obidos: '/nazare.jpg',
      nazare: '/nazare.jpg',
      porto: '/sintra.jpg',
      coimbra: '/fatima.jpg',
      evora: '/nazare.jpg',
      santiago: '/fatima.jpg'
    };
    return images[key] || '/sintra.jpg';
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@goldfamilytours.com?subject=Nova Solicitação de Passeio&body=Nome: ${formData.name}%0AEmail: ${formData.email}%0AMensagem: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">🌍</div>
            <span>Gold Family Tours</span>
          </div>
          <nav>
            <a onClick={() => scrollToSection('home')}>{t.nav.home}</a>
            <a onClick={() => scrollToSection('about')}>{t.nav.about}</a>
            <a onClick={() => scrollToSection('services')}>{t.nav.services}</a>
            <a onClick={() => scrollToSection('destinations')}>{t.nav.destinations}</a>
            <a onClick={() => scrollToSection('testimonials')}>{t.nav.testimonials}</a>
            <a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a>
          </nav>
          <div className="language-selector">
            <button className={`lang-btn ${language === 'pt' ? 'active' : ''}`} onClick={() => setLanguage('pt')}>PT</button>
            <button className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>EN</button>
            <button className={`lang-btn ${language === 'es' ? 'active' : ''}`} onClick={() => setLanguage('es')}>ES</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>{t.hero.cta}</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>{t.about.title}</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>{t.about.subtitle}</h3>
              <p>{t.about.description}</p>
            </div>
            <div className="about-image"><img src="/family_tour.jpeg" alt="Family Tour" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2>{t.services.title}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🗺️</div>
              <h3>{t.services.private.name}</h3>
              <p>{t.services.private.desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>{t.services.transfers.name}</h3>
              <p>{t.services.transfers.desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>{t.services.business.name}</h3>
              <p>{t.services.business.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations" id="destinations">
        <div className="container">
          <h2>{t.destinations.title}</h2>
          <div className="destinations-grid">
            {Object.entries(t.destinations).filter(([key]) => key !== 'title').map(([key, dest]) => (
              <div key={key} className="destination-card">
                <div className="destination-image" style={{backgroundImage: `url(${getDestinationImage(key)})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="destination-info">
                  <h3>{dest.name}</h3>
                  <p>{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2>{t.testimonials.title}</h2>
          <div className="testimonials-grid">
            {[t.testimonials.testimonial1, t.testimonials.testimonial2, t.testimonials.testimonial3].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 {t.contact.phone}</h3>
              <p><a href="tel:+351938659615">+351 938 659 615</a></p>
              <p><a href="tel:+351211814016">+351 211 814 016</a></p>
            </div>
            <div className="contact-item">
              <h3>✉️ {t.contact.email}</h3>
              <p><a href="mailto:info@goldfamilytours.com">info@goldfamilytours.com</a></p>
              <p><a href="mailto:manuelfurtado@msn.com">manuelfurtado@msn.com</a></p>
            </div>
            <div className="contact-item">
              <h3>📍 {t.contact.address}</h3>
              <p>Rua Brigadeiro Batista de Carvalho, Nº 7</p>
              <p>Lisboa, Portugal</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>{t.contact.form.name}</label>
              <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
            </div>
            <div className="form-group">
              <label>{t.contact.form.email}</label>
              <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
            </div>
            <div className="form-group">
              <label>{t.contact.form.message}</label>
              <textarea name="message" value={formData.message} onChange={handleFormChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn">{t.contact.form.submit}</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>{t.footer.copyright}</p>
        <p>{t.footer.contact}: <a href="tel:+351938659615">+351 938 659 615</a></p>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
