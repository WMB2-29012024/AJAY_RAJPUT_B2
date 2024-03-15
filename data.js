
export const userData = [];

for (let i = 0; i < 100; i++) {
  userData.push(generateRandomUser());
}

function generateRandomUser() {
  const firstNames = [
    'John',
    'Jane',
    'Alice',
    'Bob',
    'Emily',
    'Michael',
    'Emma',
    'William',
    'Olivia',
    'James',
    'Sophia',
    'Alexander',
    'Charlotte',
    'Daniel',
    'Mia',
  ];

  const lastNames = [
    'Smith',
    'Johnson',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
    'Anderson',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Lee',
  ];

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Mesa',
    'Walpi',
    'Houston',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    'Austin',
    'Jacksonville',
    'San Francisco',
    'Indianapolis',
    'Seattle',
    'Denver',
    'Washington',
    'Boston',
    'El Paso',
    'Nashville',
    'Portland',
  ];

  const genders = ['Male', 'Female'];

  const minAge = 20;
  const maxAge = 60;
  const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const randomGender = genders[Math.floor(Math.random() * genders.length)];
  const randomDomain = 'example.com'; // We'll use a fixed domain for simplicity

  const randomEmail = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@${randomDomain}`;

  return {
    id: Math.floor(Math.random() * 900000) + 100000,
    name: `${randomFirstName} ${randomLastName}`,
    email: randomEmail,
    city: randomCity,
    gender: randomGender,
    age: age,
  };
}   
      