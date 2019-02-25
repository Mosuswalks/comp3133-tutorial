const express = require('express');
const app = express();
const cors = require("cors");
const request = require("request");

quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"

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

app.listen(3030, () => {
    console.log("listening on port 3030")
});
