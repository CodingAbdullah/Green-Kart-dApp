require("dotenv").config({ path: '.env' });
const express = require("express");
const mongoose = require("mongoose");
const URI = "mongodb+srv://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@cluster0.sftye.mongodb.net/" + process.env.DATABASE + "?retryWrites=true&w=majority";
const cors = require("cors");
const userRouter = require("./router/userRouter");
const vegetableRouter = require("./router/vegetableRouter");
const orderRouter = require("./router/orderRouter");

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT);
});

app.use(express.json({extended : false}));
app.use(express.urlencoded({extended : false}));

mongoose.connect(URI, { dbName: process.env.DATABASE }).then(() => console.log("Successful connection to DB")).catch(err => console.log(err));

app.use(cors());
app.use("/", userRouter);
app.use("/", orderRouter);
app.use("/", vegetableRouter);