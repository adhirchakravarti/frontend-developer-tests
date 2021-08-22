/* eslint-disable react/no-danger */
import React, { useMemo } from 'react';
import Accordion from '../Accordion';
import Users from '../Users';
import { AccordionContext } from '../../app-state/accordionContext';
import './index.scss';

type CountryProps = {
  country: string;
  countryIndex: number;
  userCount: number;
  users: {
    name: string;
    gender: string;
    registeredDate: string;
    city: string;
    state: string;
    country: string;
  }[];
};

function Country({
  country,
  countryIndex,
  userCount,
  users
}: CountryProps): JSX.Element {
  const { activeIndex, setActiveIndex } = React.useContext(AccordionContext);
  const accordionOpen = useMemo(() => {
    return activeIndex === countryIndex;
  }, [activeIndex, countryIndex]);

  const handleToggleAccordion = () => {
    const newIndex = activeIndex !== countryIndex ? countryIndex : null;
    setActiveIndex(newIndex);
  };
  const accordionIcon = useMemo(() => {
    if (accordionOpen) {
      return `&#9650`;
    }
    return `&#9660`;
  }, [accordionOpen]);
  return (
    <div className="country" key={country}>
      <div className="country__row">
        <div className="country__row__summary">{`${country}, Number of users: ${userCount}`}</div>
        <button
          className="country__row__accordion-toggle"
          type="button"
          onClick={handleToggleAccordion}
        >
          Show users{' '}
          <span
            className="country__row__accordion-toggle__icon"
            dangerouslySetInnerHTML={{ __html: `${accordionIcon}` }}
          />
        </button>
      </div>

      <Accordion open={accordionOpen}>
        <Users users={users} />
      </Accordion>
    </div>
  );
}

export default Country;
