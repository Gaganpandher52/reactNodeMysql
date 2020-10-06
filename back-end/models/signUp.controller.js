const sql = require("./db.js");

const user = function(user) {
  this.email = customer.email;
  this.name = customer.name;
};

user.create = (newUser, result) => {
  sql.query("INSERT INTO customers SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};