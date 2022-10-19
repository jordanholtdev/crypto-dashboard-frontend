import React from "react";
import { fetchCoinInfo } from "../actions";
import Loading from "./Loading";
import {
    Box,
    List,
    ListItem,
    Flex,
    Avatar,
    Text,
    Badge
} from '@chakra-ui/react'

class CoinInfo extends React.Component {
    state = { info: [], isLoaded: false }

    componentDidMount() {
        fetchCoinInfo().then(res => {
            console.log(res)
            this.setState({
                info: res,
                isLoaded: true
            });
        });
    }

    renderList() {
        return this.state.info.map((coin) => {
            return (
                <ListItem key={coin.coin_id}>
                    <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                        <Flex>
                            <Avatar src={coin.image} />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    {coin.name}
                                    <Badge ml='1' colorScheme='green'>
                                        {coin.symbol}
                                    </Badge>
                                </Text>
                                <Text fontSize='sm'>{coin.description}</Text>
                            </Box>
                        </Flex>
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

export default CoinInfo;