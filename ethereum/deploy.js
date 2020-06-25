const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compailedFactory=require('./build/CampaignFactory.json');

const provider=new HDWalletProvider(
  'hour random antique tower spend satisfy sad lumber possible file keen orchard',
  'https://rinkeby.infura.io/v3/a8c6d13db2c64eaba40177a6212ab1b4'
);

const web3=new Web3(provider);


const deploy=async()=>{
  const accounts=await web3.eth.getAccounts();


  console.log('Attempting to deploy account',accounts[0]);
  const result=await new web3.eth.Contract(JSON.parse(compailedFactory.interface)).deploy({data:compailedFactory.bytecode})
  .send({gas:'1000000',from:accounts[0]});
  console.log('Contract depeloped to',result.options.address);
  //console.log(interface);
};

deploy();
