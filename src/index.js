const engine = require('express-handlebars')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const path = require('path')
const cookieParser = require('cookie-parser')
const session=require('express-session');

const app = express()
const route = require('./routes/index')
const db = require('./config/db')
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))



app.use(session({

  secret : 'foo',
  resave: false,
  saveUninitialized: false
}));
app.use(function (req, res, next) {
  if (!req.session) {
      return next(new Error('oh no')); // handle error
  }
  next();
});

app.engine('hbs',engine.engine({
  extname:'hbs',
  helpers: {
    sum:(a,b)=>a+b,
   
  },
 
}));
db.connect()
route(app)
app.set('view engine', 'hbs');
app.set('views', 'src/rescouce/views');


app.listen(3000)


