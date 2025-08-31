import { Code, Camera, Heart, Zap, Star, CheckCircle, ExternalLink, Instagram, Globe, FileText, Palette, Megaphone } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Andrea Mauri',
      role: 'Programmatore Full-Stack',
      description: 'Specializzato in React, TypeScript e sviluppo web moderno. Creo applicazioni performanti e user-friendly che trasformano le idee in realtà digitali.',
      skills: ['React', 'TypeScript', 'Node.js', 'UI/UX'],
      icon: Code,
      portfolio: 'https://portfolio.andrea-mauri.duckdns.org/',
      github: 'https://github.com/Payd3r'
    },
    {
      name: 'Ilaria Gatti',
      role: 'UGC Creator & Freelance Creativa',
      description: 'Esperta in fotografia professionale e copywriting. Mi occupo di creare contenuti visivi accattivanti e testi che raccontano la storia del tuo brand.',
      skills: ['Fotografia', 'Copywriting', 'Social Media', 'Branding'],
      icon: Camera,
      instagram: 'https://www.instagram.com/ilariaugc/'
    }
  ];

  const packages = [
    {
      category: '🏡 AIRBNB / CASA VACANZE',
      plans: [
        {
          name: 'Base',
          originalPrice: 200,
          discountedPrice: 60,
          features: [
            'Sito 3 pagine (Home – Struttura – Servizi)',
            '20 foto professionali',
            'Form contatti',
            'Collegamento ai social',
            'Pulsante "chiama ora" per mobile',
            'Hosting e dominio (10€/anno)'
          ]
        },
        {
          name: 'Pro',
          originalPrice: 300,
          discountedPrice: 180,
          isPopular: true,
          features: [
            'Tutto del Base, più:',
            'Multilingua (ITA+ENG)',
            'Prenotazione diretta con Email (gratis)',
            'WhatsApp (+10€)',
            '10 foto aggiuntive',
            'Integrazione mappa e meteo',
            'Recensioni Airbnb integrate',
            'PDF guida turistica personalizzata'
          ]
        },
        {
          name: 'Premium',
          originalPrice: 450,
          discountedPrice: 405,
          features: [
            'Tutto del Pro, più:',
            'House tour video',
            'Video drone della location',
            'Calendario sincronizzato con Airbnb / Booking',
            'SEO base',
            'Analisi visite (Google Analytics o Matomo)',
            'Traduzioni professionali (1 lingua inclusa)',
            'QR Code con link al sito (per stampa)'
          ]
        }
      ]
    },
    {
      category: '🍕 RISTORANTI / PIZZERIE',
      plans: [
        {
          name: 'Base',
          originalPrice: 180,
          discountedPrice: 54,
          features: [
            'Sito 3 pagine (Home – Menù – Contatti)',
            '20 foto professionali',
            'Form contatti',
            'Collegamento ai social',
            'Hosting e dominio (10€/anno)'
          ]
        },
        {
          name: 'Pro',
          originalPrice: 280,
          discountedPrice: 168,
          isPopular: true,
          features: [
            'Tutto del Base, più:',
            'Multilingua (ITA+ENG)',
            '10 foto aggiuntive',
            'Foto professionale del menù',
            'Video piatti richiesti (fino a 3 piatti)',
            'Prenotazione tavolo via email o WhatsApp',
            'Menu scaricabile PDF',
            'Pulsante "chiama ora"'
          ]
        },
        {
          name: 'Premium',
          originalPrice: 420,
          discountedPrice: 378,
          features: [
            'Tutto del Pro, più:',
            'Sistema prenotazioni online',
            'Video 360° o tour del locale',
            'Newsletter integrata (setup incluso)',
            'SEO base',
            'Analytics + Pixel Meta',
            'QR code per menù/sito',
            'Template Canva (menù o promo stories)'
          ]
        }
      ]
    },
    {
      category: '💇‍♀️ ESTETISTE / PARRUCCHIERI',
      plans: [
        {
          name: 'Base',
          originalPrice: 180,
          discountedPrice: 54,
          isPopular: true,
          features: [
            'Sito 3 pagine (Home – Servizi o Galleria – Contatti)',
            '20 foto professionali',
            'Form contatti',
            'Collegamento ai social',
            'Hosting e dominio (10€/anno)'
          ]
        },
        {
          name: 'Pro',
          originalPrice: 280,
          discountedPrice: 168,
          features: [
            'Tutto del Base, più:',
            'Multilingua (ITA+ENG)',
            '10 foto aggiuntive',
            'Video location',
            'Prenotazione appuntamenti: Email, WhatsApp',
            'Galleria "prima/dopo" servizi',
            'Recensioni clienti visibili'
          ]
        },
        {
          name: 'Premium',
          originalPrice: 420,
          discountedPrice: 378,
          features: [
            'Tutto del Pro, più:',
            'Sistema gestionale appuntamenti (es. Calendly integrato)',
            'Video testimonianze clienti',
            'Gift card digitale',
            'Blog/News (1 articolo incluso)',
            'Mini Brand Kit: colori + font + logo base',
            'SEO base + Analytics'
          ]
        }
      ]
    }
  ];

  const extras = [
    // 🌐 SVILUPPO WEB - 3 servizi
    { 
      name: 'Pagine aggiuntive', 
      description: 'Aggiungi sezioni extra al tuo sito (Chi siamo, FAQ, Policies, Termini)',
      price: 15,
      note: 'per pagina',
      category: 'web'
    },
    { 
      name: 'Traduzioni professionali', 
      description: 'Traduzioni certificate in lingue extra oltre ITA/ENG con revisione madrelingua',
      price: 25, 
      note: 'per lingua',
      category: 'web'
    },
    { 
      name: 'Sistema e-commerce', 
      description: 'Integrazione completa per vendita online con carrello e pagamenti',
      price: 150, 
      note: 'setup completo',
      category: 'web'
    },

    // 📈 MARKETING & SOCIAL - 3 servizi  
    { 
      name: 'Kit Marketing Completo', 
      description: 'Brochure digitale + template listino prezzi + materiale promozionale',
      price: 35,
      note: 'pacchetto completo',
      category: 'marketing'
    },
    { 
      name: 'Social Media Kit', 
      description: 'Template Canva personalizzati per stories, post e copertine social',
      price: 40,
      note: '20+ template',
      category: 'marketing'
    },
    { 
      name: 'Sistema Newsletter Pro', 
      description: 'Setup newsletter con automazioni, template e gestione completa',
      price: 60, 
      note: 'setup + 3 mesi gestione',
      category: 'marketing'
    },

    // 🎨 BRANDING & DESIGN - 3 servizi
    { 
      name: 'Logo professionale', 
      description: 'Creazione logo personalizzato con varianti e manuale brand',
      price: 80,
      note: 'con brand guidelines',
      category: 'branding'
    },
    { 
      name: 'Biglietti da visita', 
      description: 'Design professionale per biglietti da visita stampabili + versione digitale',
      price: 35,
      category: 'branding'
    },
    { 
      name: 'Brand Identity Kit', 
      description: 'Pacchetto completo: colori, font, pattern e template coordinati',
      price: 120,
      note: 'identità completa',
      category: 'branding'
    },

    // 📹 CONTENUTI VIDEO - 3 servizi
    { 
      name: 'Video testimonianze', 
      description: 'Video recensioni professionali dei tuoi clienti con editing',
      price: 50,
      note: 'fino a 3 video',
      category: 'content'
    },
    { 
      name: 'Video promozionale', 
      description: 'Video presentazione della tua attività con riprese e montaggio',
      price: 200,
      note: 'video da 60-90 secondi',
      category: 'content'
    },
    { 
      name: 'Content Creation', 
      description: 'Foto e video prodotti/servizi per social media e sito web',
      price: 150,
      note: '50+ contenuti',
      category: 'content'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Chi siamo 
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Un team di due professionisti appassionati che unisce competenze tecniche e creative 
              per creare esperienze digitali straordinarie. Trasformiamo le tue idee in realtà.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-slate-900" />
                <span>Progetti completati con successo</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-slate-900" />
                <span>Clienti soddisfatti</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-slate-900" />
                <span>Soluzioni personalizzate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Il nostro team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Due professionisti, una visione comune: creare esperienze digitali che fanno la differenza
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-24 h-24 accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-lg text-slate-600 mb-4">{member.role}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-slate-700 text-slate-100 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Portfolio</span>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <Code className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">I nostri pacchetti</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Soluzioni complete e personalizzate per ogni esigenza. 
              <span className="font-semibold text-slate-900"> Sconti fino al 70%!</span>
            </p>
            <div className="mt-4">
              <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                🔥 Solo 2 siti rimanenti a questo prezzo!
              </span>
            </div>
          </div>
          
          <div className="space-y-16">
            {packages.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="card p-8 relative h-full flex flex-col">
                      {plan.isPopular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Più popolare
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-3xl font-bold text-slate-900">€{plan.discountedPrice}</span>
                          <span className="text-lg text-slate-500 line-through">€{plan.originalPrice}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-sm text-green-600 font-semibold">
                            Sconto {plan.name === 'Base' ? '70%' : plan.name === 'Pro' ? '40%' : '10%'}
                          </span>
                          {(plan.name === 'Base' || plan.name === 'Pro') && (
                            <span className="text-xs text-red-600 font-medium">Offerta limitata!</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Servizi aggiuntivi</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Personalizza ulteriormente il tuo pacchetto con questi servizi professionali
            </p>
          </div>
          
          {/* Organize by category */}
          {[
            { 
              category: 'web', 
              title: 'Sviluppo Web',
              icon: Globe,
              services: extras.filter(e => e.category === 'web')
            },
            { 
              category: 'marketing', 
              title: 'Marketing & Social',
              icon: Megaphone,
              services: extras.filter(e => e.category === 'marketing')
            },
            { 
              category: 'branding', 
              title: 'Branding & Design',
              icon: Palette,
              services: extras.filter(e => e.category === 'branding')
            },
            { 
              category: 'content', 
              title: 'Contenuti Video',
              icon: FileText,
              services: extras.filter(e => e.category === 'content')
            }
          ].map((categoryGroup, groupIndex) => (
            categoryGroup.services.length > 0 && (
              <div key={groupIndex} className="mb-16 last:mb-0">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-slate-100 px-6 py-3 rounded-full mb-4">
                    <categoryGroup.icon className="w-6 h-6 text-slate-700" />
                    <h3 className="text-2xl font-bold text-slate-900">{categoryGroup.title}</h3>
                  </div>
                  <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto rounded-full"></div>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryGroup.services.map((extra, index) => (
                    <div 
                      key={index} 
                      className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-100 hover:border-slate-300"
                    >
                      {/* Header with price */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-slate-700 transition-colors">
                            {extra.name}
                          </h4>
                        </div>
                        <div className="text-right ml-4">
                          <div className="bg-slate-900 text-white px-4 py-2 rounded-xl">
                            <span className="text-2xl font-bold">€{extra.price}</span>
                          </div>
                          {extra.note && (
                            <p className="text-xs text-slate-500 mt-2 italic">{extra.note}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="relative">
                        <p className="text-slate-600 leading-relaxed text-sm">
                          {extra.description}
                        </p>
                        {/* Subtle accent line */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-700 to-slate-900 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="accent-gradient text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto a iniziare il tuo progetto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a realizzare la tua visione digitale
          </p>
          <a href="/contact" className="btn-secondary bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4">
            Iniziamo a collaborare
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;