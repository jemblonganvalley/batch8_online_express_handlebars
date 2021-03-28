// import package ke dalam file
const express = require("express");
const hbs = require("express-handlebars");
const cors = require("cors");
const app = express();
const path = require("path");

//middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//setup view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  hbs({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/components"),
    defaultLayout: "main_layout.handlebars",
  })
);

//Routing
app.get("/", (req, res) => {
  res.render("home.handlebars");
});

app.get("/about", (req, res) => {
  res.render("about.handlebars");
});

app.get("/contact", (req, res) => {
  res.render("contact.handlebars");
});

app.get("/gallery", (req, res) => {
  res.render("gallery.handlebars");
});

app.get("/login", (req, res) => {
  res.render("login.handlebars", {
    auth: true,
  });
});

//listener / menjalankan server
app.listen(3000, () => console.log("server listen port 3000"));
