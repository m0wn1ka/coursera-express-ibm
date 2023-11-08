const express = require('express');
const router = express.Router();



    let books=[
        {
            "isbn":"9781593279509",
            "title":"Eloquent_JavaScript,_Third_Edition",
            
            "author":"Marijn Haverbeke",
            "review":[]
           
        },
        {
            "isbn":"9781491943533",
            "title":"Practical Modern JavaScript",
            
            "author":"Nicolás Bevacqua",
            "review":[]
            
        },
        {
            "isbn":"9781593277574",
            "title":"Understanding ECMAScript 6",
           
            "author":"Nicholas",    
            "review":[]   
         },
        {
            "isbn":"9781449365035",
            "title":"Speaking JavaScript",

            "author":"Axel Rauschmayer",
            "review":[]
            
        },
        {
            "isbn":"9781449331818",
            "title":"Learning JavaScript Design Patterns",
           
            "author":"Addy Osmani",
            "review":[]
          },        
    ]
    console.log("books printing frm books module",books.books);
router.get("/isbn/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    let filtered_books = books.filter((book) => book.isbn === isbn);
    res.send(filtered_books);
});
router.get("/title/:title",(req,res)=>{
    const title = req.params.title;
    let filtered_title = books.filter((book) => book.title==title);
    res.send(filtered_title);
});
router.get("/author/:author",(req,res)=>{
    const author = req.params.author;
    let filtered_author = books.filter((book) => book.author==author);
    res.send(filtered_author);
});

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});




// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports={router,books};
