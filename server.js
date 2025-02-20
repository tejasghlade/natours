// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB).then(() => {
  // eslint-disable-next-line no-console
  console.log(`DB connection successfull!`);
});

const app = require('./app');

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}`);
});
