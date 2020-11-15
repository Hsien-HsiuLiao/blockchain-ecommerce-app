//const _deploy_contracts = require("../migrations/2_deploy_contracts");

const PaymentProcessor = artifacts.require('PaymentProcessor.sol');
const Dai = artifacts.require('Dai.sol');

contract('PaymentProcessor', (accounts) => {
    let paymentProcessor;
    const admin = accounts[0];
    const payer = accounts[1];
    

    beforeEach( async() => {
       // await deployer.deploy(Dai);
        const dai = await Dai.new();
        const amount = web3.utils.toWei('100');
       
        await dai.faucet(payer, amount);
        //     await deployer.deploy(PaymentProcessor, admin, dai.address);

        paymentProcessor = await PaymentProcessor.new(admin, dai.address);
        //console.log(paymentProcessor);
    });

    it('pay function - should transfer money from the buyer to the admin', async () => {
       const price = web3.utils.toWei('10', 'ether');
       
        console.log(payer);
        const id = 1;
       await paymentProcessor.pay(price, id, {from: payer});
//       assert(100 === 100)

    })
})