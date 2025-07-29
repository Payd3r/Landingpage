# Portfolio Landing Page

Un sito web professionale per presentare i tuoi progetti ai clienti. Creato con React, TypeScript, Tailwind CSS e Vite.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale
- **Responsive**: Ottimizzato per tutti i dispositivi
- **Performance**: Build ottimizzato con Vite
- **SEO**: Meta tags e struttura semantica
- **Accessibilità**: WCAG compliant
- **Docker Ready**: Configurazione completa per deployment

## 🛠️ Tecnologie

- **React 18** - Framework frontend
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Vite** - Build tool veloce
- **React Router** - Client-side routing
- **Lucide React** - Icone moderne
- **Docker** - Containerizzazione

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   └── ScrollToTop.tsx
├── pages/              # Pagine dell'applicazione
│   ├── Projects.tsx    # Home page
│   ├── ProjectDetail.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/               # Dati mock
│   └── projects.ts
├── types/              # Definizioni TypeScript
│   └── Project.ts
└── index.css           # Stili globali
```

## 🚀 Sviluppo Locale

### Prerequisiti

- Node.js 18+
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd Landingpage
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Naviga su `http://localhost:5173`

## 🐳 Deployment con Docker

### Prerequisiti

- Docker
- Docker Compose (opzionale)

### Metodo 1: Script Automatico

#### Linux/macOS
```bash
chmod +x build.sh
./build.sh
```

#### Windows (PowerShell)
```powershell
.\build.ps1
```

### Metodo 2: Comandi Manuali

1. **Build dell'immagine**
   ```bash
   docker build -t portfolio-landing-page .
   ```

2. **Avvia con Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Oppure avvia con Docker**
   ```bash
   docker run -d -p 80:80 --name portfolio-frontend portfolio-landing-page
   ```

4. **Accedi al sito**
   Naviga su `http://localhost`

### Comandi Utili

```bash
# Visualizza i log
docker-compose logs -f

# Ferma i container
docker-compose down

# Ricostruisci l'immagine
docker-compose up -d --build

# Rimuovi tutto
docker-compose down -v
docker system prune -f
```

## 📝 Aggiungere Nuovi Progetti

1. **Modifica `src/data/projects.ts`**
   ```typescript
   {
     id: 'project-3',
     title: 'Nuovo Progetto',
     description: 'Descrizione del progetto...',
     shortDescription: 'Breve descrizione...',
     image: '/mockups/nuovo-progetto.jpg',
     mockups: [
       '/mockups/nuovo-desktop.jpg',
       '/mockups/nuovo-mobile.jpg'
     ],
     technologies: ['React', 'TypeScript', 'Tailwind CSS'],
     category: 'landing-page',
     year: 2024,
     client: 'Nome Cliente',
     url: 'https://example.com',
     features: ['Caratteristica 1', 'Caratteristica 2'],
     challenges: ['Sfida 1', 'Sfida 2'],
     solutions: ['Soluzione 1', 'Soluzione 2']
   }
   ```

2. **Aggiungi le immagini**
   - Crea la cartella `public/mockups/`
   - Inserisci le immagini dei mockups

## 🎨 Personalizzazione

### Colori
Modifica `src/index.css` per cambiare la palette colori:
```css
:root {
  --primary: #3B82F6;
  --secondary: #8B5CF6;
}
```

### Font
Cambia il font in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Animazioni
Aggiungi nuove animazioni in `tailwind.config.js`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
}
```

## 📦 Script Disponibili

```bash
# Sviluppo
npm run dev          # Avvia server di sviluppo
npm run build        # Build di produzione
npm run preview      # Preview build di produzione

# Docker
./build.sh           # Build e avvio automatico (Linux/macOS)
.\build.ps1          # Build e avvio automatico (Windows)
```

## 🌐 Deployment

### Vercel
1. Connetta il repository a Vercel
2. Configura il build command: `npm run build`
3. Configura l'output directory: `dist`

### Netlify
1. Connetta il repository a Netlify
2. Configura il build command: `npm run build`
3. Configura la publish directory: `dist`

### Altri Provider
Il progetto è compatibile con qualsiasi provider che supporta siti statici.

## 🔧 Configurazione Avanzata

### Variabili d'Ambiente
Crea un file `.env`:
```env
VITE_APP_TITLE=Portfolio
VITE_APP_DESCRIPTION=Portfolio di Andrea Mauri
```

### SEO
Modifica `index.html` per ottimizzare SEO:
```html
<meta name="description" content="Portfolio di Andrea Mauri">
<meta name="keywords" content="sviluppatore web, React, TypeScript">
```

## 🤝 Contribuire

1. Fork il progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 📞 Supporto

Per domande o supporto:
- Email: andrea@example.com
- LinkedIn: [Andrea Mauri](https://linkedin.com/in/andrea-mauri)
- GitHub: [andrea-mauri](https://github.com/andrea-mauri)

---

⭐ Se questo progetto ti è stato utile, considera di dargli una stella!
