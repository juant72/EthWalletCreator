var Accounts = require('web3-eth-accounts');

var accounts = new Accounts();

let new_account;
console.log('address,private_key'); 
for (let i = 0; i <1000; i++) {
  new_account = accounts.create();
//   console.log({'private_key': new_account['privateKey'],    'address': new_account['address']});
console.log( new_account['address'] + ',' +new_account['privateKey']);
}