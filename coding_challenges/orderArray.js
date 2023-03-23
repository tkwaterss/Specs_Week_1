let testArray = ["C", "D", "E", "F", "G", "Z", "V", "L"];
let testOrder = [3, -1, 9, 0, 4, 1, -5, 2];

let testArr = ["C", "D", "E", "F", "G"];
let testIndex = [3, 5, 4, 1, 2];

const orderArray = (array, index) => {
  let arrObj = [];
  for (let i = 0; i < array.length; i++) {
    arrObj.push({ letter: array[i], index: index[i] });
  }

  arrObj.sort((first, second) => {
    return first.index - second.index;
  });

  let finalArr = [];
  arrObj.forEach((obj) => {
    finalArr.push(obj.letter);
  });
  console.log(arrObj);
  return finalArr;
};

console.log(orderArray(testArray, testOrder));

// const reorder = (array, order) => {
//   for (let i = 0, l = order.length; i < l; i += 1) {
//     if (order[i] !== i) {
//       const orderIndex = order[i];
//       order[i] = order[orderIndex];
//       order[orderIndex] = orderIndex;
//       [array[i], array[orderIndex]] = [array[orderIndex], array[i]];
//     }
//   }
//   return array;
// };

//   const reorder = (arr, order) => {
//     const res = []
//     order.forEach((i) => {
//       res.push(arr[i])
//     })
//     return res
//   }

// console.log(reorder(testArr, testIndex));
