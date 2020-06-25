import Web3 from 'web3';

//const web3=new Web3(window.web3.currentProvider);

let web3;

if(typeof window!=='undefined'&& typeof window.web3!=='undefined'){
  //we are in brower and metamask is running
  web3=new Web3(window.web3.currentProvider);

}else{
  //we are server or user not using metamask
  const provider=new Web3.providers.HttpProvider(
   'https://rinkeby.infura.io/v3/a8c6d13db2c64eaba40177a6212ab1b4'

  );
  web3=new Web3(provider);
}

export default web3;
