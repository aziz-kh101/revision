const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/", async (req, res) => {
  //   res.json(await User.find({}));
  res.render("index", { users: await User.find() });
});

router.post("/", async (req, res) => {
  // const usera = new User(req.body.user)
  // await usera.save()
  const user = await User.create(req.body.user);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const { user } = req.body; // const user = req.body.user
  const id = req.params.id;

  res.json(await User.findByIdAndUpdate(id, user));
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  res.json(await User.findByIdAndDelete(id));
});

module.exports = router;
