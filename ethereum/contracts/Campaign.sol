pragma solidity ^0.4.17;
contract  CampaignFactory{

address[]  deployedCampaigns;

function createCampaign(uint minimum) public{
    address newCampaign=new Campaign(minimum,msg.sender);
    deployedCampaigns.push(newCampaign);
}


function getDeployedCampaign() public view returns(address[]){
    return deployedCampaigns;


}

}


contract Campaign{
    address public manager;
    mapping(address=>bool) public approvers;
    uint public approverscount;
    uint minimumContribution;
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address=>bool) approvals;
    }
    Request[] public requests;
     modifier onlyManager(){
         require(msg.sender==manager);
         _;
     }


    function Campaign(uint minimum,address creator) public{
        manager=creator;
        minimumContribution=minimum;
    }


    function contribute() public payable{
        require(msg.value>minimumContribution);
        approvers[msg.sender]=true;
        approverscount++;
    }

    function createRequest(string description,uint value,address recipient) public onlyManager{
        require(approvers[msg.sender]);
      Request memory newRequest= Request({description:description,value:value,recipient:recipient,complete:false,approvalCount:0});
       requests.push(newRequest);


    }
    function approveRequest(uint index) public{
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        requests[index].approvals[msg.sender]=true;
        requests[index].approvalCount++;
    }

    function FinaliseRequest(uint index) public  onlyManager{
        Request storage request= requests[index];
        require(request.approvalCount>(approverscount/2));
         require(!request.complete);
          request.recipient.transfer(request.value);
         request.complete=true;

    }

    function getSummary() public view returns(uint,uint,uint,uint,address){
        return(
                  minimumContribution,
                  this.balance,
                  requests.length,
                  approverscount,
                  manager

          );

    }

    function getRequestCount() public view returns (uint) {
      return requests.length;
    }

}
