module.exports = app => {
  const user = require("../controllers/signUp.controller.js");

  // Create a new user
  app.post("/user", user.create);

  // Retrieve all user
  app.get("/user", user.findAll);

  // Retrieve a single user with user
  app.get("/user/:user", user.findOne);

  // Update a user with user
  app.put("/user/:user", user.update);

  // Delete a user with user
  app.delete("/user/:user", user.delete);

  // Create a new user
  app.delete("/user", user.deleteAll);
};