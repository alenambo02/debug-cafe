const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      
      console.log('login')
      res.redirect('/login');

    } else {
      console.log('next')
      next();
    }
};

module.exports = withAuth;
