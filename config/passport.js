LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { runQuery } = require("../config/db");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function (username, password, done) {
      runQuery(
        `SELECT * FROM users WHERE username = '${username}'`,
        function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user[1][0]) {
            return done(null, false, { message: "Incorrect username." });
          }

          const userPassword = user[1][0].password;
          bcrypt.compare(password, userPassword, function (err, isMatch) {
            if (err) {
              return done(err);
            }
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Incorrect password." });
            }
          });
        }
      );
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user[1][0].id_user);
  });

  passport.deserializeUser(function (id, done) {
    runQuery(
      `SELECT * FROM users WHERE username = '${id}'`,
      function (err, user) {
        done(err, user);
      }
    );
  });
};
