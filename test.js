// import the function sum from the app.js file


// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
     expect(fromEuroToDollar("lol")).toBe(NaN); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("test amount should equal USD * 127.9", function(){
    //import the function from app.js
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.04); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("test amount should equal USD * 127.9", function(){
    //import the function from app.js
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.02); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
     expect(fromYenToPound(1003.5)).toBe(6.28); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})