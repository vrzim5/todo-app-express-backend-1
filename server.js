const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Connected to MongoDB...`);
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
