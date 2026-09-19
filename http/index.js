// http - for creating server to run backend inbuilt module hai
// const { log } = require('console')
let http = require('http')

//server create
//syntax-- http.createServer((req,res)=>{})
// where req -- request
// res-- response
// dono in built object hai and request client side se ati hai phir response server side se jata hai 
// req,res isi format me likhayega

// let server=http.createServer((req,res)=>{
//     res.write("Serevr created")   //drawback h ki ye continuously response bhejta hai or ye infinite chlta hai jisse hme res.end likhna pdta hai
//     res.write("Server running.....")
//     res.write(" running.....")
//     res.write("Server .....")
//     res.write("Server .....")
//     res.write("Server .....")
//     res.write("Server .....")
//     res.write("Server .....") 
//     res.end("Ending the response")  
// })

// // listen the server -- port no. create kra re hai
// // syntax-- listen(portno,call back function)
// server.listen(4040,()=>console.log("Serevr running on PORT 4040"))

// url handling---
let s=http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.write("<h1> Home Page </h1>")
        res.end()
    }
    else if(req.url=='/contact'){
        res.write("<h1> Contact Page </h1>")
        res.end()

    }
    else if(req.url=='/about'){
        res.write("<h1> About Page </h1>")
        res.end()

    }
    else{
        res.write("Not Matched")
        res.end()

    }
})
s.listen(5050,()=>console.log("Serevr running on port 5050"))