const express = require('express');
const cors = require("cors");
const mongoose=require('mongoose');

const cookieParser= require('cookie-parser');
const authRoutes =require("./Routes/AuthRoutes");
const app = express();

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true
}));


app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);


mongoose.connect("mongodb://localhost:27017/jwt",{
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(()=>{
  console.log("DB connection successfull");
  app.listen(4000,()=>{
    console.log("server started on port:4000");
});
}).catch(err=>{
    console.log("Connection failed",err);
})











