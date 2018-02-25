'use strict';

/*
config.js - Configuration for ZENCash Coin
*/

module.exports = {
  mainnet: {
    messagePrefix: 'Bitcoin Private main net',
    bip32: {
      public: '0488b21e',
      private: '0488ade4'
    },
    pubKeyHash: '1325',
    scriptHash: '13af',
    zcPaymentAddressHash: '16a8', // Private z-address
    zcSpendingKeyHash: 'ab36', // Spending key
    wif: '80'
  },
  testnet: {
    wif: 'ef',
    pubKeyHash: '1958',
    scriptHash: '19e0'
  }
};
