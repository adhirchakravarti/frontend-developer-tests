import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import User from '../User';
import './index.scss';
import { UserType } from '../../model/types';

type UsersProps = {
  users: UserType[];
};

const sortByDate = (a: UserType, b: UserType) => {
  const aDate = DateTime.fromISO(a.registeredDate).toMillis();
  const bDate = DateTime.fromISO(b.registeredDate).toMillis();
  if (aDate < bDate) {
    return 1;
  }
  if (aDate > bDate) {
    return -1;
  }
  return 0;
};

function Users({ users }: UsersProps): JSX.Element {
  const sortedUsers = useMemo(() => {
    const clonedUsers: UserType[] = users.map((x) => ({ ...x }));

    return clonedUsers.sort(sortByDate);
  }, [users]);

  return (
    <div className="users">
      <div className="users__header">
        <div className="users__header__name">Name</div>
        <div className="users__header__gender">Gender</div>
        <div className="users__header__registered-date">Registered On</div>
        <div className="users__header__location">Location</div>
      </div>
      <div className="users__list">
        {sortedUsers &&
          sortedUsers.map((user) => {
            const { name, gender, registeredDate, city, state, country } = user;
            return (
              <User
                key={`${name}-${registeredDate}`}
                name={name}
                gender={gender}
                registeredDate={registeredDate}
                city={city}
                state={state}
                country={country}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Users;
