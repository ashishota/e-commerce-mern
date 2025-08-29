const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

// create a database connection -> u can also
// create a separate file for this and then import/use that file
mongoose
  .connect("mongodb+srv://ashishota:ashis@cluster0.tb8qvv3.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const App = express();
const PORT = process.env.PORT || 5000;

App.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

App.use(cookieParser());
App.use(express.json());
App.use("/api/auth", authRouter);

App.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
