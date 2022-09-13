require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind exchange give drive flock vendor'; 
let testAccounts = [
"0x178cedc4f0c356ea2739e8beb2aaf158edcb9bfc66c7ffcd7b6cecef56dbe0dd",
"0x4b9947c6cf1c411acbff11b803c4c9e5e1c311b237bf3f01c24b71d5e1b7bec8",
"0x5a9bcaff03c23c8b79faa53e963ad20342a2cbeacf7badeefe24d444c434ff3b",
"0x8bd11fb78e7abaafb2629275bd15f5532af4315b7baf85e644caebb2a345c8d1",
"0x9f9eb0bc191b395e07151d5163845b9efa399504e313e3ea5b39ccd6943d68be",
"0x55f01cc84fa8b2a7399787035047f4fb55309d7a75d47fff2e03094348622c82",
"0xc21957dae0ebd65dd7291e38f214253eb53e78dc47bbc80f6782447abbee4721",
"0x425c9f4f669d9c7c416c5aa052d3de586d0bc1086f7fcd0048d3b3d46b8aa1cb",
"0x9a939fafca72c626f0676d7864f976cc9c538864cbc75cbc7b226fdb2748cfe4",
"0xd1369ea09e982c7fabf9b9ae8909f687fa8c86e5e633bf345aa256b99d3c983d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

