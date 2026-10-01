const fs= require('fs');
fs.writeFileSync('studentdata.txt','Student file \n');
console.log('file created');
fs.appendFileSync('studentdata.txt','Name : Shweta')
fs.appendFileSync('studentdata.txt','Class: 12th \n')
fs.appendFileSync('studentdata.txt','Subject: Maths \n')
fs.appendFileSync('studentdata.txt','Attendance: Present \n')
fs.appendFileSync('studentdata.txt','Marks: 90 \n')
