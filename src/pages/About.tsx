import { Code, Palette, Smartphone, Users, Heart, Zap, Star } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React & TypeScript', percentage: 95, icon: Code },
    { name: 'UI/UX Design', percentage: 90, icon: Palette },
    { name: 'Mobile Development', percentage: 85, icon: Smartphone },
    { name: 'Node.js & Backend', percentage: 80, icon: Users },
  ];

  const experiences = [
    {
      year: '2024',
      title: 'Freelance Developer',
      description: 'Sviluppo di landing page e applicazioni web per clienti di tutto il mondo.',
      icon: Zap
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      description: 'Specializzato in React e TypeScript per applicazioni moderne.',
      icon: Code
    },
    {
      year: '2022',
      title: 'UI/UX Designer',
      description: 'Creazione di interfacce user-friendly e esperienze digitali coinvolgenti.',
      icon: Palette
    }
  ];

  const services = [
    {
      title: 'Landing Page',
      description: 'Creo landing page che convertono visitatori in clienti.',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Web Applications',
      description: 'Sviluppo applicazioni web complete e funzionali.',
      icon: Code,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Mobile Apps',
      description: 'Applicazioni mobile native e ibride per iOS e Android.',
      icon: Smartphone,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-6">
              Ciao, sono <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Andrea</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Sviluppatore web creativo che trasforma idee in esperienze digitali straordinarie. 
              Amo creare soluzioni che non solo funzionano, ma ispirano.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>5+ anni di esperienza</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>50+ progetti completati</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>100% soddisfazione clienti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Le mie competenze</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tecnologie e strumenti che uso per creare esperienze digitali straordinarie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-6 h-6 text-blue-500" />
                    <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium text-slate-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">La mia esperienza</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Un percorso di crescita e apprendimento continuo
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-blue-500">{exp.year}</span>
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Cosa posso fare per te</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Servizi personalizzati per trasformare le tue idee in realtà digitali
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto a iniziare il tuo progetto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Parliamo di come posso aiutarti a realizzare la tua visione digitale
          </p>
          <a href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4">
            Iniziamo a collaborare
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;