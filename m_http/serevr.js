const http = require("http");
http.createServer((req,res)=>{
    // res.write("<h1> Helo tjis is my 5050 port serevr </h1>");
    // res.end();
    if (req.url==='/'){
        res.write("Home Page")
    }
    else if(req.url==='/contact'){
        res.write("Contact page")
    }
    else if(req.url==='/about'){
        res.write("About page")
    }
    res.end()

}).listen(5050);