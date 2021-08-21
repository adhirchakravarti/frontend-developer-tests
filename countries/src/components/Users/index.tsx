import React from 'react';
import User from '../User';
import './index.scss';

type UsersProps = {
  users: {
    name: string;
    gender: string;
    registeredDate: string;
    city: string;
    state: string;
    country: string;
  }[];
};

function Users({ users }: UsersProps): JSX.Element {
  return (
    <div className="users">
      <div className="users__list">
        {users &&
          users.map((user) => {
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
