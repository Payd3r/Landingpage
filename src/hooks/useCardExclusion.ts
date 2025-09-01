import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personalizzato per gestire l'esclusione delle card basata su parametri URL
 * Parametri di esclusione supportati:
 * - "asnd1acnk" -> esclude project-1 (I Gladiatori)
 * - "bnt2xcvb" -> esclude project-2 (Betta47)
 * - "clm3qwer" -> esclude project-3 (Le Chic di Cinzia)
 * - "dlr4tyui" -> esclude project-4 (La Lariana)
 */
export const useCardExclusion = () => {
  const [excludedCards, setExcludedCards] = useState<Set<string>>(new Set());
  const location = useLocation();

  useEffect(() => {
    // Prima carica le card escluse dal sessionStorage se esistono
    const savedExclusions = sessionStorage.getItem('excludedCards');
    if (savedExclusions) {
      try {
        const parsed = JSON.parse(savedExclusions);
        if (Array.isArray(parsed)) {
          setExcludedCards(new Set(parsed));
        }
      } catch (error) {
        console.warn('Errore nel parsing delle card escluse dal sessionStorage:', error);
      }
    }

    // Controlla se l'URL contiene parametri di esclusione
    const checkExclusionParameter = () => {
      const currentUrl = window.location.href;
      const pathname = window.location.pathname;
      
      // Mappa dei parametri di esclusione e i progetti corrispondenti
      const exclusionMap: Record<string, string> = {
        'asnd1acnk': 'project-1', // I Gladiatori
        'bnt2xcvb': 'project-2',  // Betta47
        'clm3qwer': 'project-3',  // Le Chic di Cinzia
        'dlr4tyui': 'project-4'   // La Lariana
      };
      
      // Controlla ogni parametro di esclusione
      Object.entries(exclusionMap).forEach(([param, projectId]) => {
        if (currentUrl.includes(param) || pathname.includes(param)) {
          setExcludedCards(prev => {
            const newSet = new Set(prev);
            newSet.add(projectId);
            
            // Salva nell'sessionStorage per persistenza durante la navigazione
            sessionStorage.setItem('excludedCards', JSON.stringify(Array.from(newSet)));
            return newSet;
          });
        }
      });
    };

    // Controlla al mount del componente
    checkExclusionParameter();
  }, [location]);

  /**
   * Verifica se una card dovrebbe essere esclusa
   */
  const isCardExcluded = (cardId: string): boolean => {
    return excludedCards.has(cardId);
  };

  /**
   * Filtra un array di progetti rimuovendo quelli esclusi
   */
  const filterExcludedProjects = <T extends { id: string }>(projects: T[]): T[] => {
    return projects.filter(project => !isCardExcluded(project.id));
  };

  /**
   * Resetta le esclusioni (utile per testing o reset manuale)
   */
  const resetExclusions = () => {
    setExcludedCards(new Set());
    sessionStorage.removeItem('excludedCards');
  };

  return {
    isCardExcluded,
    filterExcludedProjects,
    resetExclusions,
    excludedCards: Array.from(excludedCards)
  };
};
