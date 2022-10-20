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

    renderDate = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
            hour: 'numeric'
        }
        const formatDate = new Date(date)
        return formatDate.toLocaleString('en-US', options)
    }

    renderList() {
        return this.state.coins.map((coin) => {
            return (
                <ListItem key={coin.id}>
                    <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                        <StatGroup>
                            <Stat>
                                <Avatar size='xs' src={coin.image} />
                                <Text paddingLeft={2} as='b' fontSize='md'>{coin.name}</Text>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>Price (USD)</StatLabel>
                                <StatNumber>${coin.price_usd}</StatNumber>
                                <StatHelpText>{this.renderDate(coin.created_date)}</StatHelpText>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>Market Cap</StatLabel>
                                <StatNumber>${coin.market_cap.toLocaleString()}</StatNumber>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>Total Volume</StatLabel>
                                <StatNumber>${coin.total_volume.toLocaleString()}</StatNumber>
                            </Stat>
                            <Stat px={2}>
                                <StatLabel>24hr Change (USD)</StatLabel>
                                <StatNumber>{coin.price_change_24h}</StatNumber>
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
