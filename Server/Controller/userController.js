const bcrypt = require('bcrypt');
const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const ExpressError = require('../utils/ExpressError');


module.exports.signUp = async (req, res,next) => {
    try {
      const { username, email, password } = req.body;
  
      if (!(username && email && password)) {
        return res.json(new ExpressError(400, 'Please Enter All Details'));
      }
  
      // Check if there's already a user with the email address
      const existingUserByEmail = await User.findOne({ email });
      if (existingUserByEmail) {
        return res.json(new ExpressError(400, 'Email Already In Use'));
      }
  
      // Hash the password
      const EncPass = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = await User.create({
        username,
        email,
        password: EncPass
      });
  
      // Generate a token
      const token = jwt.sign(
        { id: user._id, email },
        'MySecretKey',
        { expiresIn: '2h' }
      );
  
      user.token = token;
      user.password = undefined;
  
    //   return res.json({
    //     success: true,
    //     user,
    //     token
    //   });
      next();
    } catch (error) {
  
      if (error.code === 11000) { // Duplicate key error code
        const field = Object.keys(error.keyValue)[0];
        const value = error.keyValue[field];
        const message = `Duplicate value for ${field}: ${value}`;
        return res.json(new ExpressError(400, 'Username already Exsists'));
      }

    }
  };

module.exports.loginIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send('Please Fill All Details');
    }

    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user._id },
        'MySecretKey',
        { expiresIn: '2h' }
      );

      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
      };

      return res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
      });
    }

    return res.status(400).send('Enter Correct Credentials');
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something Went Wrong");
  }
};
