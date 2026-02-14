import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

// Translations with historical information
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
      lisbon: { 
        name: 'Lisboa', 
        desc: 'A capital encantadora com história e cultura',
        history: 'Lisboa, fundada pelos Fenícios e conquistada pelos Romanos, é uma das capitais mais antigas da Europa. Durante a Idade Média, tornou-se um importante porto comercial. No século XVI, durante a Era dos Descobrimentos, Lisboa era o centro do império português. O Grande Terramoto de 1755 destruiu grande parte da cidade, mas foi reconstruída com um plano urbano inovador. Hoje, Lisboa é um destino vibrante com sete colinas, castelos históricos, azulejos tradicionais e uma gastronomia única.'
      },
      sintra: { 
        name: 'Sintra', 
        desc: 'Palácios românticos e paisagens mágicas',
        history: 'Sintra foi escolhida pela nobreza portuguesa como refúgio de verão graças ao seu clima ameno e paisagem montanhosa. O Palácio da Pena, construído no século XIX, é um exemplo magnífico da arquitetura romântica. O Palácio Nacional de Sintra remonta ao século XIV. A região foi declarada Património da Humanidade pela UNESCO em 1995. Sintra é um lugar de lendas e mistério, inspirando poetas e artistas ao longo dos séculos.'
      },
      cascais: { 
        name: 'Cascais', 
        desc: 'Praia elegante à beira do Oceano Atlântico',
        history: 'Cascais era um pequeno porto de pesca até ao século XIX, quando se tornou um destino de verão favorito da aristocracia portuguesa. A Citadela de Cascais, construída no século XVII para defesa contra piratas, é um marco histórico. Durante o século XX, Cascais desenvolveu-se como um resort elegante. A Boca do Inferno, uma formação rochosa espetacular, é um dos pontos turísticos mais fotografados. Cascais combina história, beleza natural e modernidade.'
      },
      fatima: { 
        name: 'Fátima', 
        desc: 'Santuário de Nossa Senhora do Rosário',
        history: 'Fátima é um dos maiores centros de peregrinação católica do mundo. Em 1917, três crianças relataram ter visto aparições da Virgem Maria. Desde então, milhões de peregrinos visitam Fátima anualmente. A Basílica de Nossa Senhora do Rosário foi construída em 1953. O Santuário é um lugar de fé, esperança e milagres. Fátima representa a espiritualidade portuguesa e é um importante destino de peregrinação internacional.'
      },
      obidos: { 
        name: 'Óbidos', 
        desc: 'Vila medieval murada de conto de fadas',
        history: 'Óbidos é uma vila medieval perfeitamente preservada, rodeada por muralhas do século XII. Foi um importante porto fluvial durante a Idade Média. A vila foi doada como presente de casamento à Rainha Isabel de Aragão em 1282, iniciando uma tradição de presentes reais. As ruas estreitas, casarões brancos e flores coloridas criam uma atmosfera de conto de fadas. O Castelo de Óbidos oferece vistas panorâmicas da região. Óbidos é um dos destinos mais românticos de Portugal.'
      },
      nazare: { 
        name: 'Nazaré', 
        desc: 'Panorâmica espetacular e ondas lendárias',
        history: 'Nazaré é uma vila costeira com uma história rica. Segundo a lenda, a Virgem Maria salvou um cavaleiro que caía de um penhasco. O Sítio de Nazaré, o miradouro, oferece vistas espetaculares da costa. Nos últimos anos, Nazaré tornou-se famosa mundialmente pelas suas ondas gigantes, atraindo surfistas profissionais. A Basílica de Nossa Senhora da Nazaré é um importante local de peregrinação. Nazaré combina tradição, espiritualidade e aventura moderna.'
      },
      porto: { 
        name: 'Porto', 
        desc: 'Cidade histórica do Douro e vinho do Porto',
        history: 'Porto é a segunda maior cidade de Portugal, com uma história que remonta aos Romanos. Durante a Idade Média, foi um importante porto comercial. A Torre dos Clérigos, construída no século XVIII, é um ícone da cidade. Porto é famoso pelo seu vinho homónimo, produzido nas encostas do Douro. A Livraria Lello é uma das mais belas livrarias do mundo. As ruas medievais, os azulejos tradicionais e as pontes icónicas fazem de Porto um destino imperdível.'
      },
      coimbra: { 
        name: 'Coimbra', 
        desc: 'Universidade antiga e tradições académicas',
        history: 'Coimbra foi a capital de Portugal no século XII e XIII. A Universidade de Coimbra, fundada em 1290, é uma das mais antigas da Europa. A Biblioteca Joanina é uma das mais belas bibliotecas do mundo. A tradição dos Trajes Académicos e da Fado de Coimbra são patrimónios imateriais da UNESCO. A Sé Velha e o Mosteiro de Santa Clara são exemplos da arquitetura medieval. Coimbra é um lugar onde a história, a educação e a cultura se encontram.'
      },
      evora: { 
        name: 'Évora', 
        desc: 'Cidade romana com templo antigo preservado',
        history: 'Évora é uma cidade com mais de 2000 anos de história. O Templo Romano, construído no século I d.C., é um dos melhores exemplos de arquitetura romana em Portugal. A Catedral de Évora é uma obra-prima da arquitetura gótica. A cidade foi declarada Património da Humanidade pela UNESCO em 1986. A Capela dos Ossos é uma atração única e intrigante. Évora é um museu vivo da história portuguesa e romana.'
      },
      santiago: { 
        name: 'Santiago de Compostela', 
        desc: 'Destino de peregrinação histórico',
        history: 'Santiago de Compostela é um dos principais destinos de peregrinação cristã. A Catedral de Santiago, construída entre os séculos XI e XIII, abriga o túmulo do Apóstolo Santiago. O Caminho de Santiago atrai centenas de milhares de peregrinos anualmente. A Praça do Obradoiro é uma das mais belas praças da Europa. A cidade foi declarada Património da Humanidade pela UNESCO em 1985. Santiago representa fé, tradição e espiritualidade.'
      }
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
      description: 'With over 20 years of experience, Gold Family Tours, led by Pedro Manuel Furtado Ferraz, offers high-quality private tourism services. We specialize in creating personalized itineraries that exceed expectations, combining deep historical knowledge with comfort and punctuality. Each trip is an opportunity to discover Portugal and Spain in a unique and memorable way.'
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
        name: 'Business Travel',
        desc: 'Complete logistics and organization for corporate events, meetings and incentives.'
      }
    },
    destinations: {
      title: 'Popular Destinations',
      lisbon: { 
        name: 'Lisbon', 
        desc: 'The enchanting capital with history and culture',
        history: 'Lisbon, founded by the Phoenicians and conquered by the Romans, is one of Europe\'s oldest capitals. During the Middle Ages, it became an important commercial port. In the 16th century, during the Age of Discovery, Lisbon was the center of the Portuguese empire. The Great Earthquake of 1755 destroyed much of the city, but it was rebuilt with an innovative urban plan. Today, Lisbon is a vibrant destination with seven hills, historic castles, traditional tiles and unique gastronomy.'
      },
      sintra: { 
        name: 'Sintra', 
        desc: 'Romantic palaces and magical landscapes',
        history: 'Sintra was chosen by Portuguese nobility as a summer retreat thanks to its mild climate and mountainous landscape. The Pena Palace, built in the 19th century, is a magnificent example of Romantic architecture. The National Palace of Sintra dates back to the 14th century. The region was declared a UNESCO World Heritage Site in 1995. Sintra is a place of legends and mystery, inspiring poets and artists throughout the centuries.'
      },
      cascais: { 
        name: 'Cascais', 
        desc: 'Elegant beach by the Atlantic Ocean',
        history: 'Cascais was a small fishing port until the 19th century, when it became a favorite summer destination for Portuguese aristocracy. The Citadel of Cascais, built in the 17th century for defense against pirates, is a historic landmark. During the 20th century, Cascais developed as an elegant resort. Boca do Inferno, a spectacular rock formation, is one of the most photographed tourist spots. Cascais combines history, natural beauty and modernity.'
      },
      fatima: { 
        name: 'Fátima', 
        desc: 'Sanctuary of Our Lady of the Rosary',
        history: 'Fátima is one of the largest Catholic pilgrimage centers in the world. In 1917, three children reported seeing apparitions of the Virgin Mary. Since then, millions of pilgrims visit Fátima annually. The Basilica of Our Lady of the Rosary was built in 1953. The Sanctuary is a place of faith, hope and miracles. Fátima represents Portuguese spirituality and is an important international pilgrimage destination.'
      },
      obidos: { 
        name: 'Óbidos', 
        desc: 'Medieval walled village from a fairy tale',
        history: 'Óbidos is a perfectly preserved medieval village, surrounded by 12th-century walls. It was an important river port during the Middle Ages. The village was given as a wedding gift to Queen Isabella of Aragon in 1282, starting a tradition of royal gifts. Narrow streets, white mansions and colorful flowers create a fairy tale atmosphere. Óbidos Castle offers panoramic views of the region. Óbidos is one of Portugal\'s most romantic destinations.'
      },
      nazare: { 
        name: 'Nazaré', 
        desc: 'Spectacular panorama and legendary waves',
        history: 'Nazaré is a coastal village with a rich history. According to legend, the Virgin Mary saved a knight who was falling from a cliff. The Sítio of Nazaré, the viewpoint, offers spectacular views of the coast. In recent years, Nazaré has become world-famous for its giant waves, attracting professional surfers. The Basilica of Our Lady of Nazaré is an important pilgrimage site. Nazaré combines tradition, spirituality and modern adventure.'
      },
      porto: { 
        name: 'Porto', 
        desc: 'Historic city of the Douro and Port wine',
        history: 'Porto is Portugal\'s second largest city, with a history dating back to the Romans. During the Middle Ages, it was an important commercial port. The Tower of Clerics, built in the 18th century, is an icon of the city. Porto is famous for its namesake wine, produced on the slopes of the Douro. Livraria Lello is one of the most beautiful bookstores in the world. Medieval streets, traditional tiles and iconic bridges make Porto an unmissable destination.'
      },
      coimbra: { 
        name: 'Coimbra', 
        desc: 'Ancient university and academic traditions',
        history: 'Coimbra was the capital of Portugal in the 12th and 13th centuries. The University of Coimbra, founded in 1290, is one of the oldest in Europe. The Joanina Library is one of the most beautiful libraries in the world. The tradition of Academic Robes and Coimbra Fado are UNESCO intangible heritage. The Old Cathedral and the Monastery of Santa Clara are examples of medieval architecture. Coimbra is a place where history, education and culture meet.'
      },
      evora: { 
        name: 'Évora', 
        desc: 'Roman city with ancient preserved temple',
        history: 'Évora is a city with over 2,000 years of history. The Roman Temple, built in the 1st century AD, is one of the best examples of Roman architecture in Portugal. Évora Cathedral is a masterpiece of Gothic architecture. The city was declared a UNESCO World Heritage Site in 1986. The Chapel of Bones is a unique and intriguing attraction. Évora is a living museum of Portuguese and Roman history.'
      },
      santiago: { 
        name: 'Santiago de Compostela', 
        desc: 'Historic pilgrimage destination',
        history: 'Santiago de Compostela is one of the main Christian pilgrimage destinations. The Cathedral of Santiago, built between the 11th and 13th centuries, houses the tomb of the Apostle James. The Way of Santiago attracts hundreds of thousands of pilgrims annually. The Obradoiro Square is one of Europe\'s most beautiful squares. The city was declared a UNESCO World Heritage Site in 1985. Santiago represents faith, tradition and spirituality.'
      }
    },
    testimonials: {
      title: 'What Our Clients Say',
      testimonial1: {
        text: 'Mr. Pedro is an excellent guide, a charismatic person, trustworthy, very responsible and punctual. A great historian, his tours are perfect and very worthwhile.',
        author: 'Soraia Paulinelli'
      },
      testimonial2: {
        text: 'I was delighted with the quality and service provided by this company. A unique tour guide with deep knowledge of Portuguese history.',
        author: 'Jeanne Silva'
      },
      testimonial3: {
        text: 'If Portugal is already beautiful, it becomes even more wonderful in the hands of the very competent team from Lisboa Tours. Cordiality, reliability, punctuality!',
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
      subtitle: 'Lo mejor para usted y su familia, adaptado a sus necesidades al mejor precio.',
      cta: 'Solicitar un Tour'
    },
    about: {
      title: 'Sobre Gold Family Tours',
      subtitle: 'Más de 20 Años de Excelencia',
      description: 'Con más de 20 años de experiencia, Gold Family Tours, dirigida por Pedro Manuel Furtado Ferraz, ofrece servicios de turismo privado de alta calidad. Nos especializamos en crear itinerarios personalizados que superan las expectativas, combinando conocimiento histórico profundo con comodidad y puntualidad. Cada viaje es una oportunidad para descubrir Portugal y España de una manera única y memorable.'
    },
    services: {
      title: 'Nuestros Servicios',
      private: {
        name: 'Tours Privados',
        desc: 'Itinerarios exclusivos personalizados en Portugal y España, adaptados a sus intereses y preferencias.'
      },
      transfers: {
        name: 'Transferencias de Lujo',
        desc: 'Transporte cómodo con Wi-Fi gratuito, vehículos modernos y conductores profesionales y puntuales.'
      },
      business: {
        name: 'Viajes de Negocios',
        desc: 'Logística completa y organización para eventos corporativos, reuniones e incentivos.'
      }
    },
    destinations: {
      title: 'Destinos Populares',
      lisbon: { 
        name: 'Lisboa', 
        desc: 'La capital encantadora con historia y cultura',
        history: 'Lisboa, fundada por los fenicios y conquistada por los romanos, es una de las capitales más antiguas de Europa. Durante la Edad Media, se convirtió en un importante puerto comercial. En el siglo XVI, durante la Era de los Descubrimientos, Lisboa era el centro del imperio portugués. El Gran Terremoto de 1755 destruyó gran parte de la ciudad, pero fue reconstruida con un plan urbano innovador. Hoy, Lisboa es un destino vibrante con siete colinas, castillos históricos, azulejos tradicionales y una gastronomía única.'
      },
      sintra: { 
        name: 'Sintra', 
        desc: 'Palacios románticos y paisajes mágicos',
        history: 'Sintra fue elegida por la nobleza portuguesa como refugio de verano gracias a su clima templado y paisaje montañoso. El Palacio de la Pena, construido en el siglo XIX, es un magnífico ejemplo de arquitectura romántica. El Palacio Nacional de Sintra se remonta al siglo XIV. La región fue declarada Patrimonio de la Humanidad por la UNESCO en 1995. Sintra es un lugar de leyendas y misterio, inspirando a poetas y artistas a lo largo de los siglos.'
      },
      cascais: { 
        name: 'Cascais', 
        desc: 'Playa elegante a orillas del Océano Atlántico',
        history: 'Cascais era un pequeño puerto pesquero hasta el siglo XIX, cuando se convirtió en un destino de verano favorito de la aristocracia portuguesa. La Ciudadela de Cascais, construida en el siglo XVII para defensa contra piratas, es un hito histórico. Durante el siglo XX, Cascais se desarrolló como un elegante resort. Boca do Inferno, una formación rocosa espectacular, es uno de los puntos turísticos más fotografiados. Cascais combina historia, belleza natural y modernidad.'
      },
      fatima: { 
        name: 'Fátima', 
        desc: 'Santuario de Nuestra Señora del Rosario',
        history: 'Fátima es uno de los mayores centros de peregrinación católica del mundo. En 1917, tres niños informaron haber visto apariciones de la Virgen María. Desde entonces, millones de peregrinos visitan Fátima anualmente. La Basílica de Nuestra Señora del Rosario fue construida en 1953. El Santuario es un lugar de fe, esperanza y milagros. Fátima representa la espiritualidad portuguesa y es un importante destino de peregrinación internacional.'
      },
      obidos: { 
        name: 'Óbidos', 
        desc: 'Pueblo medieval amurallado de cuento de hadas',
        history: 'Óbidos es un pueblo medieval perfectamente preservado, rodeado por murallas del siglo XII. Fue un importante puerto fluvial durante la Edad Media. El pueblo fue entregado como regalo de boda a la Reina Isabel de Aragón en 1282, iniciando una tradición de regalos reales. Las calles estrechas, caserones blancos y flores coloridas crean una atmósfera de cuento de hadas. El Castillo de Óbidos ofrece vistas panorámicas de la región. Óbidos es uno de los destinos más románticos de Portugal.'
      },
      nazare: { 
        name: 'Nazaré', 
        desc: 'Panorama espectacular y olas legendarias',
        history: 'Nazaré es un pueblo costero con una historia rica. Según la leyenda, la Virgen María salvó a un caballero que caía de un acantilado. El Sítio de Nazaré, el mirador, ofrece vistas espectaculares de la costa. En los últimos años, Nazaré se ha hecho famosa mundialmente por sus olas gigantes, atrayendo a surfistas profesionales. La Basílica de Nuestra Señora de Nazaré es un importante sitio de peregrinación. Nazaré combina tradición, espiritualidad y aventura moderna.'
      },
      porto: { 
        name: 'Oporto', 
        desc: 'Ciudad histórica del Douro y vino de Oporto',
        history: 'Oporto es la segunda ciudad más grande de Portugal, con una historia que se remonta a los romanos. Durante la Edad Media, fue un importante puerto comercial. La Torre de los Clérigos, construida en el siglo XVIII, es un ícono de la ciudad. Oporto es famoso por su vino homónimo, producido en las laderas del Douro. La Librería Lello es una de las librerías más hermosas del mundo. Las calles medievales, los azulejos tradicionales y los puentes icónicos hacen de Oporto un destino imprescindible.'
      },
      coimbra: { 
        name: 'Coímbra', 
        desc: 'Universidad antigua y tradiciones académicas',
        history: 'Coímbra fue la capital de Portugal en los siglos XII y XIII. La Universidad de Coímbra, fundada en 1290, es una de las más antiguas de Europa. La Biblioteca Joanina es una de las bibliotecas más hermosas del mundo. La tradición de los Trajes Académicos y del Fado de Coímbra son patrimonio inmaterial de la UNESCO. La Catedral Vieja y el Monasterio de Santa Clara son ejemplos de arquitectura medieval. Coímbra es un lugar donde la historia, la educación y la cultura se encuentran.'
      },
      evora: { 
        name: 'Évora', 
        desc: 'Ciudad romana con templo antiguo preservado',
        history: 'Évora es una ciudad con más de 2000 años de historia. El Templo Romano, construido en el siglo I d.C., es uno de los mejores ejemplos de arquitectura romana en Portugal. La Catedral de Évora es una obra maestra de la arquitectura gótica. La ciudad fue declarada Patrimonio de la Humanidad por la UNESCO en 1986. La Capilla de los Huesos es una atracción única e intrigante. Évora es un museo vivo de la historia portuguesa y romana.'
      },
      santiago: { 
        name: 'Santiago de Compostela', 
        desc: 'Destino histórico de peregrinación',
        history: 'Santiago de Compostela es uno de los principales destinos de peregrinación cristiana. La Catedral de Santiago, construida entre los siglos XI y XIII, alberga la tumba del Apóstol Santiago. El Camino de Santiago atrae a cientos de miles de peregrinos anualmente. La Plaza del Obradoiro es una de las plazas más hermosas de Europa. La ciudad fue declarada Patrimonio de la Humanidad por la UNESCO en 1985. Santiago representa fe, tradición y espiritualidad.'
      }
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      testimonial1: {
        text: 'El Sr. Pedro es un excelente guía, persona carismática, de confianza, muy responsable y puntual. Un gran historiador, sus tours son perfectos y muy provechosos.',
        author: 'Soraia Paulinelli'
      },
      testimonial2: {
        text: 'Quedé encantada con la calidad y el servicio prestado por esta empresa. Una guía turística sin igual con profundo conocimiento de la historia de Portugal.',
        author: 'Jeanne Silva'
      },
      testimonial3: {
        text: 'Si Portugal ya es hermoso, se vuelve aún más maravilloso en manos del equipo muy competente de Lisboa Tours. ¡Cordialidad, confiabilidad, puntualidad!',
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
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const t = translations[language];

  const getDestinationImage = (key) => {
    const images = {
      lisbon: '/lisboa.jpg',
      sintra: '/sintra.jpg',
      cascais: '/cascais.jpg',
      fatima: '/fatima.jpg',
      obidos: '/obidos.jpg',
      nazare: '/nazare.jpg',
      porto: '/porto.jpg',
      coimbra: '/coimbra.jpg',
      evora: '/evora.jpg',
      santiago: '/santiago.jpg'
    };
    return images[key] || '/sintra.jpg';
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
    }
  };

  const destinations = [
    { key: 'lisbon', ...t.destinations.lisbon },
    { key: 'sintra', ...t.destinations.sintra },
    { key: 'cascais', ...t.destinations.cascais },
    { key: 'fatima', ...t.destinations.fatima },
    { key: 'obidos', ...t.destinations.obidos },
    { key: 'nazare', ...t.destinations.nazare },
    { key: 'porto', ...t.destinations.porto },
    { key: 'coimbra', ...t.destinations.coimbra },
    { key: 'evora', ...t.destinations.evora },
    { key: 'santiago', ...t.destinations.santiago }
  ];

  return (
    <div id="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">🌍 {t.nav.home === 'Início' ? 'Gold Family Tours' : 'Gold Family Tours'}</div>
          <nav className="nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#destinations">{t.nav.destinations}</a>
            <a href="#testimonials">{t.nav.testimonials}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="language-selector">
            <button onClick={() => setLanguage('pt')} className={language === 'pt' ? 'active' : ''}>PT</button>
            <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button>
            <button onClick={() => setLanguage('es')} className={language === 'es' ? 'active' : ''}>ES</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <button className="cta-button">{t.hero.cta}</button>
          <div className="contact-quick">
            <a href="tel:+351938659615">📞 +351 938 659 615</a>
            <a href="tel:+351211814016">📞 +351 211 814 016</a>
            <a href="mailto:info@goldfamilytours.com">✉️ info@goldfamilytours.com</a>
            <a href="mailto:manuelfurtado@msn.com">✉️ manuelfurtado@msn.com</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>{t.about.title}</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>{t.about.subtitle}</h3>
              <p>{t.about.description}</p>
            </div>
            <img src="/family_tour.jpeg" alt="Family Tour" className="about-image" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
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
      <section id="destinations" className="destinations">
        <div className="container">
          <h2>{t.destinations.title}</h2>
          <div className="destinations-grid">
            {destinations.map(dest => (
              <div key={dest.key} className="destination-card" onClick={() => setSelectedDestination(dest)}>
                <img src={getDestinationImage(dest.key)} alt={dest.name} />
                <h3>{dest.name}</h3>
                <p>{dest.desc}</p>
              </div>
            ))}
          </div>
          
          {selectedDestination && (
            <div className="modal" onClick={() => setSelectedDestination(null)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={() => setSelectedDestination(null)}>&times;</span>
                <img src={getDestinationImage(selectedDestination.key)} alt={selectedDestination.name} />
                <h2>{selectedDestination.name}</h2>
                <p className="history-text">{selectedDestination.history}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>{t.testimonials.title}</h2>
          <div className="testimonials-grid">
            {[t.testimonials.testimonial1, t.testimonials.testimonial2, t.testimonials.testimonial3].map((test, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"{test.text}"</p>
                <p className="author">— {test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>{t.contact.title}</h2>
          <p className="contact-subtitle">{t.contact.subtitle}</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <h3>📞 {t.contact.phone}</h3>
                <a href="tel:+351938659615">+351 938 659 615</a>
                <a href="tel:+351211814016">+351 211 814 016</a>
              </div>
              <div className="info-item">
                <h3>✉️ {t.contact.email}</h3>
                <a href="mailto:info@goldfamilytours.com">info@goldfamilytours.com</a>
                <a href="mailto:manuelfurtado@msn.com">manuelfurtado@msn.com</a>
              </div>
              <div className="info-item">
                <h3>📍 {t.contact.address}</h3>
                <p>Rua Brigadeiro Batista de Carvalho, Nº 7</p>
                <p>Lisboa, Portugal</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <textarea 
                name="message"
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={handleFormChange}
                required
              ></textarea>
              <button type="submit">{t.contact.form.submit}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
