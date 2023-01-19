const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", false);

const { HOST_API } = process.env;

mongoose
  .connect(HOST_API)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
