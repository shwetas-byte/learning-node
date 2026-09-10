function sum(){
    console.log("Sum",3+4)
}

function sub(){
    console.log("Sub",3-4)
}


// module.exports= sum  // for single export

// module.exports={sum,sub}

module.exports={f1:sum,f2:sub}   //key bnake bhi export kr skte hasi but key use krna hoga
