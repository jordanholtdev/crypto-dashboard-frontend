import React from "react";
import { fetchCoins } from "../actions";
import Loading from "./Loading";
import {
    Box,
    Text,
    List,
    ListItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatGroup,
} from '@chakra-ui/react'


class CoinList extends React.Component {
    state = { coins: [], isLoaded: false }

    componentDidMount() {
        fetchCoins().then(res => {
            console.log(res)
            this.setState({
                coins: res,
                isLoaded: true
            });
        });
    }


    renderList() {
        return this.state.coins.map((coin) => {
            return (
                <ListItem key={coin.id}>
                    <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                        <StatGroup>
                            <Stat>
                                <Text as='b' fontSize='md'>{coin.coin_id}</Text>
                                <StatHelpText>{coin.created_date}</StatHelpText>
                            </Stat>
                            <Stat>
                                <StatLabel>Price (USD)</StatLabel>
                                <StatNumber>${coin.price_usd}</StatNumber>
                            </Stat>
                            <Stat>
                                <StatLabel>Market Cap</StatLabel>
                                <StatNumber>${coin.market_cap.toLocaleString()}</StatNumber>
                            </Stat>
                            <Stat>
                                <StatLabel>Total Volume</StatLabel>
                                <StatNumber>${coin.total_volume.toLocaleString()}</StatNumber>
                            </Stat>
                        </StatGroup>
                    </Box>
                </ListItem>
            )
        })
    }

    render() {
        if (this.state.isLoaded === false) return <Loading isLoaded={this.state.isLoaded} />
        return (
            <List>{this.renderList()}</List>
        )
    }
}

export default CoinList;
