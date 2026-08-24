export const users = [
  { id: "1", nom: "Alice", email: "alice@example.com" },
  { id: "2", nom: "Bob", email: "bob@example.com" },
  { id: "3", nom: "Arimino", email: "arimino@example.com" },
  { id: "4", nom: "Elison", email: "elison@example.com" }
];

export const resolversUser = {
  Query: {
    users: () => users
  }
};