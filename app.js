const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello from the server side !", app: "Natours" });
});

app.post("/", (req, res) => {
  req.send("You can post this to your endpoint...");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
