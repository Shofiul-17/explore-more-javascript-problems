/* function paperRequirements(book1, book2, book3){

    // Pages required per copy for each book
    const pagesPerCopyBook1 = 100;
    const pagesPerCopyBook2 = 200;
    const pagesPerCopyBook3 = 300;

    // Calculate total pages for each book
    const totalPagesBook1 = book1 * pagesPerCopyBook1;
    const totalPagesBook2 = book2 * pagesPerCopyBook2;
    const totalPagesBook3 = book3 * pagesPerCopyBook3;

    // Return the results
    return{
        totalPagesBook1,
        totalPagesBook2,
        totalPagesBook3,
    };
}

// Number of copies for each book
const book1Copies = 30;
const book2Copies = 20;
const book3Copies = 10;

// Call the function and get the results
const result = paperRequirements(book1Copies, book2Copies, book3Copies);

// Output
console.log('Total pages required for Book1:', result.totalPagesBook1);
console.log('Total pages required for Book2:', result.totalPagesBook2);
console.log('Total pages required for Book3:', result.totalPagesBook3); */


function centimeterToMeter(centimeters){

    // Convert centimeter to meters
    const meter = centimeters / 100;

    // Return meters
    return meter;
}

// Input Centimeters
const myCentimeter = 150;

// Call the function
const myMeter = centimeterToMeter(myCentimeter);

// Output
console.log(myMeter, 'Meter');



/* 
Millstone 4: Hello JavaScript
Module 17-3 What is variable? five things you need to declare a variable
Module 17-4 Variable type, Numeric, String, Boolean
Module 20-1 Module Introduction And Concept Recap
Variables in JavaScript (var, let & const) (What is variable? Screenshots)
*/

