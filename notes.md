Day1:----10/9/26
client side -- sends request //browser --- html,css,js,reactjs
server side --sends response  //backend  --- node,express,django..

node js is a runtime environment whuch helps to run the js outside the browser ie cmd,terminall

drawback of js:
1. operating system to operate nhi kr payenge only browser pe work krega means file create nhi kr payenge etc bhut si cheeje
2. database connect nhi hotaa


js modules are of two types:'
1. Common js modules:
isme import { readFile } from 'fs'
import ke liye --- require()
export ke liye --- module.exports()

2. es js modules
import
export

command for runnind js outside browser:
node file_name --- extensionn likho ya nhi likho by default js hi extension support krta h

for multiple eport we do object export and import bhi obj hi hoga

../ jb ek directory bhr ana hoga

./file_name/file_name  jb kisi folder ke andr jana hoga

Common js module -- node me run hota haii
es modules--- import,export
bulitin modules -- fs(file system),http,url   

ek bar me ya toh es mosule work kr skte hai ya toh Commonjs module

file system module--
1. jha bhi use krege vha use hmesa import krna pdega
2. const fs =require('fs') --- aise import krege or ek variable me store kra lenege
3.file system object return krega
4. to use krege tb fs.write()  //bhut sare function hai fs ke andrr

for example===
fs.js is a file
uske andr do function hai
writefile()
readfile()
 export krte vkt = {writefile,readFile}
 import krte vkt 
const fs = require('fs')
fs.readFile()