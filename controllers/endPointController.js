const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const data = new FormData();
data.append("sound", fs.createReadStream("./data/unsolvedM.mp3"));

exports.sendRequest = (req, res) => {
  const options = {
    method: "POST",
    url: "https://speech-recognition-english1.p.rapidapi.com/api/asr",
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": "speech-recognition-english1.p.rapidapi.com",
      ...data.getHeaders(),
    },
    data: data,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      fs.writeFileSync("./data/api-text.json", JSON.stringify(response.data));
      console.log("File is successfully made");
      res.json(response.data);
    })
    .catch(function (error) {
      console.error("Error writing to file", error);
      res.status(500).send("Error sendind response");
    });
};
