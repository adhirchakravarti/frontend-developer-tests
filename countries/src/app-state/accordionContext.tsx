import React, { createContext, Dispatch, SetStateAction } from 'react';

type AccordionProviderProps = { children: React.ReactNode };

interface AccordionContextInterface {
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<null>>;
}

const AccordionContext = createContext<AccordionContextInterface | null>(null);

function AccordionProvider({ children }: AccordionProviderProps): JSX.Element {
  const [activeIndex, setActiveIndex] = React.useState(null);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value: AccordionContextInterface = { activeIndex, setActiveIndex };
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}

export { AccordionContext, AccordionProvider };
