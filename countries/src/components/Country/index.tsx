/* eslint-disable react/no-danger */
import React, { useMemo, useState, useContext, useCallback } from 'react';
import Accordion from '../Accordion';
import Users from '../Users';
import { AccordionContext } from '../../app-state/accordionContext';
import { UserType } from '../../model/types';
import './index.scss';
import TextLabel from '../TextLabel';
import SelectDropdown from '../SelectDropdown';

type CountryProps = {
  country: string;
  countryIndex: number;
  userCount: number;
  users: UserType[];
};

const genderOptions = [
  { label: 'Both', value: 'both' },
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
];

function Country({
  country,
  countryIndex,
  userCount,
  users
}: CountryProps): JSX.Element {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);
  const [filter, setFilter] = useState<string>('both');
  const accordionOpen = useMemo(() => {
    return activeIndex === countryIndex;
  }, [activeIndex, countryIndex]);

  const handleToggleAccordion = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLInputElement;
      const { tagName } = target;
      if (tagName !== 'SELECT') {
        const newIndex = activeIndex !== countryIndex ? countryIndex : null;
        setActiveIndex(newIndex);
      }
    },
    [activeIndex, setActiveIndex, countryIndex]
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value }
    } = e;
    setFilter(value);
  };

  const accordionIcon = useMemo(() => {
    if (accordionOpen) {
      return `&#9650`;
    }
    return `&#9660`;
  }, [accordionOpen]);

  return (
    <div
      className="country"
      key={country}
      id={country}
      onClickCapture={handleToggleAccordion}
      role="button"
      tabIndex={0}
    >
      <div className="country__row">
        <div className="country__row__summary">
          <TextLabel
            type="Item-Title"
            text={`${country}, Total users: ${userCount}`}
          />
          <span
            className="country__row__summary__accordion-toggle"
            dangerouslySetInnerHTML={{ __html: `${accordionIcon}` }}
          />
        </div>
      </div>

      <Accordion open={accordionOpen}>
        <SelectDropdown
          options={genderOptions}
          onChange={handleFilterChange}
          selectedValue={filter}
        />
        <Users users={users} filter={filter} />
      </Accordion>
    </div>
  );
}

export default Country;
