var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3001;  // thiết lập lại port để có thể đẩy lên render chạy online web
const host = 'localhost';

app.listen(port, ()=>{
  console.log('server is running at http://'+host+':'+port)

}) // dùng để nghe cổng

module.exports = app;



// Start command trên render ghi là node app

// Tạo project web bằng framework ExpressJS:
// b1: npx express-generator --view=hbs
// b2: npm install			//cài vào folder dùng để làm web
// b3: npm install -g nodemon		//cài vào folder dùng để làm web
// b4: nodemon 			//dùng để chạy web

module.exports = app;
