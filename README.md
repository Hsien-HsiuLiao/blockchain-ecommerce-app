# blockchain e-commerce app

## Summary 

Accepts ERC-20 Stablecoin token (DAI) for payment

### To do:

- move hard coded catalog to mongodb, create new endpoint on backend
- from frontend , get endpoint to dynamically list items to buy
- add pictures for items to buy
- show download url (popup)
- security (can currently read paymentid from smart contract on blockchain)

### Tech stack used:

backend web framework: koa (can use async/await)
React frontend
Database: MongoDB

## Testing

`truffle develop`

`cd backend`

`node server.js`

`cd frontend`

`npm start`

>push an existing repository from the command line

>`git remote add origin https://github.com/Hsien-HsiuLiao/blockchain-ecommerce-app.git`

>`git branch -M master`

> `git push -u origin master`