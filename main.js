const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const { selectUser, addDetails } = require("./user");

app.get("/user", async (req, res) => {
  const list = await select();
  //const list1 = req.query;
  res.json(list);
  //res.json({ message: "success" });
});

app.post("/add-details", async (req, res) => {
  const list = req.body;
  const list1 = await addDetails(list);
  res.json(list1);
  res.json({ message: "record add" });
});

app.listen(4000, () => {
  console.log("server started");
});
