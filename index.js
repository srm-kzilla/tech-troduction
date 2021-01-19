let express = require("express");

let app = express(); //Express Application

app.use(express.json()); //Allows Express to parse request body

let globalArray = [
  {
    title: "My First Task",
    body: "Buy milk",
  },
];

app.get("/", function (req, res) {
  res.json(globalArray);
});

app.post("/", function (req, res) {
  let newData = req.body;
  globalArray.push(newData);
  res.send("Added");
});

app.delete("/", function (req, res) {
  let title = req.body.title;
  let newArray = [];
  for (let i = 0; i < globalArray.length; i++) {
    if (globalArray[i].title !== title) {
      newArray.push(globalArray[i]);
    }
  }
  globalArray = newArray;
  res.send("Deleted");
});

app.listen(8000, function () {
  console.log("Server started on Port 8000");
});
