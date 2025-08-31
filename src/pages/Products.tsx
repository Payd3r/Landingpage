import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, UtensilsCrossed, Scissors, CheckCircle, Star, ArrowRight, Package, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

// Types for our configurator
interface ProductConfig {
  customerName: string;
  businessType: 'airbnb' | 'restaurant' | 'beauty' | null;
  package: 'base' | 'pro' | 'premium' | null;
  extras: string[];
}

const Products = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState<ProductConfig>({
    customerName: '',
    businessType: null,
    package: null,
    extras: []
  });
  const [expandedExtra, setExpandedExtra] = useState<string | null>(null);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Detect keyboard/viewport changes
  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.visualViewport?.height || window.innerHeight;
      const fullHeight = window.screen.height;
      
      // Se l'altezza è significativamente ridotta, probabilmente è aperta la tastiera
      const heightRatio = newHeight / fullHeight;
      const keyboardOpen = heightRatio < 0.75;
      
      setIsKeyboardOpen(keyboardOpen);
    };

    // Listen to visual viewport changes (more reliable for keyboard detection)
    if ('visualViewport' in window && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    } else {
      // Fallback for older browsers
      (window as any).addEventListener('resize', handleResize);
    }

    // Initial call
    handleResize();

    return () => {
      if ('visualViewport' in window && window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      } else {
        (window as any).removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Business types data
  const businessTypes = [
    {
      id: 'airbnb' as const,
      title: 'Airbnb / Casa Vacanze',
      emoji: '🏡',
      icon: Home,
      description: 'Soluzioni per strutture ricettive e case vacanze',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'restaurant' as const,
      title: 'Ristoranti / Pizzerie',
      emoji: '🍕',
      icon: UtensilsCrossed,
      description: 'Siti web per ristoranti, pizzerie e food business',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'beauty' as const,
      title: 'Estetiste / Parrucchieri',
      emoji: '💇‍♀️',
      icon: Scissors,
      description: 'Presenza online per centri estetici e parrucchieri',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  // Packages data with prices based on business type
  const getPackagesForType = (type: string) => {
    const prices = {
      airbnb: { base: { original: 200, discounted: 60 }, pro: { original: 300, discounted: 180 }, premium: { original: 450, discounted: 405 } },
      restaurant: { base: { original: 180, discounted: 54 }, pro: { original: 280, discounted: 168 }, premium: { original: 420, discounted: 378 } },
      beauty: { base: { original: 180, discounted: 54 }, pro: { original: 280, discounted: 168 }, premium: { original: 420, discounted: 378 } }
    };

    const typeKey = type as keyof typeof prices;
    const typePrices = prices[typeKey] || prices.airbnb;

    return [
      {
        id: 'base' as const,
        name: 'Base',
        originalPrice: typePrices.base.original,
        discountedPrice: typePrices.base.discounted,
        discount: '70%',
        icon: Star,
        color: 'from-green-500 to-green-600',
        features: [
          'Sito 3 pagine professionali',
          '20 foto professionali incluse',
          'Form contatti integrato',
          'Collegamento ai social',
          'Hosting e dominio (10€/anno)'
        ]
      },
      {
        id: 'pro' as const,
        name: 'Pro',
        originalPrice: typePrices.pro.original,
        discountedPrice: typePrices.pro.discounted,
        discount: '40%',
        icon: Sparkles,
        color: 'from-slate-600 to-slate-800',
        isPopular: true,
        features: [
          'Tutto del Base, più:',
          'Sito multilingua (ITA+ENG)',
          '10 foto aggiuntive',
          'Funzionalità avanzate',
          'Sistema prenotazioni base'
        ]
      },
      {
        id: 'premium' as const,
        name: 'Premium',
        originalPrice: typePrices.premium.original,
        discountedPrice: typePrices.premium.discounted,
        discount: '10%',
        icon: Package,
        color: 'from-amber-500 to-amber-600',
        features: [
          'Tutto del Pro, più:',
          'Video promozionali',
          'SEO avanzato',
          'Analytics completo',
          'Supporto prioritario'
        ]
      }
    ];
  };

  // Extras data
  const extras = [
    { id: 'extra-pages', name: 'Pagine aggiuntive', price: 15, category: 'web', description: 'Aggiungi sezioni extra al tuo sito (Chi siamo, FAQ, Policies, Termini)' },
    { id: 'translations', name: 'Traduzioni professionali', price: 25, category: 'web', description: 'Traduzioni certificate in lingue extra oltre ITA/ENG con revisione madrelingua' },
    { id: 'ecommerce', name: 'Sistema e-commerce', price: 150, category: 'web', description: 'Integrazione completa per vendita online con carrello e pagamenti' },
    { id: 'marketing-kit', name: 'Kit Marketing Completo', price: 35, category: 'marketing', description: 'Brochure digitale + template listino prezzi + materiale promozionale' },
    { id: 'social-kit', name: 'Social Media Kit', price: 40, category: 'marketing', description: 'Template Canva personalizzati per stories, post e copertine social' },
    { id: 'newsletter', name: 'Sistema Newsletter Pro', price: 60, category: 'marketing', description: 'Setup newsletter con automazioni, template e gestione completa' },
    { id: 'logo', name: 'Logo professionale', price: 80, category: 'branding', description: 'Creazione logo personalizzato con varianti e manuale brand' },
    { id: 'business-cards', name: 'Biglietti da visita', price: 35, category: 'branding', description: 'Design professionale per biglietti da visita stampabili + versione digitale' },
    { id: 'brand-kit', name: 'Brand Identity Kit', price: 120, category: 'branding', description: 'Pacchetto completo: colori, font, pattern e template coordinati' },
    { id: 'video-testimonials', name: 'Video testimonianze', price: 50, category: 'content', description: 'Video recensioni professionali dei tuoi clienti con editing' },
    { id: 'video-promo', name: 'Video promozionale', price: 200, category: 'content', description: 'Video presentazione della tua attività con riprese e montaggio' },
    { id: 'content-creation', name: 'Content Creation', price: 150, category: 'content', description: 'Foto e video prodotti/servizi per social media e sito web' }
  ];

  // Calculate total price
  const calculateTotal = () => {
    if (!config.businessType || !config.package) return 0;
    
    const packages = getPackagesForType(config.businessType);
    const selectedPackage = packages.find(p => p.id === config.package);
    const packagePrice = selectedPackage?.discountedPrice || 0;
    const extrasPrice = config.extras.reduce((total, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);
    
    return packagePrice + extrasPrice;
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return config.customerName.trim() !== '' && config.businessType !== null;
      case 2: return config.package !== null;
      case 3: return true; // Extras are optional
      default: return false;
    }
  };

  // Step components as React components to avoid re-creation
  const Step1 = React.memo(() => (
    <div className="space-y-6">
      {/* Name input */}
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">Come ti chiami?</h3>
        <input
          type="text"
          value={config.customerName}
          onChange={(e) => setConfig(prev => ({ ...prev, customerName: e.target.value }))}
          placeholder="Il tuo nome o nome dell'attività"
          className="w-full max-w-md mx-auto px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-2xl focus:border-slate-400 focus:outline-none transition-colors"
          autoFocus
        />
      </div>

      {/* Business type selection */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 text-center px-2">Che tipo di attività hai?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {businessTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setConfig(prev => ({ ...prev, businessType: type.id }))}
              className={`
                group relative cursor-pointer rounded-2xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-300 transform hover:scale-105
                ${config.businessType === type.id 
                  ? 'border-slate-400 bg-slate-50 shadow-lg' 
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }
              `}
            >
              {/* Selection indicator */}
              {config.businessType === type.id && (
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
              )}
              
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6`}>
                <type.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{type.title}</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));

  const Step2 = React.memo(() => {
    const packages = config.businessType ? getPackagesForType(config.businessType) : [];
    
    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 px-2">
            Scegli il pacchetto per {config.customerName}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 px-2">Ogni pacchetto include tutto quello di cui hai bisogno</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setConfig(prev => ({ ...prev, package: pkg.id }))}
              className={`
                group relative cursor-pointer rounded-2xl p-4 sm:p-6 border-2 transition-all duration-300 transform hover:scale-105 h-full flex flex-col
                ${config.package === pkg.id 
                  ? 'border-slate-400 bg-slate-50 shadow-lg' 
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }
              `}
            >
              {/* Popular badge */}
              {pkg.isPopular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    Più popolare
                  </span>
                </div>
              )}

              {/* Selection indicator */}
              {config.package === pkg.id && (
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              )}

              {/* Icon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <pkg.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Content */}
              <div className="text-center mb-3 sm:mb-4">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">{pkg.name}</h4>
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">€{pkg.discountedPrice}</span>
                  <span className="text-sm sm:text-md text-slate-500 line-through">€{pkg.originalPrice}</span>
                </div>
                <span className="text-xs text-green-600 font-semibold">Sconto {pkg.discount}</span>
              </div>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2 flex-1">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-xs sm:text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  });

  const Step3 = React.memo(() => {
    // Group extras by category
    const extrasGrouped = [
      {
        title: 'Sviluppo Web',
        icon: '🌐',
        items: extras.filter(e => e.category === 'web')
      },
      {
        title: 'Marketing & Social',
        icon: '📈',
        items: extras.filter(e => e.category === 'marketing')
      },
      {
        title: 'Branding & Design',
        icon: '🎨',
        items: extras.filter(e => e.category === 'branding')
      },
      {
        title: 'Contenuti Video',
        icon: '📹',
        items: extras.filter(e => e.category === 'content')
      }
    ];

    return (
      <div className="space-y-4 sm:space-y-6 overflow-hidden">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 px-2">Vuoi aggiungere qualche extra?</h3>
          <p className="text-sm sm:text-base text-slate-600 px-2">Personalizza il tuo pacchetto (opzionale)</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {extrasGrouped.map((group, groupIndex) => (
            <div key={groupIndex} className="overflow-hidden">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2 px-1">
                <span className="text-sm sm:text-base">{group.icon}</span>
                <span className="text-sm sm:text-base">{group.title}</span>
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {group.items.map((extra) => {
                  const isSelected = config.extras.includes(extra.id);
                  const isExpanded = expandedExtra === extra.id;
                  
                  return (
                    <div
                      key={extra.id}
                      className={`
                        relative rounded-xl border-2 transition-all duration-300
                        ${isSelected
                          ? 'border-slate-400 bg-slate-50 shadow-lg'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                        }
                      `}
                    >
                      {/* Selection indicator */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 rounded-full flex items-center justify-center z-10">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      )}

                      {/* Card header - clickable */}
                      <div 
                        className="p-3 sm:p-4 cursor-pointer flex items-center justify-between"
                        onClick={() => {
                          const newIsSelected = !isSelected;
                          setConfig(prev => ({
                            ...prev,
                            extras: newIsSelected 
                              ? [...prev.extras, extra.id]
                              : prev.extras.filter(id => id !== extra.id)
                          }));
                        }}
                      >
                        <div className="flex-1 pr-2">
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{extra.name}</h5>
                          <span className="text-base sm:text-lg font-bold text-slate-900">€{extra.price}</span>
                        </div>
                        
                        {/* Expand button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedExtra(isExpanded ? null : extra.id);
                          }}
                          className="ml-2 sm:ml-3 p-1.5 sm:p-2 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                          ) : (
                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                          )}
                        </button>
                      </div>

                      {/* Expanded description */}
                      {isExpanded && (
                        <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-slate-200 pt-2 sm:pt-3">
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {extra.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {config.extras.length > 0 && (
          <div className="text-center text-slate-600 text-xs sm:text-sm pt-3 sm:pt-4 border-t border-slate-200">
            {config.extras.length} extra selezionati
          </div>
        )}
      </div>
    );
  });

  const Step4 = React.memo(() => {
    const selectedBusinessType = businessTypes.find(t => t.id === config.businessType);
    const packages = config.businessType ? getPackagesForType(config.businessType) : [];
    const selectedPackage = packages.find(p => p.id === config.package);
    const selectedExtras = extras.filter(e => config.extras.includes(e.id));
    const total = calculateTotal();

    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 px-2">
            Perfetto {config.customerName}! 
          </h3>
          <p className="text-sm sm:text-base text-slate-600 px-2">Ecco il riepilogo del tuo progetto</p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200">
          {/* Customer info */}
          <div className="text-center mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{config.customerName}</h4>
            <div className="flex items-center justify-center gap-2">
              {selectedBusinessType && <selectedBusinessType.icon className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />}
              <span className="text-slate-600 text-xs sm:text-sm">{selectedBusinessType?.title}</span>
            </div>
          </div>

          {/* Package */}
          {selectedPackage && (
            <div className="border-b border-slate-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base">Pacchetto {selectedPackage.name}</h5>
                  <span className="text-xs text-green-600">Sconto {selectedPackage.discount}</span>
                </div>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-bold text-slate-900">€{selectedPackage.discountedPrice}</span>
                  <span className="text-xs text-slate-500 line-through ml-1 sm:ml-2">€{selectedPackage.originalPrice}</span>
                </div>
              </div>
            </div>
          )}

          {/* Extras */}
          {selectedExtras.length > 0 && (
            <div className="border-b border-slate-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <h5 className="font-bold text-slate-900 mb-2 sm:mb-3 text-xs sm:text-sm">Servizi extra</h5>
              <div className="space-y-1.5 sm:space-y-2 max-h-28 sm:max-h-32 overflow-y-auto">
                {selectedExtras.map((extra) => (
                  <div key={extra.id} className="flex items-center justify-between">
                    <span className="text-slate-600 text-xs sm:text-sm pr-2">{extra.name}</span>
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm flex-shrink-0">€{extra.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Total */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900">
              <span>Totale</span>
              <span>€{total}</span>
            </div>
            <p className="text-slate-600 text-xs mt-1">IVA inclusa</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-3 px-4 sm:px-6 rounded-xl font-bold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Richiedi preventivo gratuito
            </button>
          </div>
        </div>
      </div>
    );
  });

  const steps = [Step1, Step2, Step3, Step4];
  const CurrentStepComponent = steps[currentStep - 1];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <section className="py-4 sm:py-8">
        <div className="container-custom text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Configura il tuo progetto
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto px-2">
            Crea la soluzione perfetta per la tua attività in pochi semplici passaggi.
          </p>
          
          {/* Progress bar */}
          <div className="max-w-xs sm:max-w-md mx-auto mb-4">
            <div className="flex items-center justify-between mb-2 px-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`
                    w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300
                    ${currentStep >= step 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-slate-200 text-slate-500'
                    }
                  `}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="h-1.5 sm:h-2 bg-slate-200 rounded-full overflow-hidden mx-2">
              <div 
                className="h-full bg-slate-900 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section 
        className={`px-2 sm:px-4 ${isKeyboardOpen ? 'pb-6 pt-20' : 'pb-24 sm:pb-32'}`}
        style={{
          // Adjust container height based on viewport when keyboard is open
          minHeight: isKeyboardOpen ? 'auto' : undefined
        }}
      >
        <div className="container-custom">
          <div className={`max-w-5xl mx-auto ${currentStep <= 2 || currentStep === 4 ? (isKeyboardOpen ? 'flex items-center justify-center py-4' : 'min-h-[calc(100vh-350px)] sm:h-[calc(100vh-450px)] flex items-top justify-center') : (isKeyboardOpen ? 'py-4' : 'min-h-[calc(100vh-200px)] sm:min-h-[calc(100vh-250px)]')}`}>
            <div className="w-full">
              <CurrentStepComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation - Smart positioning for mobile keyboard */}
      <div 
        className={`
          fixed left-0 right-0 bg-white border-t border-slate-200 p-3 sm:p-6 transition-all duration-300 z-50
          ${isKeyboardOpen 
            ? 'top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 border-t-0' 
            : 'bottom-0'
          }
        `}
        style={{
          // Su mobile, quando la tastiera è aperta, usa position sticky
          position: isKeyboardOpen ? 'sticky' : 'fixed'
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`
                flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base
                ${currentStep === 1 
                  ? 'text-slate-400 cursor-not-allowed' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }
              `}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Indietro</span>
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`
                  flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base
                  ${canProceed()
                    ? 'bg-slate-900 text-white hover:bg-slate-800 transform hover:scale-105'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }
                `}
              >
                Continua
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            ) : (
              <button 
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Contattaci
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
