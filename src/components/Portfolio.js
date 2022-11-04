import React from 'react';
import { fetchPortfolioHoldings, ledgerDate } from '../actions/index';
import HoldingsChart from './HoldingsChart';
import Loading from './Loading';
import { Box, Text, Table, TableContainer, Tbody, Tr, Th, Thead } from '@chakra-ui/react';

class Portfolio extends React.Component {
    state = { holdings: [], isLoaded: false };

    componentDidMount() {
        fetchPortfolioHoldings().then((res) => {
            this.setState({
                holdings: res.holdings,
                activity: res.activity,
                latestPrice: res.currentPrice,
                isLoaded: true,
            });
        });
    }

    // get the latest price of an asset
    fetchLatestPrice(asset) {
        let latPrice = 0;
        this.state.latestPrice.forEach((price) => {
            if (price.coin_id === asset.name) {
                latPrice = price.price_usd;
            }
        });
        return latPrice;
    }

    // calculate the current value of an asset
    calculateCurrentValue(asset) {
        let val = 0;
        this.state.latestPrice.forEach((price) => {
            if (price.coin_id === asset.name) {
                val = price.price_usd * asset.amount;
            }
        });
        return val;
    }

    // calculate total account Value: $799,413.856
    calculateValue = (holdings) => {
        let totalVal = 0;
        holdings.forEach((e, i) => {
            totalVal += this.calculateCurrentValue(e);
        });
        return totalVal.toLocaleString();
    };

    // render the holdings table
    renderHoldingsList() {
        return this.state.holdings.map((asset) => {
            return (
                <Tr key={asset.amount}>
                    <Th>{asset.name}</Th>
                    <Th>{asset.amount}</Th>
                    <Th>{this.calculateCurrentValue(asset).toLocaleString()}</Th>
                    <Th>$ {this.fetchLatestPrice(asset).toLocaleString()}</Th>
                </Tr>
            );
        });
    }

    // render the activity / ledger table
    renderActivityList() {
        return this.state.activity.map((entry) => {
            return (
                <Tr key={entry.id}>
                    <Th>{ledgerDate(entry.purchase_date)}</Th>
                    <Th>{entry.coin_id}</Th>
                    <Th>{entry.purchase_amount}</Th>
                    <Th>{entry.purchase_price.toLocaleString()}</Th>
                    <Th>{entry.purchase_price * entry.purchase_amount}</Th>
                </Tr>
            );
        });
    }

    render() {
        if (this.state.isLoaded === false) return <Loading isLoaded={this.state.isLoaded} />;
        return (
            <Box
                border='1px'
                borderColor='gray.200'
                boxShadow='md'
                p='6'
                rounded='md'
                bg='white'
                m='2'
            >
                <Box h='25em'>
                    <Text py='2' pl='5' fontSize='4xl' as='h1' color='teal.400'>
                        Portfolio
                    </Text>
                    <Text py='2' pl='5' fontSize='md'>
                        Account: {this.state.activity[0].user_name}
                    </Text>
                    <Text py='2' pl='5' fontSize='md'>
                        Account Value: ${this.calculateValue(this.state.holdings)}
                    </Text>
                    <HoldingsChart data={this.state.holdings} />
                </Box>
                {/* Holdings table */}
                <Box pt={4}>
                    <Text py='5' pl='5' fontSize='2xl' color='teal.400'>
                        Holdings
                    </Text>
                    <TableContainer>
                        <Table variant='simple' colorScheme='linkedin'>
                            <Thead>
                                <Tr>
                                    <Th>Asset</Th>
                                    <Th>Amount</Th>
                                    <Th>Current Value</Th>
                                    <Th>Current Price</Th>
                                </Tr>
                            </Thead>
                            <Tbody>{this.renderHoldingsList()}</Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                {/* Activity list */}
                <Box pt={4}>
                    <Text py='5' pl='5' fontSize='2xl' color='teal.400'>
                        Activity
                    </Text>
                    <TableContainer>
                        <Table variant='simple' colorScheme='linkedin'>
                            <Thead>
                                <Tr>
                                    <Th>Purchase Date</Th>
                                    <Th>Asset</Th>
                                    <Th>Amount</Th>
                                    <Th>Purchase Price</Th>
                                    <Th>Purchase Cost</Th>
                                </Tr>
                            </Thead>
                            <Tbody>{this.renderActivityList()}</Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        );
    }
}

export default Portfolio;
