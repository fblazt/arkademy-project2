const matrixTranspose = (array) => {
    
    let finalResult = [];
    for (let i = 0; i < array.length; i++) {
        finalResult.push([]);
    };
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            finalResult[j].push(array[i][j]);
        };
    };
    console.log(finalResult.join('\n'));
};

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

matrixTranspose(matrix);