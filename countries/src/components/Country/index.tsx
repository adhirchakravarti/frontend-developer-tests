/* eslint-disable react/no-danger */
import React, {
  useMemo,
  KeyboardEvent,
  useState,
  useContext,
  useCallback
} from 'react';
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
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const accordionOpen = useMemo(() => {
    return activeIndex === countryIndex;
  }, [activeIndex, countryIndex]);

  const handleToggleAccordion = useCallback(() => {
    const newIndex = activeIndex !== countryIndex ? countryIndex : null;
    setActiveIndex(newIndex);
  }, [activeIndex, setActiveIndex, countryIndex]);

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const { code } = e;
    if (code === 'Enter') {
      handleToggleAccordion();
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const {
      target: { value }
    } = e;
    if (value === 'both') {
      setFilter(undefined);
    }
    setFilter(value);
  };

  const accordionIcon = useMemo(() => {
    if (accordionOpen) {
      return `&#9650`;
    }
    return `&#9660`;
  }, [accordionOpen]);

  return (
    <div className="country" key={country}>
      <div
        className="country__row"
        onClick={handleToggleAccordion}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
      >
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
        <SelectDropdown options={genderOptions} onChange={handleFilterChange} />
        <Users users={users} filter={filter} />
      </Accordion>
    </div>
  );
}

export default Country;
