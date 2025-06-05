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

* backend web framework: koa (can use async/await)
* React frontend
* Database: MongoDB
* Audius API 
    - https://audius.org/api - "Take a look at these outstanding apps, all built using our free API", 
    - ~~https://docs.audius.org/api/rest-api~~ https://docs.audius.org/api/, 
    - https://audiusproject.github.io/api-docs/#audius-api-docs , 
    - https://www.youtube.com/watch?v=XZcgOpytOB8 - How to Build a Music dApp
* https://vercel.com/templates?framework=next.js&type=web3
* https://nextjs.org/docs/app/api-reference/cli/create-next-app

## Testing

`truffle develop`

`cd backend`

`node server.js`

`cd frontend`

`npm start`

