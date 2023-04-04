const express = require("express");
const router = express.Router();
// import {readData} from "./controllers/...";

router.get("/test", (_req, res) => {
// const data = readData();
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json("file is not found");
  }
});

// Export this module
module.exports = router;
