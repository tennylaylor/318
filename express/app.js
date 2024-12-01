var express = require("express");
var indexRouter = require("./routes/index.js"); // requres information from a local file in directory.
var app = express();

app.set("view", "view");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // pull things out of specific directory this one is called public.

app.use("/", indexRouter); // '/' this is for the home directory.

// the public directory will be served before the  EXPRESS app tries to resolve an any reps....
app.listen(3000, () => {
  console.log("sheeet Everybody loves me on this port");
});
