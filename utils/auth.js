const withAuth = (req, res, next) => {
  //If not logged in, send user back to login route so that they may log in
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
