
const multiply = (arr1, arr2) => {
    let arr1Rows = arr1.length,
        arr1Cols = arr1[0].length,
        arr2Rows = arr2.length,
        arr2Cols = arr2[0].length,
        arrResult = new Array(arr1Rows);

    for (let i = 0; i < arr1Rows; ++i) {
        arrResult[i] = new Array(arr2Cols);
        for (let j = 0; j < arr2Cols; ++j) {
            arrResult[i][j] = 0;
            for (let k = 0; k < arr1Cols; ++k) {
                arrResult[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return arrResult;
}

let a = [
        [3,4],
        [1,2]
    ],
    b = [
        [7,5],
        [6,4]
    ];

console.log(multiply(a, b));