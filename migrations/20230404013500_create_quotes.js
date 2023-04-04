/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("quotes", (table) => {
      table.increments("id").primary();
      //  increase the maximum length of the 'text_snipet' column
      table.string("text_snipet", 500).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .then(function () {
      console.log("Table created successfully.");
    })
    .catch(function (error) {
      console.error("Error creating table:", error);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("quotes");
};
