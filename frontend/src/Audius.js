import React from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

const ITEMS = [
    {
        id: 1,
        price: ethers.utils.parseEther('100')
    },
    {
        id: 2, 
        price: ethers.utils.parseEther('200')
    },
];

function Audius() { 
    console.log('hello');

    return (
        <h3>Audius component</h3>
    
    )
}

export default Audius;