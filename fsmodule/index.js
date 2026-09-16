let fs = require('fs')
// write file
// fs.write syntax --- fs.writefile('filename','text you want to write',callback function)
// it overwrite the existing file if we have file
//if we dont have file it will create file and add text in it


// fs.writeFile('firstfile.txt','This is new file created by fs module',(er)=>{
//     if(er){
//         console.log("File not created",er);
        
//     }
//     else{
//         console.log("File created...");
        
//     }
// })

// fs.writeFile('firstfile.txt','Hello from node js',(er)=>{
//     if(er){
//         console.log("File not created",er);
        
//     }
//     else{
//         console.log("Success");
        
//     }
// })


// read file -- help in reading file
// syntax-- fs.readFile('filename','utf-8',(e,data)={})  ---- in this call bacxk function will help in reading data and error handling
// we are writin utf-8 because without it data comes in encoded form with the help of this we are able to get the data in redable form
fs.readFile("firstfile.txt",'utf-8',(er,data)=>{
    if(er){
        console.log("Error",er);
        
    }
    else{
        console.log("File readed",data);
        
    }
})


//appendfile -- help in adding text to existing file also makes the new file 
// syntax--- fs.appendfile('filename','text',callbackfunction)
// fs.appendFile('firstdile.txt',"another text",(er)=>{
//     if(er){
//         console.log("Error",er);
        
//     }
//     else{
//         console.log("success");
        
//     }
// })


