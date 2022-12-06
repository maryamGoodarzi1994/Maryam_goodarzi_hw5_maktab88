function returnArrayDepth(arr){
    if (!Array.isArray(arr)){
        return 'invalid input'
    }
    let depth = 0;
    let arrOfDepth = [];
   let stringifiedArr = JSON.stringify(arr);
   stringifiedArr.split('').forEach(function(item){
    if(item === '['){
        depth+=1
    }
    else if (item === ']'){
        depth-=1
    }
    arrOfDepth.push(depth)

    
   })
   return(Math.max(...arrOfDepth))
}
console.log(returnArrayDepth([[[[]],9,[]],[]]))
