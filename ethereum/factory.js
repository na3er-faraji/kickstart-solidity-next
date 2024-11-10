import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(CampaignFactory.abi, "0x1cc1aF827CE25D2056b1E2CB32e9fD962F9b3073")

export default instance;