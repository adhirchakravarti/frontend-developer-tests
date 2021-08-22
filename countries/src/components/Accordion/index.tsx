import React, { ReactNode } from 'react';
import './index.scss';

type AccordionProps = {
  children: ReactNode;
  open: boolean;
};

function Accordion({ children, open }: AccordionProps): JSX.Element {
  return (
    <div className="accordion">
      {open && <div className="accordion__content">{children}</div>}
    </div>
  );
}

export default Accordion;
