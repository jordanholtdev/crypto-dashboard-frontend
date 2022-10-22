import React from "react";
import { fetchCoins, renderDate } from "../actions";
import Loading from "./Loading";
import {
    Box,
    Text,
    List,
    ListItem,
    Stat,
    StatLabel,
    StatNumber,
    StatArrow,
    StatHelpText,
    Avatar,
    StatGroup,
} from '@chakra-ui/react'


class CoinList extends React.Component {
    state = { coins: [], isLoaded: false }

    componentDidMount() {
        fetchCoins().then(res => {
            this.setState({
                coins: res,
                isLoaded: true
            });
        });
    }

    renderList() {
        return this.state.coins.slice(0, 10).map((coin) => {
            return (
                <ListItem key={coin.id}>
                    <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                        <StatGroup>
                            <Stat>
                                <Avatar size='xs' src={coin.image} />
                                <Text paddingLeft={2} as='b' fontSize='md'>{coin.name}</Text>
                                <StatHelpText>{renderDate(coin.created_date)}</StatHelpText>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>Price (USD)</StatLabel>
                                <StatNumber fontSize='lg'>${coin.price_usd}</StatNumber>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>Market Cap</StatLabel>
                                <StatNumber color='teal.600' fontSize='lg'>${coin.market_cap.toLocaleString()}</StatNumber>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>Total Volume</StatLabel>
                                <StatNumber color='teal.600' fontSize='lg'>${coin.total_volume.toLocaleString()}</StatNumber>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>24hr Change (USD)</StatLabel>
                                <StatNumber color='teal.600' fontSize='lg'>{coin.price_change_24h}</StatNumber>
                                <StatHelpText> {coin.price_change_percentage_24h > 0 ? <StatArrow type='increase' /> : <StatArrow type='decrease' />}{coin.price_change_percentage_24h}%</StatHelpText>
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
