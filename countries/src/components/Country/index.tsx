import React from 'react';
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
  const accordionContext = React.useContext(AccordionContext);
  console.log('context = ', accordionContext, countryIndex);
  return (
    <div className="country" key={country}>
      <div className="country__row">
        <div className="country__row__summary">{`${country}, Number of users: ${userCount}`}</div>
        <button className="country__row__accordion-toggle" type="button">
          Users
        </button>
      </div>

      <Accordion open>
        <Users users={users} />
      </Accordion>
    </div>
  );
}

export default Country;
