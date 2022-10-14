const router = require('express').Router()
const passport = require('passport')
const User = require('../models/UserDataSchema')
//login route
router.get('/login',(req,res)=>{
  res.send('yeah this is for the login')
})
//google route
router.get('/google',passport.authenticate('google',{
    scope:['profile']

}))
router.get('/google/redirect',passport.authenticate('google',{
  failureRedirect: '/login'
}),
function(req,res){
 res.redirect('http://localhost:3000')
})
//google route
router.get('/facebook',passport.authenticate('facebook',{
  scope:['public_profile','email']

}))
router.get('/facebook/callback',passport.authenticate('facebook',{
successRedirect: 'http://localhost:3000',

failureRedirect: '/login'
}),
function(req,res){
res.redirect('http://localhost:3000')
})
router.get('/userProfile',async (req,res)=>{
  const User1 = await User.find({});
  
      res.status(200).json(User1);
})
// router.get('/',async (req, res) => {
//     // method findOne
//     const User1 = await User.find({});
  
//     res.status(200).json(User1);
  
//   });
// router.post('/data', async(req,res)=>{
//     const { username,googleId} = req.body;
//     try {
//       const User1 = new User({ username , googleId});
//       await User1.save();
      
//       res.status(200).json("user registered successfully");
      
//     } catch (err) {
//       res.status(400).send(err.message);
      
//     }
// })

// call back google redirect 
//logout route
router.get('/logout',(req,res)=>{
  if(req.user){
    req.logout();
    res.json({ message: "Successfully logged out" });
  }
 
})

module.exports = router