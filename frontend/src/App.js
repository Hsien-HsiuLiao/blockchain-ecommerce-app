import React, { useState, useEffect } from 'react';
import Store from './Store.js';
import Audius from './Audius.js';
import getBlockchain from './ethereum.js';

function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [dai, setDai] = useState(undefined);
  
  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, dai } = await getBlockchain();
     // const { paymentProcessor, dai } = 0;
  
      setPaymentProcessor(paymentProcessor);
      setDai(dai);
    }
    init();
  }, []);

  if(typeof window.ethereum === 'undefined') {
    return (
      <div className='container'>
        <div className='col-sm-12'>
          <h1>Blockchain Ecommerce App</h1>
          <p>You need to install the latest version of Metamask</p>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <div className='col-sm-12'>
        <h1>Blockchain Ecommerce App</h1>
        <Audius />
        <Store paymentProcessor={paymentProcessor} dai={dai} />
      </div>
    </div>
  );
}

export default App;
