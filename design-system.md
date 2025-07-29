# Design System - Portfolio Landing Page

## Colori
- **Primario**: #3B82F6 (Blue-500) - Per elementi principali e call-to-action
- **Secondario**: #1E40AF (Blue-700) - Per hover e stati attivi
- **Accento**: #F59E0B (Amber-500) - Per highlights e elementi speciali
- **Neutro**: #F8FAFC (Slate-50) - Sfondo principale
- **Testo**: #1E293B (Slate-800) - Testo principale
- **Testo secondario**: #64748B (Slate-500) - Testo secondario
- **Bordo**: #E2E8F0 (Slate-200) - Bordi e separatori

## Tipografia
- **Font principale**: Inter (Google Fonts)
- **Titoli**: font-bold, text-4xl (h1), text-3xl (h2), text-2xl (h3)
- **Sottotitoli**: font-semibold, text-xl
- **Testo corpo**: font-normal, text-base
- **Testo piccolo**: font-normal, text-sm

## Spaziature
- **Container**: max-w-7xl, mx-auto, px-4 sm:px-6 lg:px-8
- **Sezioni**: py-16 sm:py-24
- **Card**: p-6 sm:p-8
- **Gap**: gap-6 sm:gap-8

## Componenti

### Header
- Altezza: h-16
- Sfondo: bg-white/80 backdrop-blur-sm
- Bordo: border-b border-slate-200
- Posizione: fixed top-0 z-50

### Hero Section
- Altezza: min-h-screen
- Sfondo: gradiente da slate-50 a white
- Centratura: flex items-center justify-center

### Project Cards
- Dimensioni: w-full sm:w-96
- Sfondo: bg-white
- Ombra: shadow-lg hover:shadow-xl
- Bordo: rounded-xl
- Transizione: transition-all duration-300
- Hover: scale-105

### Buttons
- **Primario**: bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg
- **Secondario**: bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg
- **Ghost**: text-blue-500 hover:text-blue-600 px-4 py-2

### Navigation
- **Desktop**: flex space-x-8
- **Mobile**: hamburger menu con drawer
- **Link attivo**: text-blue-500 font-semibold

## Responsive Design
- **Mobile First**: Design per mobile, poi tablet e desktop
- **Breakpoints**: sm:640px, md:768px, lg:1024px, xl:1280px
- **Grid**: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 per le card

## Animazioni
- **Fade In**: opacity-0 animate-fade-in
- **Slide Up**: transform translate-y-10 animate-slide-up
- **Hover Effects**: transition-all duration-300
- **Loading**: skeleton animation per immagini

## Icone
- **Set**: Heroicons (integrato con Tailwind)
- **Dimensioni**: w-5 h-5 per icone standard, w-6 h-6 per icone grandi

## Immagini
- **Formato**: WebP con fallback JPG
- **Lazy Loading**: loading="lazy"
- **Alt Text**: Sempre presente e descrittivo
- **Aspect Ratio**: 16:9 per mockup, 1:1 per thumbnails

## Accessibilità
- **Contrasto**: Minimo 4.5:1 per testo normale
- **Focus**: outline-blue-500 per elementi interattivi
- **Screen Reader**: aria-labels appropriati
- **Keyboard Navigation**: Tutti gli elementi navigabili da tastiera