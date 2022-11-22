import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.ru',
    password: bcrypt.hashSync('12344321', 10),
    isAdmin: true,
  },
  {
    name: 'Test User',
    email: 'test@example.ru',
    password: bcrypt.hashSync('12344321', 10),
  },
  {
    name: 'Slake',
    email: 'slake@example.ru',
    password: bcrypt.hashSync('12344321', 10),
  },
];

export default users;
