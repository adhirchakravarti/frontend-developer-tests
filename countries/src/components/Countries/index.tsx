import React, { useState, useCallback, useEffect, useMemo } from 'react';
import getApiData from '../../services/getApiData';
import Country from '../Country';
import TextLabel from '../TextLabel';
import { UserData, CountryUserData } from '../../model/types';
import './index.scss';

const userAPI = 'https://randomuser.me/api/?results=100';

function Countries(): JSX.Element {
  const [countryData, setCountryData] = useState<
    Record<string, unknown>[] | null
  >(null);
  const [error, setError] = useState<Error | null>(null);
  const getCountryData = useCallback(async () => {
    try {
      const response = await getApiData<Promise<UserData>>(userAPI);
      if (!response) {
        throw Error('failed fetch users');
      }
      const { results } = response;
      setCountryData(results);
    } catch (e) {
      setError(e);
    }
  }, [setCountryData, setError]);

  const sortedCountries = useMemo(() => {
    if (countryData && countryData.length > 0) {
      const countryList = countryData?.reduce(
        (accum: any, curr: any): CountryUserData[] => {
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

  return (
    <div className="countries">
      <TextLabel type="Section-Title" text="Countries" />
      {error && <TextLabel type="Item-Title" text={error.toString()} />}
      {!error && (
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
      )}
    </div>
  );
}

export default Countries;
