import React, { createContext } from 'react';

type AccordionProviderProps = { children: React.ReactNode };

export interface AccordionContextInterface {
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
}

export type AccordionContextType = {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
};

const AccordionContext = createContext<AccordionContextType>({
  activeIndex: null,
  setActiveIndex: () => {}
});

function AccordionProvider({ children }: AccordionProviderProps): JSX.Element {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const value = {
    activeIndex,
    setActiveIndex
  };
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}

export { AccordionContext, AccordionProvider };
