const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
});

module.exports = mongoose.model("users", UserSchema);
