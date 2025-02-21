const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/toursModel');

dotenv.config({
  path: './config.env',
});

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB).then(() => {
  // eslint-disable-next-line no-console
  console.log(`DB connection successfull!`);
});

// Reading json file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'),
);

// Import Data Into DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete all data from collections
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully delete!');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
