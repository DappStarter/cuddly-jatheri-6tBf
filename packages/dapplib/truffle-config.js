require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name release magic minimum grace nation equal gather'; 
let testAccounts = [
"0x4b45119f6a2753abc485c52debd403f150e3126768f737bb54a29d6b5677c7b0",
"0xb65ff758e31e21969089d9c340fa1d1b50e9307def2d312c0f04ced43650877a",
"0x850eb506702e349181bc5336276645d6192fa4fbe9722503ad2c9245e5037cef",
"0xb9b656eb580b9b0256a754afeb49cf39379975c1d9d5e4b409f2c2424e173c9d",
"0x774fe6d9849e3f31677708d6e848fe978ab8f0a4f927a6e7e99d612b60cd3e81",
"0x4ecd08cf37d8c48381b07e7c3132d2168f18a0123e0394e8acec11721cda7d75",
"0x24e7d8a002ab94ec2dbe2eacbd8063685127671a168bdd314631bcd08f160a3d",
"0x39db391f8940b2c304983d119f07c08420e4bcea2ad89dd5005054fb648f75a9",
"0xf5134caa1372f4eda0e1feb60dc7e0835ebc020712231cc74f4a57cd1d6ce87b",
"0x8fab5ac87123088b0dd8594323509bb82effed2819c841c21ce68f35d84591ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

