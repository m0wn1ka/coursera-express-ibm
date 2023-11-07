const express=require('express')
const app=express()
const {router,books}=require('./routes/books')
app.get("/",(req,res)=>{
    res.end("hi there");
})
app.use("/books",router);
app.use("/users",require('./routes/users'));
app.listen(3003,(req,res)=>{
    console.log("listening at port 3003");
});