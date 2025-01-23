const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'Silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'Red'},
    {name: 'iPhone', camera: 12, storage: '32gb', price: 82000, color: 'Pink'},
    {name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'Gray'},
    {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'Black'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'Golden'},
    {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'Dark Silver'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const index = i;
        const element = phones[index];
        // console.log('Element Number:', index, element);
        /* const phone = phone[i];
        console.log(phone); */

        if(element.price < cheapest.price){
            cheapest = element;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);