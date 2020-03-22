// Data Sorting

const dataSorting = (array) => {

    if (array.length == 10) {
        let smallestData = Math.min(...array),
            biggestData = Math.max(...array),
            smallToBig = (a, b) => a - b,
            bigToSmall = (a, b) => b - a;
            
        console.log("Data terkecil: " + smallestData + "\n" +
                    "Data terbesar: " + biggestData + "\n" +
                    "Ascending sort: " + array.sort(smallToBig) + "\n" +
                    "Descending sort: " + array.sort(bigToSmall));
    } else {
        console.log("Array harus berisikan 10 data.");
    }

};

let array = [6,22,34,15,2,13,26,57,42,32];

dataSorting(array);