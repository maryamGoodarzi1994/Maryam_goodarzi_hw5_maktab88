function addSeparators(num){
if(typeof num !== 'number'){
    return 'invalid input'
}
let numToArray = num.toString().split('');
let isNegative = false;
if(numToArray[0] === '-'){
    numToArray.splice(0,1);
    isNegative = true;
}
for(let i = numToArray.length-3; i>0; i=i-3){
numToArray.splice(i,0,',')
}
return  (isNegative)? '-'+numToArray.join('') : numToArray.join('');
}
console.log(addSeparators(-1923456700));