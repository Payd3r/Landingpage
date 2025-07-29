import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Landing Page',
    description: 'Una landing page moderna e responsive per un e-commerce di abbigliamento. Focus su conversione e user experience ottimale.',
    shortDescription: 'Landing page e-commerce con design moderno e focus sulla conversione',
    image: '/mockups/ecommerce-thumb.jpg',
    mockups: [
      '/mockups/ecommerce-desktop.jpg',
      '/mockups/ecommerce-mobile.jpg',
      '/mockups/ecommerce-tablet.jpg'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'landing-page',
    year: 2024,
    client: 'Fashion Brand',
    url: 'https://example-ecommerce.com',
    features: [
      'Design responsive e moderno',
      'Ottimizzazione SEO avanzata',
      'Integrazione con sistemi di pagamento',
      'Analytics e tracking conversioni',
      'Performance ottimizzata'
    ],
    challenges: [
      'Creare un design che convertisse efficacemente',
      'Ottimizzare le performance per dispositivi mobili',
      'Integrare sistemi di pagamento sicuri'
    ],
    solutions: [
      'Implementazione di best practices UX/UI',
      'Ottimizzazione del codice e delle immagini',
      'Utilizzo di API sicure per i pagamenti'
    ]
  },
  {
    id: 'project-2',
    title: 'SaaS Dashboard',
    description: 'Dashboard completa per una piattaforma SaaS con analytics, gestione utenti e reporting avanzato.',
    shortDescription: 'Dashboard SaaS con analytics e gestione utenti',
    image: '/mockups/saas-thumb.jpg',
    mockups: [
      '/mockups/saas-dashboard.jpg',
      '/mockups/saas-analytics.jpg',
      '/mockups/saas-mobile.jpg'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Material-UI'],
    category: 'web-app',
    year: 2024,
    client: 'Tech Startup',
    url: 'https://example-saas.com',
    features: [
      'Dashboard con analytics in tempo reale',
      'Gestione utenti e permessi',
      'Sistema di notifiche',
      'Export dati in vari formati',
      'API RESTful completa'
    ],
    challenges: [
      'Gestire grandi volumi di dati in tempo reale',
      'Creare un\'interfaccia intuitiva per utenti non tecnici',
      'Implementare un sistema di permessi robusto'
    ],
    solutions: [
      'Utilizzo di tecnologie moderne per performance ottimali',
      'Design system consistente e accessibile',
      'Architettura modulare e scalabile'
    ]
  }
];

export const categories = [
  {
    id: 'all',
    name: 'Tutti i Progetti',
    description: 'Visualizza tutti i progetti'
  },
  {
    id: 'landing-page',
    name: 'Landing Pages',
    description: 'Pagine di atterraggio ottimizzate per la conversione'
  },
  {
    id: 'web-app',
    name: 'Applicazioni Web',
    description: 'Applicazioni web complete e funzionali'
  },
  {
    id: 'mobile-app',
    name: 'App Mobile',
    description: 'Applicazioni mobile native e ibride'
  }
];