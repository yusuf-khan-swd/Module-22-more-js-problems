
// 1 - 100 => 100tk
// 101 - 200 => 90tk
// 201 => 70tk


function ticketPrice(ticketQuantity) {
  const first100TicketRate = 100;
  const second100TicketRate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100TicketRate;
    return price;
  }
  else if (ticketQuantity <= 200) {
    const first100TicketPrice = 100 * first100TicketRate;
    const second100TicketPrice = (ticketQuantity - 100) * second100TicketRate;
    const price = first100TicketPrice + second100TicketPrice;
    return price;
  }
  else {
    const first100TicketPrice = 100 * first100TicketRate;
    const second100TicketPrice = 100 * second100TicketRate;
    const restTicketPrice = (ticketQuantity - 200) * restTicketRate;
    const price = first100TicketPrice + second100TicketPrice + restTicketPrice;
    return price;
  }
}

const price = ticketPrice(201);
console.log('Total Ticket Price : ', price);