import React, { Component } from "react";
import Layout from "../../components/Layout";
import { CardGroup, Grid, Button } from "semantic-ui-react";
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm'
import { Link } from '../../routes'

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);

        const summary = await campaign.methods.getSummary().call();
        return {
            address: address,
            minimumContribution: summary[0].toString(),
            balance: summary[1].toString(),
            requestCount: summary[2].toString(),
            approversCount: summary[3].toString(),
            manager: summary[4],
        };
    }

    renderCard() {
        const {
            minimumContribution,
            balance,
            requestCount,
            approversCount,
            manager
        } = this.props;
        const items = [
            {
                header: manager,
                meta: "Address of Manager",
                description:
                    'The manage created this campaign and can request to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: "MinimumContribution (wei)",
                description:
                    'You must contribute at least this much wei to become an approver',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestCount,
                meta: "Number of Requests",
                description:
                    'A request tries to withdraw money from the contract',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: approversCount,
                meta: "Number of Approvers",
                description:
                    'Number of people who already have donated to this campaign',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance, "ether"),
                meta: "Campaign Balance (ether)",
                description:
                    'The balance is how much money this campaign has left to spend',
                style: { overflowWrap: 'break-word' }
            },
        ];
        return <CardGroup items={items} />
    }

    render() {


        return <Layout>
            <h3>Campaign details</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderCard()}

                    </Grid.Column>
                    <Grid.Column width={6}><ContributeForm address={this.props.address} /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <Button primary>View Requests</Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </Layout>
    }
}

export default CampaignShow;