export type UserData = {
  info: Record<string, unknown>;
  results: Record<string, unknown>[];
};

export type UserType = {
  name: string;
  gender: string;
  registeredDate: string;
  city: string;
  state: string;
  country: string;
};

export type CountryUserData = {
  country: string;
  userCount: number;
  users: UserType[];
};
