export interface DetailedLabels {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  phone: string;
  cell: string;
  email: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  nat: string;
  dob: {
    date: string;
    age: number;
  };
}
