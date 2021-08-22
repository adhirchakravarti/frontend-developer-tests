import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import './index.scss';
import { UserType } from '../../model/types';

function User({
  name,
  gender,
  registeredDate,
  city,
  state,
  country
}: UserType): JSX.Element {
  const formattedDate = useMemo(() => {
    return DateTime.fromISO(registeredDate).toLocaleString(
      DateTime.DATETIME_FULL
    );
  }, [registeredDate]);
  return (
    <div className="user" key={`${name}-${registeredDate}`}>
      <div className="user__name">{name}</div>
      <div className="user__gender">{gender}</div>
      <div className="user__registered-date">{formattedDate}</div>
      <div className="user__location">{`${city}, ${state}, ${country}`}</div>
    </div>
  );
}

export default User;
