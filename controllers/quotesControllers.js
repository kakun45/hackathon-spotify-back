const knex = require("knex")(require("../knexfile"));

// query all quotes
exports.index = (_req, res) => {
  knex("quotes")
    .select("*")
    .then((rows) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(`Error retrieving quotes from db`);
    });
};
