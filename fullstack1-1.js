/* Seorang anak dimintai tolong oleh ibunya untuk membeli mie instan di minimarket. Anak tersebut dibekali oleh ibunya uang sebanyak Rp 50.000,00. Di minimarket, mie instan dijual dengan harga Rp 2.500,00. Berapakah mie instan yang didapatkan oleh anak tersebut jika minimarket tersebut sedang mengadakan promosi “setiap pembelian 4 mie instan, akan mendapatkan bonus 1 mie instan”? */

const berapaMie = (uangIbu, hargaMie) => {

    let jumlahMie = uangIbu / hargaMie,
        promo = jumlahMie / 4,
        totalMie = jumlahMie + promo;

    console.log(`Total mie instan yang didapat oleh anak tersebut adalah ${totalMie}.`);

};

berapaMie(50000,2500);