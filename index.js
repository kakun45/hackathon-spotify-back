// BACKEND! REST API
const express = require("express");
// Create Express app and also allow for app PORT to be optionally specified by an environment variable
const app = express();
// cors package prevents CORS errors when using client side API calls
const cors = require("cors");
// Require .env files for environment variables (keys and secrets)
require("dotenv").config();
const axios = require("axios");
const quotesController = require("./controllers/quotesControllers");

const port = process.env.PORT || 8080;

// Enable req.body middleware
app.use(express.json());
app.use(cors());

// this endpoint to return all quotes from db
// to use: http://localhost:8080/all-quotes
app.get("/all-quotes", quotesController.index);

// to try external API: google audio-to-text
// const requestBody = {
//   "audio": {
//     "content": "/* Your audio */"
//   },
//   "config": {
//     "enableAutomaticPunctuation": true,
//     "encoding": "LINEAR16",
//     "languageCode": "en-US",
//     "model": "default"
//   }
// }
// app.get("https://speech.googleapis.com/v1p1beta1/speech:recognize", requestBody);

app.listen(process.env.PORT || 8080, () => {
  console.log(`🚀Fire the command! Port: ${port}`);
});
