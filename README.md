# Portfolio Landing Page

Un sito web professionale per presentare i tuoi progetti ai clienti. Creato con React, TypeScript, Tailwind CSS e Vite.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale
- **Responsive**: Ottimizzato per tutti i dispositivi
- **Performance**: Veloce e ottimizzato
- **Accessibile**: Segue le best practices di accessibilità
- **Scalabile**: Facile da aggiornare con nuovi progetti

## 🛠️ Tecnologie Utilizzate

- **React 18** - Framework JavaScript
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool veloce
- **React Router** - Routing per SPA
- **Lucide React** - Icone moderne

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── Header.tsx     # Header con navigazione
│   ├── Footer.tsx     # Footer del sito
│   ├── Hero.tsx       # Sezione hero della home
│   └── ProjectCard.tsx # Card per i progetti
├── pages/              # Pagine dell'applicazione
│   ├── Home.tsx       # Pagina principale
│   ├── Projects.tsx   # Lista progetti
│   ├── About.tsx      # Pagina chi sono
│   └── Contact.tsx    # Pagina contatti
├── data/               # Dati dell'applicazione
│   └── projects.ts    # Dati dei progetti
├── types/              # Definizioni TypeScript
│   └── Project.ts     # Interfacce per i progetti
└── index.css          # Stili globali e Tailwind
```

## 🎨 Design System

Il progetto segue un design system ben definito con:

- **Colori**: Palette blu professionale con accenti
- **Tipografia**: Font Inter per leggibilità ottimale
- **Componenti**: Sistema di componenti consistente
- **Spaziature**: Sistema di spaziature scalabile
- **Animazioni**: Transizioni fluide e moderne

## 🚀 Come Iniziare

### Prerequisiti

- Node.js (versione 16 o superiore)
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd portfolio-landing-page
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri nel browser**
   Naviga su `http://localhost:5173`

## 📝 Aggiungere Nuovi Progetti

Per aggiungere un nuovo progetto, modifica il file `src/data/projects.ts`:

```typescript
{
  id: 'project-3',
  title: 'Nuovo Progetto',
  description: 'Descrizione del progetto...',
  shortDescription: 'Descrizione breve...',
  image: '/mockups/project-thumb.jpg',
  mockups: [
    '/mockups/project-desktop.jpg',
    '/mockups/project-mobile.jpg'
  ],
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  category: 'landing-page',
  year: 2024,
  client: 'Nome Cliente',
  url: 'https://example.com',
  features: ['Feature 1', 'Feature 2'],
  challenges: ['Sfida 1', 'Sfida 2'],
  solutions: ['Soluzione 1', 'Soluzione 2']
}
```

## 🎯 Personalizzazione

### Colori
Modifica i colori nel file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1E40AF',
      // ... altri colori
    }
  }
}
```

### Contenuti
- **About**: Modifica `src/pages/About.tsx`
- **Contatti**: Aggiorna le informazioni in `src/pages/Contact.tsx`
- **Progetti**: Aggiungi/modifica in `src/data/projects.ts`

## 📦 Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione

## 🌐 Deployment

### Vercel (Raccomandato)
1. Collega il repository a Vercel
2. Configura automaticamente il build
3. Deploy automatico ad ogni push

### Netlify
1. Collega il repository a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Altri Hosting
1. Esegui `npm run build`
2. Carica la cartella `dist` sul tuo hosting

## 🔧 Configurazione Avanzata

### Variabili d'Ambiente
Crea un file `.env` per le configurazioni:

```env
VITE_CONTACT_EMAIL=info@example.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### SEO
Modifica i meta tag in `index.html` per ottimizzare il SEO.

## 🤝 Contribuire

1. Fork il progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 📞 Supporto

Per domande o supporto, contattami:
- Email: info@example.com
- LinkedIn: [Il tuo profilo]
- GitHub: [Il tuo profilo]

---

Creato con ❤️ per presentare i tuoi progetti in modo professionale.
