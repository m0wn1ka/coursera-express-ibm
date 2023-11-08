const express = require('express');
const jwt = require('jsonwebtoken');
let {x,books}=require('./books');

const router = express.Router();
let users=[
    {
        "email":"admin@gmail.com",
        "pwd":"root"
    }
];
router.get("/",(req,res)=>{
    console.log("books array printing on get request ot users ",books)
    res.send("users get route");
})
router.post("/register",(req,res)=>{
    console.log("boosk in register just to test",books)
    console.log("a post requsest to register");
    let email=req.query.email;
    let password=req.query.password;
    let existingUser = users.find(user => user.email === email);
    if(existingUser){
        res.status(200).send("u are registed already,please login");
        return;
    }
    
    if(email!=null && password!=null ){
        users.push({"email":email,"password":password});
        console.log(users)
        res.status(200).send("user registerd successfully");
        return;
    }
    
    res.status(200).send("invalid user and password");
    return;
});

router.post("/login",(req,res)=>{
    let email=req.query.email;
    let password=req.query.password;
    let existingUserMail = users.find(user => user.email === email);
    if(!existingUserMail){
        res.status(200).send("invalid login1");
        return;
    }
    let pass=existingUserMail.password;
    console.log("pass is ",pass);
    if(pass!=password){
        res.status(200).send("invalid login2");
        return;
    }
    //existing user mail here referes to the existeing user
    let access_token=jwt.sign(
    {
        data:existingUserMail
    }
    ,
    "jwt_secret",
    { expiresIn: 60 * 60 }
    )
    res.setHeader('Authorization', `Bearer ${access_token}`);
    console.log("access_token is ",access_token);
    // req.access_token=access_token;
    // console.log("req.access token at end of  login post call  ",req.access_token);
    // console.log("req in just befoer of login response sending",req);

    res.status(200).send("logging succesfully");
    return;
})
const auth_middle_ware=(req,res,next)=>{
    // console.log("req is  in middlwre",req);
    // console.log("auth token in auth_midldle_waer is ",req.access_token);
    let token_got =req.header('Authorization');
    console.log("token in auth_middleware",token_got);
    // const token_got = token.split(' ')[1];
    jwt.verify(
        token_got,
        "jwt_secret",
        (err,user)=>{
            if(!err){
                req.user=user;
                // console.log("rewq.user  is ",req.user);
                next();
            }
            else{
                console.log("eror is ",err)
                return res.status(200).json({message: "User not authenticated"})
            }
        }
    )
   
}

router.use('/review',auth_middle_ware);
router.post('/review/',(req,res)=>{
    console.log("req in post of review",req.user.data.email);
    console.log("req.revew in review fun",req.query.review);
    // console.log("access token is in post request of review",req.access_token);
    // console.log("req.user.data.email in review",req.user.data.email)
    let email_of_review=req.user.data.email;
    let book_isbn=req.query.isbn;
   let review="*".concat(req.query.review);
    review=email_of_review.concat(review);
    console.log("req.review is ",review)
    let modified_book = books.filter(book => book.isbn === book_isbn);
    console.log(modified_book,"is modified book before")
    modified_book[0]=modified_book[0].review.push(review);
    console.log(modified_book,"is modified book after")
    // console.log("post request to review email_of_review ",email_of_review,"book_isbn",book_isbn,"reviw",review);
    let index = books.findIndex(book => book.isbn === modified_book[0].isbn);
    console.log("index is ",index)
    if(index!=-1){
        books[index] = modified_book[0];
    }
    else{
        console.log(`Book with ISBN ${modified_book.isbn} not found`);
    }
    
   
     console.log("books after modificataion ",books)
    res.status(200).send("review adtion function");
    return;
});


module.exports=router;