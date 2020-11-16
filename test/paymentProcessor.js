//const _deploy_contracts = require("../migrations/2_deploy_contracts");

const PaymentProcessor = artifacts.require('PaymentProcessor.sol');
const Dai = artifacts.require('Dai.sol');

contract('PaymentProcessor', (accounts) => {
    let paymentProcessor;
    let dai;
    const admin = accounts[0];
    const payer = accounts[1];
    const price = web3.utils.toWei('1');
      

    beforeEach( async() => {
       // await deployer.deploy(Dai);
        dai = await Dai.new();
        //dai = await Dai.deployed();

        const amount = web3.utils.toWei('70000');
        console.log("balance before: ", await web3.eth.getBalance(payer));

        await dai.faucet(payer, amount);
        //     await deployer.deploy(PaymentProcessor, admin, dai.address);
        console.log("admin: ",admin);
        //paymentProcessor = await PaymentProcessor.new(admin, dai.address);
        paymentProcessor = await PaymentProcessor.deployed();
        
        console.log("dai.address: ", dai.address);
        //console.log("paymentProcessor: ", paymentProcessor );
        console.log("balance dai: ", await web3.eth.getBalance(dai.address));
        console.log("paymentProcessor.address: ", paymentProcessor.address)
       
    });

    it('pay function - should transfer money from the buyer to the admin', async () => {
        await dai.faucet(payer, web3.utils.toWei('70000'));

        console.log("payer: ",payer);
        const id = 1;
       // console.log("paymentProcessor.pay: ", paymentProcessor.pay());
       console.log("balance paymentProcessor: ", await web3.eth.getBalance(paymentProcessor.address));
       console.log("price approval: ", price)
       const tx1 = await dai.approve(paymentProcessor.address, price);
       // console.log("tx1: ",tx1)
         // await tx1.wait();
         console.log("payer balance: ", await web3.eth.getBalance(payer));
        const payerBefore = await web3.eth.getBalance(payer);
        const adminBefore = await web3.eth.getBalance(admin);
        
       //const tx2 = await paymentProcessor.pay(price, id, {from: payer});
       console.log("balance admin before: ", await web3.eth.getBalance(admin));
       await dai.transfer(admin, price, {from: payer});
      console.log("payer balance after: ", await web3.eth.getBalance(payer));
       console.log("balance admin after: ", await web3.eth.getBalance(admin));
       const payerAfter = await web3.eth.getBalance(payer);
       const adminAfter = await web3.eth.getBalance(admin);
       console.log("payer diff: ", payerAfter - payerBefore);
       console.log("admin diff: ", adminAfter - adminBefore);
       
       await paymentProcessor.pay(price, id, {from: payer});

       //assert(100 === 100)

    })
})