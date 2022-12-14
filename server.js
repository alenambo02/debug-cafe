const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
// const sidebar = require('./utils/sidebar');
// const fetch = require("node-fetch");

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'secret',
    cookie: {maxAge:1800000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(fetch)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const stripePublic = process.env.STRIPE_PUBLIC_KEY
const stripeSecret = process.env.STRIPE_SECRET_KEY
// console.log(stripePublic,stripeSecret)

const stripe = require('stripe')(stripeSecret);

const router = require('express').Router();