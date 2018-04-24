import { MnemonicWalletSubprovider } from '@0xproject/subproviders';
import Web3ProviderEngine = require('web3-provider-engine');

const providerEngine = new Web3ProviderEngine();
// Compose our Providers, order matters
// Use the InjectedWeb3Subprovider to wrap the browser extension wallet
// All account based and signing requests will go through the InjectedWeb3Subprovider
providerEngine.addProvider(
    new MnemonicWalletSubprovider({
        mnemonic: 'concert load couple harbor equip island argue ramp clarify fence smart topic',
    }),
);

providerEngine.start();
