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
    date: Date;
    age: number;
  };
  id?: {
    name: string;
    value: string;
  };
}
