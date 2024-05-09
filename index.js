require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Hello " + process.env.NAME });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log("Server Running");
});
