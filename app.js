var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var productRouter = require('./routes/productRoute');
var cartRouter = require('./routes/cartRoute');
var accountRouter = require('./routes/accountRoute');
var productApiRoute = require('./routes/api/ProductApiRoute');
var authUtils = require('./util/authUtils');
var orderRouter = require('./routes/orderRoute');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));

const i18n = require('i18n');
i18n.configure({
   locales: ['pl', 'en'], // języki dostępne w aplikacji. Dla każdego z nich należy utworzyć osobny słownik 
   directory: path.join(__dirname, 'locales'), // ścieżka do katalogu, w którym znajdują się słowniki
   objectNotation: true, // umożliwia korzstanie z zagnieżdżonych kluczy w notacji obiektowej
   defaultLocale: 'pl', 
   cookie: 'vishop-lang', //nazwa cookies, które nasza aplikacja będzie wykorzystywać do przechowania informacji o  języku aktualnie wybranym przez użytkownika
   register: global     

});

const session = require('express-session');
app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if(!res.locals.loginError) {
      res.locals.loginError = undefined;
  }
  next();
});



app.use((req, res, next) => {
  if(!res.locals.lang) {
      const currentLang = req.cookies['vishop-lang'];
      res.locals.lang = currentLang;
  }
  next();
});

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/account', authUtils.permitAuthenticatedUser, accountRouter);
app.use('/cart',  authUtils.permitAuthenticatedUser, cartRouter);
app.use('/orders', authUtils.permitAuthenticatedUser, orderRouter);

app.use('/api/products', productApiRoute);



const sequelizeInit = require('./config/sequelize/init');
sequelizeInit();



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

module.exports = app;
