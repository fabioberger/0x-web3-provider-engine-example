import { InjectedWeb3Subprovider } from '@0xproject/subproviders';
import Web3ProviderEngine = require('web3-provider-engine');
import * as Web3 from 'web3';

const providerEngine = new Web3ProviderEngine();
// Compose our Providers, order matters
// Use the InjectedWeb3Subprovider to wrap the browser extension wallet
// All account based and signing requests will go through the InjectedWeb3Subprovider
const web3 = new Web3();
providerEngine.addProvider(new InjectedWeb3Subprovider(web3.currentProvider));

providerEngine.start();
