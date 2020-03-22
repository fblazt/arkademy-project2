// Aplikasi perpustakaan

let bookList = [
    {
        keyTitle: 'Dilan 1990',
        author: 'sp y',
        status: 'Available'
    },
    {
        keyTitle: 'Lumba-lumba lapar',
        author: 'Radit',
        status: 'Coba lagi'
    },
    {
        keyTitle: 'Laskar Pelangi',
        author: 'Giring Nidji',
        status: 'Available'
    }
];

//Menampilkan status buku
// let checkBook = (bookTitle) => {
//     let result = bookList.reduce((a, o) => (o.status && a.push(o.keyTitle), a), [])
    
//     console.log(result)
// }

// checkBook('Available');

// List buku yang tersedia untuk di pinjam

let availableBooks = bookList.filter((item) => {
    // return item.status == "Available";
    // if (item.status == "Available") {
    //     return bookList.keyTitle;
    // }
    while (item.status == "Available") {
        return bookList.map(x => x.keyTitles)
    }
})


console.log(availableBooks);

