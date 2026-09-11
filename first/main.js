const fun = require('./first')
const multi = require('./module/multi')
const newfile= require("../newfile")
console.log("Main file")

// fun.sum()  //ye jb normal object export kraa
// fun.sub()

fun.f1()    //ye jb key bnake export kra hogaaa
fun.f2()
multi()
newfile()
