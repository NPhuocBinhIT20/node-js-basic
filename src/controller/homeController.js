import connection from "../configs/connnectDB";

let getHomepage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    results.map((row) => {
      data.push({
        id: row.id,
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
        address: row.address,
      });
    });
    return res.render("./index.ejs", {dataUsers: data});
  });
};

module.exports = {
  getHomepage,
};
