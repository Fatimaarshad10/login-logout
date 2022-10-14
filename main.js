const express = require('express')
const CookieSession = require('cookie-session');
const passport = require('passport')
const paasport1 = require('./config/passport')
const AuthRoute = require('./routes/userRoutes')
// const Profile = require('./routes/profile')
const mongoose = require("mongoose");
const key = require('./config/keys')
const cors = require('cors')
const main = express()
main.use(CookieSession({
    maxAge: 24*60*60*1000,
    keys:[key.session.cookie],
}))
//initialize the passport 
main.use(cors());
main.use(passport.initialize())
main.use(passport.session())


mongoose.connect(key.mongodb.MONGO_URL, () => {
    console.log('connected to mongodb');
    console.log(key.mongodb.MONGO_URL)
});

// set up routes
main.use(express.json())
main.use('/auth', AuthRoute);
// main.use('/profile', Profile);


// create home route
// main.get('/', (req, res) => {

//  res.send({ title: 'GeeksforGeeks' })
// });

main.listen(8000, () => {
    console.log('app now listening for requests on port');
});
