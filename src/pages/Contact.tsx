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
      icon: Mail,
      title: 'Email',
      value: 'andreamauri2013@gmail.com',
      href: 'mailto:andreamauri2013@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefono',
      value: '+39 339 537 5902',
      href: 'tel:+39339537590'
    },
    {
      icon: MapPin,
      title: 'Località',
      value: 'Milano, Italia',
      href: '#'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="gradient-bg py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Parliamo del tuo progetto
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Siamo sempre entusiasti di nuove collaborazioni. Raccontaci la tua idea e insieme 
            la trasformeremo in qualcosa di straordinario.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Invia un messaggio</h2>                
              </div>

              {isSubmitted ? (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Messaggio inviato!</h3>
                  <p className="text-slate-600">
                    Grazie per averci contattato. Ti risponderemo al più presto!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                        placeholder="la-tua-email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Oggetto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="Di cosa vuoi parlare?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Raccontaci del tuo progetto..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Invia messaggio
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Informazioni di contatto</h2>
                <p className="text-slate-600">
                  Preferisci contattarci direttamente? Ecco i nostri recapiti.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;