const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');

const web3=new Web3(ganache.provider());


const compiledFactory=require("../ethereum/build/CampaignFactory.json");
const compaiedCampaign=require('../ethereum/build/Campaign.json');


let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async()=>{
  accounts=await web3.eth.getAccounts();
  factory=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data:compiledFactory.bytecode})
  .send({from:accounts[0],gas:'1000000'});
await factory.methods.createCampaign('100').send({from:accounts[0],gas:'1000000'});
[campaignAddress]=await factory.methods.getDeployedCampaign().call();
campaign=await new web3.eth.Contract(
  JSON.parse(compaiedCampaign.interface),
  campaignAddress)
});

describe('Campaigns',()=>{
  it('deploys a factory and a campaign',()=>{
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  it('manager is the person who creates the campaign',async ()=>{
     const manager=await campaign.methods.manager().call();
    assert.equal(accounts[0],manager);
  });
  it('allows able to contri money and makes them ass contributor',async()=>{
     await campaign.methods.contribute().send({from:accounts[1],value:'200'});
    const approver1=campaign.methods.approvers(accounts[1]).call();
      assert(approver1);
});
 it('requires a minimum amount contribution',async()=>{
   try{
     await campaign.methods.contribute().send({value:'5',from:accounts[1]});
      assert(false);
   }
   catch(err){
     assert(err);
   }
 });
it('Alows manager to create request',async ()=>{
  await campaign.methods
  .createRequest('A',web3.utils.toWei('5','ether'),accounts[1]).send({from:accounts[0],gas:'1000000'});;
    const req=await campaign.methods.requests(0).call();
    assert.equal('A',req.description);
});
   it('process request',async ()=>{
     await campaign.methods.contribute().send({from:accounts[0],value:web3.utils.toWei('10','ether')});
   await campaign.methods
   .createRequest('A',web3.utils.toWei('5','ether'),accounts[1]).send({from:accounts[0],gas:'1000000'});
    await campaign.methods.approveRequest(0).send({from:accounts[0],gas:'1000000'});
    await campaign.methods.FinaliseRequest(0).send({from:accounts[0],gas:'1000000'});
  let balance= await web3.eth.getBalance(accounts[1]);
    balance=web3.utils.fromWei(balance,'ether');
    balance=parseFloat(balance);
    //console.log(balance);
    assert(balance>103)
 });
});
