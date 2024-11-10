// Load environment variables.
require("dotenv").config();
import { Web3 } from 'web3';

let web3;
const network = process.env.ENDPOINT;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(network);
    web3 = new Web3(provider);
}

export default web3;