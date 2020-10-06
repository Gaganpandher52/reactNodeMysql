module.exports = app => {
  const users = require("../controllers/signUp.controller.js");

  // Create a new user
  app.post("/users", users.create);

  // Retrieve all user
  app.get("/users", users.findAll);

  // Retrieve a single user with user
  app.get("/users/:userId", users.findOne);

  // Update a user with user
  app.put("/users/:userId", users.update);

  // Delete a user with user
  app.delete("/users/:userId", users.delete);

  // Create a new user
  app.delete("/users", users.deleteAll);
};