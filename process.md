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
each logged in user can add their review (review=theirmail+review)
### status
now those users who inserted a reviw for a specific book,they only can edit it 
```
to prvent overloading only editing opeiton is enable for once
```
## postman 
```
127.0.0.1:3003/users/register/?email=c@gmail.com&password=1234
127.0.0.1:3003/users/login?email=c@gmail.com&password=1234
127.0.0.1:3003/users/review/?isbn=9781593279509&review=review1&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQifSwiaWF0IjoxNjk5NDEwNDQ0LCJleHAiOjE2OTk0MTQwNDR9.n63fASWaukNCN-m7XP68JJL_vDqcm3GzHNp4JdKLFSM
127.0.0.1:3003/users/edit_review/?isbn=9781593279509&new_review=review1edited&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQifSwiaWF0IjoxNjk5NDIwNTU3LCJleHAiOjE2OTk0MjQxNTd9.jW4Y42-t7130Xa6O5t8i9oSctsDSsQxwOQYg4c7xMMw
```
