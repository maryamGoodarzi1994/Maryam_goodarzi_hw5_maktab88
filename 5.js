let arr = ["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e","x-z-p-j"]
// just copy paste it from somewhere . It's pretty difficult to me'
function combineChars (arr){
    if(!Array.isArray(arr)){
        return 'invalid input'
    }
    const output = arr.reduce((acc, cur) => {
        cur.split('-').forEach((item, index) => {
            if (acc[index] == undefined) {
                acc[index] = [];
            }
            if (acc[index].indexOf(item) === -1) {
                acc[index].push(item);
            }
        });
        return acc;
    }, []);
return output;

}
console.log(combineChars(arr))