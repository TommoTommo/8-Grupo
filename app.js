// hola soy Agus D.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

let productsRouter = require("./routes/product")
let db = require("./database/models")


var app = express();

// view engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//config de session
app.use(session({
 secret: "secret",
 resave: false,
 saveUninitialized:true

}));

//pasar info de session al front end
app.use(function(req, res, next){
  if (req.session.user != undefined){
    res.locals.user =req.session.user;
    return next();
  }
  return next();
})

/* configurar cookies de usuario*/
app.use(function(req, res, next) {
  
  /* si existe la cooki en el navegador && no existe el usuario en la variable session */
  if (req.cookies.userId != undefined && req.session.user == undefined) {
    let idUsuarioEnCookie = req.cookies.userId;
    db.User.findByPk(idUsuarioEnCookie)
    .then((user) => {

      req.session.user = user.dataValues;
      res.locals.user = user.dataValues;

      return next();
      
    }).catch((err) => {
      console.log(err);
    });

  } else {
    /* Pasa al siguiente */
    return next();
  }
});

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/product', productsRouter);

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

