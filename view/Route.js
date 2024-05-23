 const Router= require("express").Router();
 const controls= require("../controller/Rcontroller");


 Router.get("/",controls.Shanti_all);
 Router.post("/Shanticreate",controls.Shanti_create)
 Router.post("/api/contact",controls.Shanti_post)






 module.exports= Router