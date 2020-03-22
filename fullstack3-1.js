/* Sebuah program memiliki fungsi untuk membaca array of numbers dan 
menjumlahkan seluruh member dari array tersebut sehingga hasilnya 
hanya berupa satu digit saja. Buatlah function untuk merealisasikan program tersebut. */

// let sumArrays = (a,b,c) => a + b + c;
// let arrays = [123, 9, 27];
// let firstResult = sumArrays(...arrays);
// let digits = firstResult.toString().split('');
// let realDigits = digits.map(Number);
// let secondResult = sumArrays(...realDigits);
// let secondDigits = secondResult.toString().split('');
// let secondRealDigits = secondDigits.map(Number);
// let thirdResult = sumArrays(...realDigits);
// console.log(thirdResult);

/*let sumArrays = (array) => {
    let firstSum = array.reduce((a, b) => a + b)
    let anotherAray = []
    let setToString = firstSum.toString()
    for (let i = 0, sum = 0; i < anotherAray.length; sum += anotherAray[i++]);
    console.log(sum);
}*/

let sumArrays = (array) => {
    let result = [array.reduce((a, b) => a+b, 0)];
    
    while (result >= 10) {
        result = [result].reduce((a, b) => a+b, 0);
    }
    console.log(result);
}

sumArrays([123,9,27]);

/*
const sum = (arr) => {
  let result = arr.reduce((a, b) => a+b, 0);
  let sum = result % 9 || 9;
  
  console.log(sum);
}

sum([123,9,27])
*/