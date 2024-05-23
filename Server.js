const express=require("express");
require("dotenv").config();
const mongoose=require("mongoose");
const routes=require("./view/Route");
const CORS= require("cors")
const bodyparser=require("body-parser")




//connection establishment
mongoose.connect(process.env.DB_connect,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>
{
    console.log("connected to database")
}).catch((err)=>{
    console.log("error connecting to database  :"+err.message)
})
const app=express();
app.use(express.json());
app.use(bodyparser.json())
app.use(CORS())
app.use("/", routes)




//porting
const PORT= process.env.PORT || 1001;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})