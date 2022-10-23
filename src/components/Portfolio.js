import React from "react";
import { fetchPortfolioHoldings, renderDate } from "../actions/index"
import HoldingsChart from "./HoldingsChart";
import Loading from "./Loading";
import { Box, Text, Table, TableContainer, Tbody, Tr, Th, Thead } from "@chakra-ui/react";

class Portfolio extends React.Component {
    state = { holdings: [], isLoaded: false }

    componentDidMount() {
        fetchPortfolioHoldings().then(res => {
            this.setState({
                holdings: res.holdings,
                activity: res.activity,
                isLoaded: true
            });
        });
    }

    renderList() {
        return this.state.activity.map((entry) => {
            return (
                <Tr key={entry.id}>
                    <Th>{renderDate(entry.purchase_date)}</Th>
                    <Th>{entry.coin_id}</Th>
                    <Th>{entry.purchase_amount}</Th>
                    <Th>{entry.purchase_price}</Th>
                </Tr>
            )
        })
    }

    render() {

        if (this.state.isLoaded === false) return <Loading isLoaded={this.state.isLoaded} />
        return (
            <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                <Box h='25em'>
                    <Text py='2' pl='5' fontSize='2xl'>Portfolio</Text>
                    <Text py='2' pl='5' fontSize='md'>Account: {this.state.activity[0].user_name}</Text>
                    <HoldingsChart data={this.state.holdings} />
                </Box>
                <Box pt={4}>
                    <Text py='5' pl='5' fontSize='2xl'>Activity</Text>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Purchase Date</Th>
                                    <Th>Asset</Th>
                                    <Th>Amount</Th>
                                    <Th>Purchase Price</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {this.renderList()}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        )
    }
};

export default Portfolio;