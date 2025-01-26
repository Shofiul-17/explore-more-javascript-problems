// const num = [45, 65, 67, 98];

/* const shoppingCart = [
    {name: 'Shoe', price: 1200},
    {name: 'Shirt', price: 2200},
    {name: 'Pant', price: 3700},
    {name: 'Belt', price: 600}
]

function totalCost(products){
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        console.log(product);
        

        // const index = i;
        // const product = products[index];
        // console.log(product);
    }
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense); // Expected output: undefined (Because ) */




/* ===========================================
        ====== Mistake Problem #1 ======
   =========================================== */

// If you do mistake then you will face the following problem
// const num = [45, 65, 67, 98];

/* const shoppingCart = [
    {name: 'Shoe', price: 1200},
    {name: 'Shirt', price: 2200},
    {name: 'Pant', price: 3700},
    {name: 'Belt', price: 600}
]

function totalCost(products){
    // Mistake Example: By mistake you declare "const" variable instead of "let"
    const sum  = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // Mistake Example: By mistake you are adding "product" instead of "product.price"
        sum = sum + product;
        console.log(product);
        

        // const index = i;
        // const product = products[index];
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense); */





/* ===========================================
        ====== Mistake Problem #1 ======
   =========================================== */

// If you do mistake then you will face the following problem
// const num = [45, 65, 67, 98];

/* const shoppingCart = [
    {name: 'Shoe', price: 1200},
    {name: 'Shirt', price: 2200},
    {name: 'Pant', price: 3700},
    {name: 'Belt', price: 600}
]

function totalCost(products){
    let sum  = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // Mistake Example #2: By mistake you are adding "product" instead of "product.price"
        sum = sum + product;
        console.log(product);
        

        // const index = i;
        // const product = products[index];
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense); */




/* =========================================== */


// const num = [45, 65, 67, 98];

const shoppingCart = [
    {name: 'Shoe', price: 1200},
    {name: 'Shirt', price: 2200},
    {name: 'Pant', price: 3700},
    {name: 'Belt', price: 600}
]

function totalCost(products){
    let sum  = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
        

        // const index = i;
        // const product = products[index];
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);




