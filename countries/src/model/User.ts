interface User {
  cell: string;
  dob: Record<string, unknown>;
  email: string;
  gender: string;
  id: Record<string, unknown>;
  location: {
    city: string;
    coordinates: Record<string, unknown>;
    country: string;
    postcode: string;
    state: string;
    street: Record<string, unknown>;
    timezone: Record<string, unknown>;
  };
  login: Record<string, unknown>;
  name: Record<string, unknown>;
  nat: string;
  phone: string;
  picture: Record<string, unknown>;
  registered: Record<string, unknown>;
}

export default User;
