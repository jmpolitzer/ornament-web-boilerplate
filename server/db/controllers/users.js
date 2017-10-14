const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models').User;

module.exports = {
  register(req, res) {
    return User.create({
      email: req.body.email,
      hash_password: bcrypt.hashSync(req.body.password, 10)
    })
    .then(user => {
      return res.json({ token: jwt.sign({ email: user.email, id: user.id }, 'RESTFULAPIs')} );
    })
    .catch(error => res.status(400).send(error));
  },

  signIn(req, res) {
    User.findOne({ where: {email: req.body.email} })
    .then(user => {
      if(!user) {
        res.status(401).json({ message: 'Authentication failed. User not found.' });
      } else {
        if(!user.comparePassword(req.body.password)) {
          res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          return res.json({ token: jwt.sign({ email: user.email, id: user.id }, 'RESTFULAPIs')} );
        }
      }
    })
    .catch(error => {
      res.status(400).send(error);
    })
  },

  loginRequired(req, res, next) {
    if(req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user.' });
    }
  }
}
