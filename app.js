const express = require("express");
const app = express();
const parser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test").then(() => {
  console.log("mongoose connected");
});

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const userRouter = require("./router/user");
app.use(parser.json());
// app.use(parser.urlencoded());

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
