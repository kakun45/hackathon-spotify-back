// BACKEND! REST API
const express = require("express");
// Create Express app and also allow for app PORT to be optionally specified by an environment variable
const app = express();
// cors package prevents CORS errors when using client side API calls
const cors = require("cors");
// Require .env files for environment variables (keys and secrets)
require("dotenv").config();
// const FormData = require("form-data");

const quotesController = require("./controllers/quotesControllers");
const endPointController = require("./controllers/endPointController");

const port = process.env.PORT || 8080;

// Enable req.body middleware
app.use(express.json());
app.use(cors());

// this endpoint to return all quotes from db
// to use: http://localhost:8080/all-quotes
app.get("/all-quotes", quotesController.index);

// this endpoint to generate a data-file from response of External API for audio-to-text
app.get("/api-text-to-speach", endPointController.sendRequest);

app.listen(process.env.PORT || 8080, () => {
  console.log(`🚀Fire the command! Port: ${port}`);
});
