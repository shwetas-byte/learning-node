const http=require('http')
http.createServer((req,res)=>{
    if (req.url==='/'){
        res.write("Home page")
    }
    else if(req.url==='/contact'){
        res.write("Contact page")
    }
    else if (req.url==='/about'){
        res.write("About page")
    }
    res.end()

}).listen(5050)