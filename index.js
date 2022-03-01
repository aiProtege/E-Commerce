const express = require("express");
const app = express ();
const mongoose = require("mongoose");

mongoose.connect("localhost:27017").then(() => cons)

app.listen(5000, ()=>{
    console.log("Backend server is running");
});
