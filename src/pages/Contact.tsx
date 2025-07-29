import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementare invio email
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'info@example.com',
      href: 'mailto:info@example.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefono',
      value: '+39 123 456 7890',
      href: 'tel:+391234567890'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Località',
      value: 'Milano, Italia',
      href: '#'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Parliamo del Tuo Progetto
            </h1>
            <p className="text-xl text-slate-600">
              Hai un'idea in mente? Sono qui per aiutarti a trasformarla in realtà. 
              Contattami e iniziamo a collaborare!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Invia un Messaggio
              </h2>
              
              {isSubmitted ? (
                <div className="card p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                    Messaggio Inviato!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Grazie per avermi contattato. Ti risponderò al più presto!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Invia un Altro Messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="la-tua-email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Oggetto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Di cosa vuoi parlare?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Raccontami del tuo progetto..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Invia Messaggio
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Informazioni di Contatto
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-blue-500 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.href}
                          className="text-slate-600 hover:text-blue-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="card p-6 mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Orari di Lavoro
                </h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Lunedì - Venerdì</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span>Chiuso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Pronto a Iniziare?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Non esitare a contattarmi per discutere del tuo progetto. 
              La prima consulenza è gratuita!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@example.com" className="btn-primary">
                Invia Email
              </a>
              <a href="tel:+391234567890" className="btn-secondary">
                Chiama Ora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;