const express = require('express')
const bodyparser = require('body-parser');

const db = require('./src/back-end/db')
const app = express();
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
const port = 3001

// parse application/json
app.use(bodyparser.json({type: 'application/json'}));
app.use(
  bodyparser.urlencoded({
    extended: true,
  }),
);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
    // 'Access-Control-Expose-Headers'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  app.use('/route', require('./src/back-end/routes'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))