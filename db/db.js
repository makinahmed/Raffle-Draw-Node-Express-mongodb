const Ticket = require("../model/Ticket");

class MyDb {
  constructor() {
    this.tickets = [];
  }

  //Create ticket

  /**
   *
   * @param {string} userName
   * @param {number} price
   * @returns {Ticket} return a ticket object;
   */
  createTicket(userName, price) {
    const ticket = new Ticket(userName, price);
    this.tickets.push(ticket);
    return ticket;
  }

  //Create ticket

  /**
   *
   * @param {string} userName
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>} return a ticket object;
   */
  createBulkTicket(userName, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.createTicket(userName, price);
      result.push(ticket);
      return result;
    }
  }

  // Get ticket

  find() {
    return this.tickets;
  }

  // Get ticket

  findById(id) {
    const ticket = this.tickets.find((item) => item.id === ticketId);
    return ticket;
  }

  // Get ticket by username

  findByUserName(userName) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} item
       */
      (item) => item.userName === userName
    );
    return tickets;
  }
  // Update Ticket

  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.userName = ticketBody.userName ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();
    return ticket;
  }

  //delete ticket

  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  // Raffle Draw

  raffleDraw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);

    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }

    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDb();

module.exports = myDB;
