import { createContext, useContext } from 'react';

// État de la page courante : `ready` passe à true quand le rideau de transition est levé.
export const PageContext = createContext({ ready: true, enterDelay: 0, intro: false });

export const usePage = () => useContext(PageContext);
