import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Smartphone } from 'lucide-react';

const Hero = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Sviluppo Web',
      description: 'Siti web moderni e responsive'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design UI/UX',
      description: 'Interfacce intuitive e accattivanti'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Applicazioni Mobile',
      description: 'App native e ibride'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-16">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Creo{' '}
            <span className="text-blue-500">esperienze digitali</span>
            <br />
            che ispirano
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Sviluppatore web specializzato in landing page e applicazioni moderne. 
            Trasformo le tue idee in realtà digitali che convertono.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
              Vedi i Progetti
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Iniziamo a Collaborare
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-blue-500 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">10+</div>
              <div className="text-sm text-slate-600">Progetti Completati</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">5+</div>
              <div className="text-sm text-slate-600">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">100%</div>
              <div className="text-sm text-slate-600">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">24/7</div>
              <div className="text-sm text-slate-600">Supporto Tecnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;