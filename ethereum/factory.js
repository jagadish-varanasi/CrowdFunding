import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance=new web3.eth.Contract(
 JSON.parse(CampaignFactory.interface),
 '0x99dea45affF535220f31b1f074b96E68E1296b7b'

);

export default instance;
