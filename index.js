// BACKEND! REST API
const express = require("express");
// Create Express app and also allow for app PORT to be optionally specified by an environment variable
const app = express();
// cors package prevents CORS errors when using client side API calls
const cors = require("cors");
// Require .env files for environment variables (keys and secrets)
require("dotenv").config();

const port = process.env.PORT || 8080;

// Enable req.body middleware
app.use(express.json());
app.use(cors());

let quotes = [
  { 1: "lime passes slowly" },
  { 2: "olive oil is bad for your gut" },
  { 3: "butter food better you" },
  { 4: "amazing day" },
  { 5: "apples are the best food ever" },
];

app.get("/process-text", function (req, res) {
  res.status(200).json(quotes);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`🚀Fire the command! Port: ${port}`);
});
