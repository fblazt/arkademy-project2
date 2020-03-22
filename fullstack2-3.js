const statistic = (array) => {

    // Mean
    let arraySum = array.reduce((a, b) => a+b, 0),
        mean = Math.round(arraySum / array.length);
    
    // Median
    let mid = Math.floor(array.length / 2),
        nums = [...array].sort((a, b) => a -b),
        median = array.length % 2 !== 0 ? nums[mid] : (nums[mid -1] + nums[mid]) / 2;

    // Modus
    let mf = 1,
        m = 0,
        modus;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                m++;
                if (mf<m) {
                    mf=m;
                    modus = array[i];
                }
            }
        }
        m = 0;
    }
    console.log(mean, median, modus)
}

let array = [1,2,2,3,3,3,4,4,4,4];

statistic(array);