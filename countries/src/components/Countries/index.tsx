import React, { useState, useCallback, useEffect, useMemo } from 'react';
import getApiData from '../../services/getApiData';
import Country from '../Country';
import './index.scss';

type CountryData = {
  info: Record<string, unknown>;
  results: Record<string, unknown>[];
};

type CountryUserData = {
  country: string;
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

const userAPI = 'https://randomuser.me/api/?results=100';

function Countries(): JSX.Element {
  const [countryData, setCountryData] = useState<
    Record<string, unknown>[] | null
  >(null);
  const [error, setError] = useState<Error | null>(null);
  const getCountryData = useCallback(async () => {
    try {
      const response = await getApiData<Promise<CountryData>>(userAPI);
      console.log(response);
      if (!response) {
        throw Error('failed fetch users');
      }
      const { results } = response;
      setCountryData(results);
    } catch (e) {
      console.log(e);
      //   return e.toString();
      setError(e);
    }
  }, [setCountryData, setError]);

  const sortedCountries = useMemo(() => {
    if (countryData && countryData.length > 0) {
      const countryList = countryData?.reduce(
        (accum: any, curr: any): CountryUserData[] => {
          // Name, Gender, City, State, and Date Registered
          const {
            location: { country, state, city },
            gender,
            name: { title, first, last },
            registered: { date }
          } = curr;
          const userData = {
            name: `${title}. ${first} ${last}`,
            gender,
            registeredDate: date,
            city,
            state,
            country
          };
          const existingIndex = accum.findIndex(
            (_: any) => _.country === country
          );
          if (existingIndex > -1) {
            let { userCount } = accum[existingIndex];
            const { users } = accum[existingIndex];
            const newUsers = users.concat([{ ...userData }]);
            accum[existingIndex] = {
              users: newUsers,
              country,
              userCount: (userCount += 1)
            };
            return accum;
          }
          const newUsers = [{ ...userData }];
          return accum.concat([{ country, userCount: 1, users: newUsers }]);
        },
        []
      );
      return countryList.sort(
        (a: any, b: any): number => b.userCount - a.userCount
      );
    }
    return null;
  }, [countryData]);

  useEffect(() => {
    if (!countryData) {
      getCountryData();
    }
  }, [getCountryData, countryData]);

  console.log(sortedCountries);
  return (
    <div className="countries">
      <div className="countries__title">Countries</div>
      <div className="countries__list-container">
        <ul className="countries__list">
          {sortedCountries &&
            sortedCountries.map((item, index) => {
              const { country, userCount, users } = item;
              return (
                <Country
                  key={country}
                  country={country}
                  countryIndex={index}
                  userCount={userCount}
                  users={users}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Countries;
