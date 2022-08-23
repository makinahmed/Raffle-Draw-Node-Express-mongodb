#### List of the operations

# Lottery API

- Sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- Create lottery ticket
- Get lottery ticket
- Bulk buy (Users can by multiple ticket)
- Raffle draw


# Ticket features

- Unique Id
- Username
- Price
- Timestamp 

# Routes: 
- /tickets/sell - create lottery
- /tickets/bulk - bulk sell ticket
- /tickets/t/:ticketId  GET find single ticket
- /tickets/u/:username  find ticket by username
- /ticket/t/:ticketId   PATCH update ticket by id
- /tickets/t/:username  GET find tickets for a given user
- /tickets/u/:username PATCH update tickets for a given user
- /tickets/u/:username DELETE delete all tickets for a given user
- /tickets - find all lottery 