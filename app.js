const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/docRoutes");
const app = express();

// const date = new Date();
// console.log(date.toISOString());

mongoose.connect("mongodb://localhost:27017/DoctorDB")
.then(()=>{ console.log("Conneted to DB")})
.catch((error)=>{
    console.log(error)
})


app.use("/dr",router)
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${PORT}`)
})