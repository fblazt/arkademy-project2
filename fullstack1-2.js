/*let segitiga = (berapa) => {
    switch(berapa) {
        case 1:
            console.log("2");
            break;
        case 2:
            console.log("2");
            console.log("2 3");
            break;
        case 3:
            console.log("2");
            console.log("2 3");
            console.log("2 3 5");
            break;
        case 4:
            console.log("2");
            console.log("2 3");
            console.log("2 3 5");
            console.log("2 3 5 7");
            break;
        case 5:
            console.log("2");
            console.log("2 3");
            console.log("2 3 5");
            console.log("2 3 5 7");
            console.log("2 3 5 7 11");
            break;
        case 6:
            console.log("2");
            console.log("2 3");
            console.log("2 3 5");
            console.log("2 3 5 7");
            console.log("2 3 5 7 11");
            console.log("2 3 5 7 11 13");
            break;
        case 7:
            console.log("2");
            console.log("2 3");
            console.log("2 3 5");
            console.log("2 3 5 7");
            console.log("2 3 5 7 11");
            console.log("2 3 5 7 11 13");
            console.log("2 3 5 7 11 13 17");
            break;
        case 8:
            console.log("2");
            console.log("2 3");
            console.log("2 3 5");
            console.log("2 3 5 7");
            console.log("2 3 5 7 11");
            console.log("2 3 5 7 11 13");
            console.log("2 3 5 7 11 13 17");
            console.log("2 3 5 7 11 13 17 19");
            break;
        case 9:
            console.log("2");
            console.log("2 3");
            console.log("2 3 5");
            console.log("2 3 5 7");
            console.log("2 3 5 7 11");
            console.log("2 3 5 7 11 13");
            console.log("2 3 5 7 11 13 17");
            console.log("2 3 5 7 11 13 17 19");
            break;
        default:
            console.log("anak baru ");
    }
}

segitiga(7);*/

/*
let primeNumber = (insertNumber)=> {
    let primeNumber1 = [],
        primeNumber2 = [];

    for (let index=0; index <= insertNumber; index++) {
        primeNumber2.push(true);
    };
    for (let index=2; index <= insertNumber; index++) {
        if (primeNumber2[index]) {
            primeNumber1.push(index);
            for (let jindex=1; index*jindex <= insertNumber; jindex++) {
                primeNumber2[index*jindex] = false;
            };
        };
    };
    return primeNumber1;
}

console.log(primeNumber(50));
*/

/*
function generatePyramid(totalNumberofRows) {
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}



generatePyramid(6);
*/

// function generatePyramid(totalNumberofRows) {
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
//         console.log(output);
//         output = '';
//     }

//     let primeNumber = (x)=> {
//         let primeNumber1 = [],
//             primeNumber2 = [];
    
//         for (let index=0; index <= insertNumber; index++) {
//             primeNumber2.push(true);
//         };
//         for (let index=2; index <= insertNumber; index++) {
//             if (primeNumber2[index]) {
//                 primeNumber1.push(index);
//                 for (let jindex=1; index*jindex <= insertNumber; jindex++) {
//                     primeNumber2[index*jindex] = false;
//                 };
//             };
//         };
//         return primeNumber1;
//     }
// }

var primeNumber = (insertNumber)=> {
    let primeNumber1 = [],
        primeNumber2 = [];

    for (let i=0; i <= insertNumber; i++) {
        primeNumber2.push(true);
    };
    for (let i=2; i <= insertNumber; i++) {
        if (primeNumber2[i]) {
            primeNumber1.push(i);
            for (let j=1; i*j <= insertNumber; j++) {
                primeNumber2[i*j] = true;
            };
        };
    };
    return primeNumber1;
}
    console.log(primeNumber(11));
    
// let triangle = (panjang) => {
//     for(let i = 0; i < panjang; i++){
//         let tr = '';
//     for(let u = 0; u <= i; u++){
//         tr = tr + primeNumber(50)[u] + ' ';
//     };
//         console.log(tr);
//     };
// }

// triangle(30);
