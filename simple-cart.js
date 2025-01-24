// const num = [45, 65, 67, 98];

const shoppingCart = [
    {name: 'Shoe', price: 1200},
    {name: 'Shirt', price: 2200},
    {name: 'Pant', price: 3700},
    {name: 'Belt', price: 600}
]

function totalCost(products){
    for(let i = 0; i < products.length; i++){
        const index = i;
        const product = products[index];
        console.log(product);
    }
}

const expense = totalCost(shoppingCart);
console.log(expense);