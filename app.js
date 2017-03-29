const PORT = 5001;
const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const home = require('./routes/home');
const shuffle = require('shuffle-array');
const app = Express();
const cookieParser = require('cookie-parser');


app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', home);
app.use(cookieParser());
app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}...`)
})
