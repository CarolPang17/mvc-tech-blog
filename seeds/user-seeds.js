const { User } = require('../models');

const userData = [
  {
    username: "Ollie",
    email: "Ollie@gmail.com",
    password: "password123"
  },
  {
    username: "Charlotte",
    email: "Charlotte@gmail.com",
    password: "password123"
  },
  {
    username: "Jacqueline",
    email: "Jacqueline@gmail.com",
    password: "password123"
  },
  {
    username: "Levi",
    email: "Levi@gmail.com",
    password: "password123"
  },
  {
    username: "Wilkerson",
    email: "Wilkerson@gmail.com",
    password: "password123"
  },
  {
    username: "Fernando",
    email: "Fernando@gmail.com",
    password: "password123"
  },
  {
    username: "Jordan",
    email: "Jordan@gmail.com",
    password: "password123"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;