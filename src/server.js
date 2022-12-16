const express = require("express");
const app = express();

//* Adds public folder to web server / using a static path:
app.use("/static", express.static("public"));
app.use("/static/home", express.static("public/home.html"));
app.use("/static/shop", express.static("public/shop.html"));
app.use("/static/about", express.static("public/about.html"));
app.use("/static/contact", express.static("public/contact.html"));

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
