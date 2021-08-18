require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { connectToDb, connectToAdDb } = require('./db');
const { installHandler } = require('./api_handler');
const auth = require('./auth');

const app = express();

app.use(cookieParser());
app.use('/auth', auth.routes);

installHandler(app);

const port = process.env.API_SERVER_PORT || 3000;

(async function start() {
  try {
    await connectToDb();
    await connectToAdDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
}());
