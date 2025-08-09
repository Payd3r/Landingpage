import type { ProjectDetail } from '../types/ProjectDetail';

export const projectDetails: Record<string, ProjectDetail> = {
  'project-1': {
    id: 'project-1',
    title: 'I Gladiatori',
    subtitle: 'Pizzeria & Ristorante',
    description: 'Una landing page moderna e responsive per un ristorante pizzeria con design accattivante e focus sulla conversione.',
    year: 2025,
    client: 'I Gladiatori',
    url: 'https://gladiatori.andrea-mauri.duckdns.org/',
    category: 'Pizzeria & Ristorante',
    
    // Informazioni business
    businessGoals: [
      'Migliorare la visibilità del ristorante',
      'Facilitare la visualizzazione del menu tramite smartphone',
      'Creare un\'esperienza digitale coinvolgente'
    ],
    
    // Caratteristiche principali (focus business)
    features: [
      'Menu digitale per ogni tipo (pizzeria, pizzeria asporto, ristorante)',
      'Filtri per tipi di ingredienti e allergeni',
      'Galleria foto per ogni articolo',
      'Design responsive ottimizzato per mobile',
      'Presentazione online del ristorante/pizzeria',
      'Sito statico per visualizzazione menu'
    ],
    
    // Risultati ottenuti
    results: [
      'Sito completamente rinnovato e moderno',
      'Miglioramento significativo dell\'usabilità',
      'Design responsive per tutti i dispositivi'
    ],
    
    // Processo di lavoro
    process: [
      {
        title: 'Analisi del Sito Esistente',
        description: 'Valutazione del sito vecchio e identificazione dei problemi principali'
      },
      {
        title: 'Design e Prototipazione',
        description: 'Creazione di mockup moderni e responsive per sostituire il design datato'
      },
      {
        title: 'Sviluppo Frontend',
        description: 'Implementazione del nuovo sito con focus su usabilità e design moderno'
      },
      {
        title: 'Ottimizzazione e Test',
        description: 'Test su diversi dispositivi e ottimizzazione delle performance'
      }
    ],
    
    // Mockups (percorsi delle immagini)
    mockups: [
      '/carouselMockup/I_Gladiatori/1.png',
      '/carouselMockup/I_Gladiatori/2.png',
      '/carouselMockup/I_Gladiatori/3.png',
    ],
    
    // Immagine di sfondo per la hero section
    heroImage: '/carouselMockup/I_Gladiatori/0.png',
    
    // Testimonianza cliente
    testimonial: {
      text: 'Il nuovo sito ha completamente trasformato la nostra presenza online. Ora i clienti possono facilmente visualizzare il menu anche da smartphone e l\'esperienza è molto più professionale.',
      author: 'Marco Rossi',
      role: 'Proprietario I Gladiatori'
    }
  },
  
  'project-2': {
    id: 'project-2',
    title: 'Betta47',
    subtitle: 'Bed & Breakfast',
    description: 'Landing page per un B&B di Cantù con design moderno, responsive e ottimizzata per le prenotazioni.',
    year: 2025,
    client: 'Betta47 B&B',
    url: 'https://betta47.andrea-mauri.duckdns.org/',
    category: 'Bed & Breakfast',
    
    businessGoals: [
      'Modernizzare il sito esistente datato',
      'Migliorare la navigazione e l\'esperienza utente',
      'Creare una presenza online più professionale'
    ],
    
    features: [
      'Design moderno e responsive',
      'Varie gallerie e caroselli',
      'Spiegazione dettagliata dei servizi',
      'Form di contatto integrato',
      'Homepage per spiegare la struttura e la zona',
      'Correzione problemi di traduzione'
    ],
    
    results: [
      'Sito completamente rinnovato e moderno',
      'Miglioramento significativo della navigazione',
      'Presenza online più professionale'
    ],
    
    process: [
      {
        title: 'Analisi del Sito Esistente',
        description: 'Valutazione del sito vecchio e identificazione dei problemi di design e traduzione'
      },
      {
        title: 'Redesign Completo',
        description: 'Creazione di un nuovo design moderno e responsive'
      },
      {
        title: 'Sviluppo Frontend',
        description: 'Implementazione delle nuove funzionalità e correzione dei problemi'
      },
      {
        title: 'Ottimizzazione Contenuti',
        description: 'Miglioramento dei contenuti e correzione delle traduzioni'
      }
    ],
    
    mockups: [
      '/carouselMockup/Betta47/1.png',
      '/carouselMockup/Betta47/2.png',
      '/carouselMockup/Betta47/3.png',
    ],
    
    // Immagine di sfondo per la hero section
    heroImage: '/carouselMockup/Betta47/0.png',
    
    // Confronto prima/dopo
    beforeAfter: [
      { before: '/carouselMockup/Betta47/before-1.svg', after: '/carouselMockup/Betta47/after-1.svg', title: 'Homepage' },
      { before: '/carouselMockup/Betta47/before-2.svg', after: '/carouselMockup/Betta47/after-2.svg', title: 'Camere' },
      { before: '/carouselMockup/Betta47/before-3.svg', after: '/carouselMockup/Betta47/after-3.svg', title: 'Servizi' },
      { before: '/carouselMockup/Betta47/before-4.svg', after: '/carouselMockup/Betta47/after-4.svg', title: 'Contatti' },
    ],

    testimonial: {
      text: 'Il nuovo sito ha completamente rivoluzionato la nostra presenza online. Ora abbiamo un sito moderno e professionale che riflette la qualità del nostro B&B.',
      author: 'Anna Bianchi',
      role: 'Proprietaria Betta47 B&B'
    }
  },
  
  'project-3': {
    id: 'project-3',
    title: 'Le Chic di Cinzia',
    subtitle: 'Centro Estetico',
    description: 'Sito web completo per un centro estetico con sistema di prenotazioni online e galleria servizi.',
    year: 2025,
    client: 'Le Chic di Cinzia',
    url: 'https://lechic.andrea-mauri.duckdns.org/',
    category: 'Centro Estetico',
    
    businessGoals: [
      'Aumentare la visibilità del centro estetico',
      'Ampliare il mercato di riferimento',
      'Digitalizzare la presenza online'
    ],
    
    features: [
      'Galleria servizi e trattamenti',
      'Catalogo prodotti',
      'Form per prenotazioni online',
      'Design moderno e professionale',
      'Presenza online completa',
      'Integrazione con social media'
    ],
    
    results: [
      'Riduzione significativa delle chiamate telefoniche',
      'Aumento dei nuovi clienti',
      'Presenza online professionale creata da zero'
    ],
    
    process: [
      {
        title: 'Analisi dei Bisogni',
        description: 'Studio delle esigenze del cliente e definizione degli obiettivi di business'
      },
      {
        title: 'Design dell\'Interfaccia',
        description: 'Creazione di un design moderno e professionale per il settore beauty'
      },
      {
        title: 'Sviluppo Frontend',
        description: 'Implementazione della galleria, catalogo prodotti e form prenotazioni'
      },
      {
        title: 'Lancio e Supporto',
        description: 'Deploy del sito e formazione del cliente'
      }
    ],
    
    mockups: [
      '/carouselMockup/Le_chic/1.png',
      '/carouselMockup/Le_chic/2.png',
      '/carouselMockup/Le_chic/3.png',
    ],
    
    // Immagine di sfondo per la hero section
    heroImage: '/carouselMockup/Le_chic/0.png',
    
    testimonial: {
      text: 'Il nuovo sito ha completamente trasformato la nostra presenza online. Ora abbiamo una galleria professionale dei nostri servizi e i clienti possono prenotare facilmente online.',
      author: 'Cinzia Verdi',
      role: 'Proprietaria Le Chic di Cinzia'
    }
  }
}; 