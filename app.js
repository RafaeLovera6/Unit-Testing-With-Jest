const fromEuroToDollar = function(valueInEuro) {
    if ("number" != typeof(valueInEuro)) {
        return NaN
    }
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

 const fromDollarToYen = function(valueInDollar) {
   let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    return Math.round(100 * valueInYen) / 100;
}

 const fromYenToPound = function(valueInYen) {
     let valueInEuro = valueInYen / 127.9;
     let valueInPound = valueInEuro * 0.8;
     return Math.round(100 * valueInPound) / 100;
 };

// this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };