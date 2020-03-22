/* Diketahui sebuah pohon imajinatif yang tumbuh di sebuah taman. Pohon tersebut hanya tumbuh sepanjang 1 m saat musim gugur dan 2 kali lipat tinggi pohon tersebut saat musim semi. Buatlah program yang menentukan tinggi pohon tersebut setelah Y tahun dengan tinggi awal X m. */

const treeHeight = (x, y) => {
    
    let initialHeight = x,
        finalHeight = '';

    if (x <= 1) {
        console.log("Tinggi awal pohon harus lebih dari 0.");
    } else if (y <= 1) {
        console.log("Lama tahun harus lebih dari 0.");
    } else {
        for (let index = 0; index < y; index++) {
            x *= 2;
            x += 1;
            finalHeight = x;
        }
    }
    console.log(`Jika tinggi awal pohon ${initialHeight} dan pohon tersebut tumbuh selama ${y} tahun, maka tinggi pohon tersebut di penghujung tahun adalah ${finalHeight}.`);
};

treeHeight(4,2);