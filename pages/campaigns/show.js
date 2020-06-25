import React,{ Component } from 'react';
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import { Card,Grid,Button} from 'semantic-ui-react'
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/contributeForm'
import { Link } from '../../routes'


class CampaignShow extends Component{

  static async getInitialProps(props){
  const campaign=Campaign(props.query.address);
  const summary=await campaign.methods.getSummary().call();
    //console.log(summary)
    return {
            address:props.query.address,
            minimumContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            approverscount:summary[3],
            manager:summary[4]

    };
  }
 rendercards(){
   const {
     balance,
     manager,
     minimumContribution,
     requestsCount,
     approverscount
   }=this.props;
    const items=[
      {
        header:manager,
        meta:'Address of Manager',
        description:'The Manager created this campaign and can create request to withdraw money',
        style:{overflowWrap:'break-word'}
      },
      {
        header:minimumContribution,
        meta:'Minimum Contribution',
        description:'You should contribute atleast this much wei to be a approver of this campaign'
      },
      {
        header:requestsCount,
        meta:'Number of Requests',
        description:'A Request tries to withdraw money from the campaign. Approvers need to approve the requests'
      },
      {
        header:approverscount,
        meta:'Number of approvers',
        description:'Number of people already contributed to this requests'
      },
      {
        header:web3.utils.fromWei(balance,'ether'),
        meta:'Campaign Balance (ether)',
        description:'The balance is how much money this campaign has left to spent '

      }




    ];
   return <Card.Group items={items}/>;
 }



  render(){
    return (<Layout><h3>Campaign Show</h3>
            <Grid>
            <Grid.Row>
            <Grid.Column width={10}>
            {this.rendercards()}

            </Grid.Column>
            <Grid.Column width={6}>
               <ContributeForm address={this.props.address}/>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
            <Link route={`/campaigns/${this.props.address}/requests`}>
            <a>
             <Button primary>View Requests</Button>
             </a>
            </Link>
            </Grid.Column>
            </Grid.Row>
           </Grid>
            </Layout>);
    }
}

export default CampaignShow;
