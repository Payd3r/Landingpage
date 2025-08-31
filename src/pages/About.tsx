import { Code, Camera, Heart, Zap, Star, ExternalLink, Instagram } from 'lucide-react';

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