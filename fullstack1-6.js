// Decimal to Binary

const toBinary = (decimal) => { 

    let number = decimal,
        binary = "";

    while (decimal > 0) {
        binary = (decimal % 2) + binary; 
        decimal = Math.floor(decimal / 2); 
    } 

    console.log("Angka desimal: " + number + "\n" +
                "Angka biner: " + binary);

};

let decimal = 12;

toBinary(decimal);
