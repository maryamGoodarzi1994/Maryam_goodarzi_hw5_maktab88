// function flattenArrays(arr) {
//     if (!Array.isArray(arr)) {
//       return "invalid input";
//     }
//   let flatArr = [];
//     return arr.map(
//       function( curr) {
//         console.log(curr)
//         return flatArr.concat(Array.isArray(curr) ? flattenArrays(curr) : curr)
//     }
//     );
//   }
// console.log(flattenArrays(["a",[false]]));

function flattenArrays(arr) {
    if (!Array.isArray(arr)) {
      return "invalid input";
    }
  
    return arr.reduce(
      (acc, curr) => Array.isArray(curr) ? acc.concat( flattenArrays(curr) ): acc.concat(curr),
      []
    );
  }
console.log(flattenArrays([["a",[false,[]]], [2, 3], ["hi", "", "b"], [true, 2, 5, NaN, {}]]));