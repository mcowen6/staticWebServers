const express = require("express");
const app = express();

//* Adds public folder to web server / using a static path:
app.use("/static", express.static("public"));
app.use("/static/home.html", express.static("public"));
app.use("/static/shop.html", express.static("public"));
app.use("/static/about.html", express.static("public"));
app.use("/static/contact.html", express.static("public"));

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
