function Auth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("danger", "Your are not authorized!");
    res.redirect("/users/formLogin");
  }
}

module.exports = Auth;
