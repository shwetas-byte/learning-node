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

note.js drawback
server bar bar refresh krna pdta hai koi bhi updation ke badd

phle node mon install krna pdta thaa jisse bar bar update nhi krna pdta haii but update ke bad node ne khud ki ek command bna dii

node --watch file_name

local host: port no. ki jghh
127.0.0.1:port no.


🔹 5 Main Types-------

| Range   | Type          | Meaning                        |
| ------- | ------------- | ------------------------------ |
| **1xx** | Informational | Request process ho rahi hai    |
| **2xx** | Success       | Request successful             |
| **3xx** | Redirection   | Aage redirect karna            |
| **4xx** | Client Error  | Client ki request mein problem |
| **5xx** | Server Error  | Server ki taraf problem        |


🔹 1xx – Informational
| Code | Meaning             | Hinglish                             |
| ---- | ------------------- | ------------------------------------ |
| 100  | Continue            | Request ka next part bhej sakte hain |
| 101  | Switching Protocols | Protocol change ho raha hai          |
| 103  | Early Hints         | Preliminary response information     |


🔹 2xx – Success
| Code | Meaning         | Hinglish                               |
| ---- | --------------- | -------------------------------------- |
| 200  | OK              | Request successful                     |
| 201  | Created         | Resource create ho gaya                |
| 202  | Accepted        | Request accept hui, processing pending |
| 204  | No Content      | Success, but response body nahi hai    |
| 206  | Partial Content | Data ka partial part mila              |



🔹 3xx – Redirection
| Code | Meaning            | Hinglish                        |
| ---- | ------------------ | ------------------------------- |
| 300  | Multiple Choices   | Multiple options available      |
| 301  | Moved Permanently  | URL permanently change          |
| 302  | Found              | Temporary redirect              |
| 303  | See Other          | Dusre URL par result dekho      |
| 304  | Not Modified       | Resource mein change nahi hua   |
| 307  | Temporary Redirect | Temporary redirect, method same |
| 308  | Permanent Redirect | Permanent redirect, method same |



🔹 4xx – Client Error
| Code | Meaning                | Hinglish                                       |
| ---- | ---------------------- | ---------------------------------------------- |
| 400  | Bad Request            | Request galat hai                              |
| 401  | Unauthorized           | Authentication required                        |
| 402  | Payment Required       | Payment-related status                         |
| 403  | Forbidden              | Access allowed nahi                            |
| 404  | Not Found              | Resource nahi mila                             |
| 405  | Method Not Allowed     | HTTP method allowed nahi                       |
| 406  | Not Acceptable         | Acceptable response nahi mil sakta             |
| 408  | Request Timeout        | Request mein bahut time laga                   |
| 409  | Conflict               | Request mein conflict                          |
| 410  | Gone                   | Resource permanently unavailable               |
| 413  | Content Too Large      | Request bahut badi hai                         |
| 415  | Unsupported Media Type | Data format supported nahi                     |
| 422  | Unprocessable Content  | Request samajh aayi, par process nahi ho sakti |
| 429  | Too Many Requests      | Bahut zyada requests                           |


🔹 5xx – Server Error
| Code | Meaning                    | Hinglish                               |
| ---- | -------------------------- | -------------------------------------- |
| 500  | Internal Server Error      | Server ke andar error                  |
| 501  | Not Implemented            | Functionality supported nahi           |
| 502  | Bad Gateway                | Invalid gateway response               |
| 503  | Service Unavailable        | Server temporarily unavailable         |
| 504  | Gateway Timeout            | Gateway ko time par response nahi mila |
| 505  | HTTP Version Not Supported | HTTP version supported nahi            |
| 507  | Insufficient Storage       | Server ke paas storage insufficient    |
| 508  | Loop Detected              | Infinite loop detect hua               |




HTTP Status Codes ke Types:--------

| Code    | Meaning               | Hinglish Explanation                  |
| ------- | --------------------- | ------------------------------------- |
| **200** | OK                    | Request successfully complete ho gayi |
| **201** | Created               | New resource create ho gaya           |
| **301** | Moved Permanently     | URL permanently change ho gaya        |
| **302** | Found                 | Temporary redirect                    |
| **400** | Bad Request           | Request galat format mein hai         |
| **401** | Unauthorized          | Authentication required               |
| **403** | Forbidden             | Access allowed nahi hai               |
| **404** | Not Found             | Requested page/resource nahi mila     |
| **405** | Method Not Allowed    | HTTP method allowed nahi hai          |
| **500** | Internal Server Error | Server ke andar error                 |
| **502** | Bad Gateway           | Gateway ko invalid response mila      |
| **503** | Service Unavailable   | Server temporarily available nahi hai |


// package jsonn install
npm init --- sare ko enter enter krna pdega
npm init-y  ----jb direct package.json install krna ho


// express -- frame work of node js
used to handle apii and create by default server