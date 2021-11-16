console.log("This is Index.js file");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports = average;

// module.export = {
//     avg : average,
//     name : "Muhammad Naeem Abbas",
//     age : 23,
//     edu : "BS-IT",
// }

module.exports.name = "Muhammad Naeem Abbas";