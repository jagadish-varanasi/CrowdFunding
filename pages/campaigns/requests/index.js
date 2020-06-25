import React,{Component} from 'react';
import Layout from '../../../components/Layout';
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{
    static async getInitialProps(props){
      const {address}=props.query;
      const campaign=Campaign(address);
      const requestsCount=await campaign.methods.getRequestCount().call();
      const approverscount=await campaign.methods.approverscount().call();
      const requests= await Promise.all(
        Array(parseInt(requestsCount)).fill().map((element,index)=>{
          return campaign.methods.requests(index).call();
        })
      );
      return {address,requests,requestsCount,approverscount}}

  renderRows(){
     return  this.props.requests.map((request,index)=>{return <RequestRow request={request} key={index} id={index} approverscount={this.props.approverscount} address={this.props.address}/>;});


  }

render(){
  const{ Header,Row,HeaderCell,Body}=Table;
    return(
      <Layout>
       <h3>Request List</h3>
       <Link route={`/campaigns/${this.props.address}/requests/new`}>
         <a>
             <Button primary floated="right" style={{marginBottom:10}}>Add Request</Button>
         </a>
       </Link>
       <Table>
           <Header>
                 <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                 </Row>
           </Header>
           <Body>
             {this.renderRows()}

           </Body>
       </Table>
       <div> Found {this.props.requestsCount} requests</div>
       </Layout>
    );
  }
}

export default RequestIndex;
