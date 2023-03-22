let test1 = [6,5,4,3,2,1];
let test2 = [3,8,2,0,-4];

const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let sort = array.splice(j,1)
                array.splice(j + 1, 0, sort[0]);
            }
        }
        console.log(array);
    }
    return array;
}
// console.log(bubbleSort(test1));
// console.log(bubbleSort(test2));

const bubbleSortOpt = (array) => {
    let isSwapped = false;

    for(let i = 0; i < array.length; i++) {
        isSwapped = false;
        for(let j = 0; j < array.length; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSwapped = true;
            }
        }
        console.log(array);
        if(!isSwapped){
            break;
        }
    }
    return array;
}

console.log(bubbleSortOpt(test1))
