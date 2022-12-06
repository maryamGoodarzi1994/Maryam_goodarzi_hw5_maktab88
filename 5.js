let arr = ["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e","x-z-p-j"]

function combineChars (arr){
    if(!Array.isArray(arr)){
        return 'invalid input'
    }
// let arr2= arr.join(',').split('').filter(item => item !== '-').join('').split(',');
let a = new Set (arr)
return a.add(6)
}
console.log(combineChars(arr))