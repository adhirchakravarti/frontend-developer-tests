import React from 'react';
import { DateTime } from 'luxon';
import './index.scss';

type UserProps = {
  name: string;
  gender: string;
  registeredDate: string;
  city: string;
  state: string;
  country: string;
};

function User({
  name,
  gender,
  registeredDate,
  city,
  state,
  country
}: UserProps): JSX.Element {
  console.log(DateTime.fromISO(registeredDate));
  return (
    <div className="user" key={`${name}-${registeredDate}`}>
      <div className="user__name">{name}</div>
      <div className="user__gender">{gender}</div>
      <div className="user__registered-date">{registeredDate}</div>
      <div className="user__location">{`${city}, ${state}, ${country}`}</div>
    </div>
  );
}

export default User;
