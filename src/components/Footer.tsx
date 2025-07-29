import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', href: 'mailto:andrea@example.com', icon: Mail },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/andrea-mauri', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/andrea-mauri', icon: Github },
  ];

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Andrea Mauri. Tutti i diritti riservati.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;