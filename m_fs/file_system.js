const fs=require('fs');
//writefile
// fs.writeFileSync('fs.txt','first file is created');
// fs.writeFileSync('fs.cpp','cpp file is created')
console.log('file created');
//readfile
// fs.readFileSync('fs.txt','utf-8')
console.log('file is readed');
// appendfile
// fs.appendFileSync("fs.txt",'the file text is updated with the help of appendfile');
// console.log('file is appended');
// delete file
// fs.unlinkSync('fs.txt')
// console.log("file is deleted");
// crete folder
fs.mkdirSync("New folder")


