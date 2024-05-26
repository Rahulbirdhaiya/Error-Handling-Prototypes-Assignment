function doubleUsingCallback(arr, callback) {
    return arr.map(callback);
};

let arr = [1,2,3,4,5]

const doubledArr = doubleUsingCallback(arr, (x) => x * 2);

console.log(doubledArr);