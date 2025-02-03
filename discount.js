/* 
1. If ticket quantity is less the 100, per ticket price: 100tk
2. If ticket quantity is more the 100, but less the 200. 
   First 100 tickets will be 100tk and rest ticket will be 90tk per piece
3. If tickets quantity mor then 200:
   First 100 -----> 100tk
   101 - 200 -----> 90tk
   200+      ----> 70tk
*/

function ticketPrice(ticketQuantity){
    const first100TicketRate = 100;
    const second100TicketRate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100TicketRate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100TicketPrice = 100 * first100TicketRate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100TicketRate;
        const totalPrice = first100TicketPrice + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100TicketPrice = 100 * first100TicketRate;
        const second100TicketPrice = 100 * second100TicketRate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100TicketPrice + second100TicketPrice + restTicketPrice;
        return totalCost;
    }
}

const totalTicketPrice = ticketPrice(250);
console.log('Total Ticket Price:', totalTicketPrice + 'tk');




