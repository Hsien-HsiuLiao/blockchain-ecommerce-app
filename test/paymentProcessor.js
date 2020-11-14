//const _deploy_contracts = require("../migrations/2_deploy_contracts");

const PaymentProcessor = artifacts.require('PaymentProcessor.sol');
const Dai = artifacts.require('Dai.sol');

contract('PaymentProcessor', (accounts) => {
    let paymentProcessor;
    const admin = accounts[0];
    

    beforeEach( async() => {
       // await deployer.deploy(Dai);
        const dai = await Dai.new();
        const amount = web3.utils.toWei('100');
       
        await dai.faucet(accounts[1], amount)
        paymentProcessor = await PaymentProcessor.new(admin, dai.address);
        //console.log(paymentProcessor);
    });

    it('pay function - should transfer money from the buyer to the admin', async () => {
       const price = web3.utils.toWei('10');
       
        console.log(accounts[1]);
        const id = 1;
       await paymentProcessor.pay(price, id, {from: accounts[2], to: admin});
//       assert(100 === 100)

    })
})