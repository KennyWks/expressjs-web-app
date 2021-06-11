const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const path = require("path");
require("dotenv").config();
const flash = require("connect-flash");
const passport = require("passport");

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.set("trust proxy", 1); // trust first proxy

// express session middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

// express message middleware
app.use(require("connect-flash")());
app.use(function (req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

//routes for root
// app.get("/", (req, res) => {
//   res.status(200).send({
//     msg: "Hallo! Welcome to page home",
//   });
// });

//passport config
require("./config/passport")(passport);
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function (req, res, next) {
  res.locals.user = req.user || null;
  next();
})

const home = require("./routes/home");
app.use("/", home);

//routes for GET mahasiswa
const admin = require("./routes/admin");
app.use("/mahasiswa", admin);

//routes for users
const users = require("./routes/users");
app.use("/users", users);

//routes for all
app.use("/", (req, res) => {
  const code = 404;
  res.status(code);
  res.send(`<h1>${code}</h1>`);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});

// const GetAllDataMhs = require("./models/mahasiswa");
// app.get("/mahasiswa", (req, res) => {
//     const resultQuery = GetAllDataMhs();
//     resultQuery.then(response => {
//         res.render('mahasiswa', {
//             title: 'mahasiswa',
//             mahasiswa: response[1]
//         })
//     }).catch(response => console.log(response));

// let mahasiswa = [{
//         nim: 16120012,
//         name: "rio"
//     },
//     {
//         nim: 16120057,
//         name: "kenny"
//     },
//     {
//         nim: 16120033,
//         name: "ansel"
//     }
// ];
// res.render('mahasiswa', {
//     title: 'mahasiswa',
//     mahasiswa: response
// })
// })
