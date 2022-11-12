const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/UserDatabase";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
    console.log("Connected to DB");
});

app.use(express.json());

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(8089, () => {
    console.log("Server started succesfully");
});