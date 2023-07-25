
// Middleware to check if user is logged in or not
const requireLogin = (req, res, next) => {
    if (req.session.isLoggedIn) {
      // User is logged in, allow access to the next middleware or route handler
      next();
    } else {
      // User is not logged in, redirect to the login page or send an error response
      res.redirect('/login'); 
    }
  };
  