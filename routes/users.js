const express = require("express");

const { listUsers, addUser, deleteUser, getUser } = require("../logic/user");

const router = express.Router();

router.get("/listUsers", (req, res) => {
  const users = listUsers();
  res.send(JSON.stringify(users));
});

router.post("/addUser", (req, res) => {
  const user = req.body;

  const updatedUsers = addUser(user);
  res.send(JSON.stringify(updatedUsers));
});

router.delete("/deleteUser", (req, res) => {
  const user = {};

  const updatedUsers = deleteUser(user);
  res.send(JSON.stringify());
});

router.get("/:id", (req, res) => {
  const user = getUser(req.params.id);
  res.send(JSON.stringify(user));
});

module.exports = router;
