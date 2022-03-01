# payment api

### server (expressjs)

- must store data in mongoDB
- upon successful save, should return the response of the record ID and Amount in JSON format
  request example { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
  response example { "RequestId": '61b248040041bc64b411a691', Amount: 100 } (edited)

#### validation

- Card Number - (only digits, value length 16)
- Expiration Date (date format MM/YYYY)
- CVV (digits only, value length 3)
- Amount (numbers only)
