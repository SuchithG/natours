const fs = require("fs");
const express = require("express");

const app = express();

const port = 3000;

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Hello from the server side !", app: "Natours" });
// });

// app.post("/", (req, res) => {
//   req.send("You can post this to your endpoint...");
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
