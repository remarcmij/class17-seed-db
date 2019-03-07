require('dotenv').load();
const util = require('util');
const mysql = require('mysql');
const faker = require('faker');

const INSERT_COUNT = 100;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const queryPromise = util.promisify(pool.query.bind(pool));

function makeHouseObject() {
  return {
    link: faker.internet.url(),
    market_date: faker.date.past(),
    location_country: faker.address.country(),
    location_address: faker.address.streetAddress(),
    location_city: faker.address.city(),
    size_living_area: faker.random.number({ min: 40, max: 300 }),
    size_rooms: faker.random.number({ min: 1, max: 40 }),
    price_value: faker.random.number({ min: 20000, max: 1000000 }),
    price_currency: 'EUR',
    location_coordinates_lat: faker.address.latitude(),
    location_coordinates_lng: faker.address.longitude(),
    description: faker.lorem.sentence(),
    title: faker.lorem.sentence(),
    images: [faker.image.imageUrl(), faker.image.imageUrl()].join(','),
    sold: faker.random.boolean() ? 1 : 0,
  };
}

async function main() {
  try {
    const promises = [...new Array(INSERT_COUNT)]
      .map(_ => makeHouseObject())
      .map(house => queryPromise('REPLACE INTO houses SET ?', house));
    await Promise.all(promises);
    console.log(`${INSERT_COUNT} houses inserted`);
  } catch (err) {
    console.error(err.message);
  } finally {
    process.exit();
  }
}

main();
