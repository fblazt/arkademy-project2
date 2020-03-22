let arkademy = [
    {
        name: "Tatas",
        company: "Arkademy",
        job: "Trainer",
        status: "Single",
        city: "Jogja"
    },
    {
        name: "Pratama",
        company: "Emago",
        job: "Trainer",
        status: "Single",
        city: "Jakarta"
    }
];

let newArkademy = arkademy;

newArkademy = [
    {
        ...arkademy[0],
        status: "Married",
        city: "Jakarta"
    },
    {
        ...arkademy[1],
        company: "Arkademy",
        city: "Jogja"
    }
];

console.log(newArkademy);