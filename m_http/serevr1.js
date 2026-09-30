const http=require('http');
http.createServer((req,res)=>{
    // res.write("Serevr running")
    // res.end()
    if(req.url==='/'){
        res.write("Home Page")
    }
    else if (req.url==='/about'){
        res.write("About page")
    }
    else if (req.url==='/course'){
        res.write("Course page")
    }
    res.end()
}).listen(4040)