npm init
npm install express --save
```
const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.end("hi there");
})
app.listen(3003,(req,res)=>{
    console.log("listening at port 3003");
});
```
node index.js
## routes
create routes folder
have a books.js file in routes folder
paste books={}
``
## present status:
```
a index js
a user can register,login get their jwt token
can get requsts based on email isbn etc
```
