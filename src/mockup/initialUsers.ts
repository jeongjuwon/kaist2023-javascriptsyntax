export type ManagedUser = {
  id: number;
  name: string;
  email: string;
};

const initialUsers: ManagedUser[] = [
  {id: 20, name: 'John Doe', email: 'john.doe@example.com'},
  {id: 19, name: 'Jane Smith', email: 'jane.smith@example.com'},
  {id: 18, name: 'Michael Johnson', email: 'michael.johnson@example.com'},
  {id: 17, name: 'Emily Davis', email: 'emily.davis@example.com'},
  {id: 16, name: 'David Clark', email: 'david.clark@example.com'},
  // Add more users as needed
  // ...
  {id: 1, name: 'Michelle Green', email: 'michelle.green@example.com'},
];

export default initialUsers;
