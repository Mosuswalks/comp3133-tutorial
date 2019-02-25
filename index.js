const express = require('express');
const app = express();
const cors = require("cors");
const request = require("request");

quoteUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
const PORT = process.env.PORT || 3030;


// WARNING: YOU SHOULD CONFIGURE CORS TO NOT ALLOW ACCESS UNLESS SPECIFIED.
app.get("/quote", cors(),(req, res) =>{
    
    return new Promise((resolve, reject) =>{
        request.get(quoteUrl,(err,res,body)=>{
            resolve(JSON.parse(body))
            if(err){
                reject(err)
            }
        })
    }).then(results => res.send(results)).catch(err => console.error(err))
    
});

app.listen(PORT, () => {
    console.log("listening on port 3030")
});
