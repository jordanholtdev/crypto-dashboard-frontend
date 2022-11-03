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

    renderList() {
        return this.state.activity.map((entry) => {
            return (
                <Tr key={entry.id}>
                    <Th>{ledgerDate(entry.purchase_date)}</Th>
                    <Th>{entry.coin_id}</Th>
                    <Th>{entry.purchase_amount}</Th>
                    <Th>{entry.purchase_price}</Th>
                    <Th>{entry.purchase_price * entry.purchase_amount}</Th>
                </Tr>
            );
        });
    }

    calculateValue = (holdings) => {
        let totalVal = 0;
        holdings.forEach((e, i) => {
            if (e.name === 'bitcoin') {
                totalVal += e.amount * 19021.38;
            }
            if (e.name === 'ethereum') {
                totalVal += e.amount * 1278.164;
            }
            if (e.name === 'cardano') {
                totalVal += e.amount * 0.341;
            }
        });

        return totalVal.toLocaleString();
    };

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
                    <Text py='2' pl='5' fontSize='2xl' as='h1' color='teal.400'>
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
                            <Tbody>{this.renderList()}</Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        );
    }
}

export default Portfolio;
