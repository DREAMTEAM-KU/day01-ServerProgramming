const fs = require("fs");
const path = require("path");

function listUsers() {
  console.log("list user");
  let users = fs.readFileSync(__dirname + "/../db/user.json", "utf8");
  return users;
}

function addUser(user) {
  console.log("add user");
  let users = JSON.parse(
    fs.readFileSync(__dirname + "/../db/user.json", "utf8")
  );
  const key = Object.keys(user);
  users[key] = user[key];

  console.log(JSON.stringify(users));
  try {
    fs.writeFileSync(__dirname + "/../db/user.json", JSON.stringify(users));
    return users;
  } catch (err) {
    throw err;
  }
}

function deleteUser(id) {
  console.log("delete user");
  return {};
}

function getUser(id) {
  console.log("getuser");
  return {};
}

module.exports = {
  listUsers,
  addUser,
  deleteUser,
  getUser
};
