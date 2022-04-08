export interface EmployeeLabels {
  picture: {
    medium: string;
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
  };
  id: {
    name: string;
    value: string;
  };
  nat: string;
}
