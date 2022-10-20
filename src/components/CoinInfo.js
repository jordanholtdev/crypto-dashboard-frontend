import React from "react";
import { fetchCoinInfo } from "../actions";
import Loading from "./Loading";
import {
    Box,
    List,
    ListItem,
    Avatar,
    Text,
    Badge
} from '@chakra-ui/react'

class CoinInfo extends React.Component {
    state = { info: [], isLoaded: false }

    componentDidMount() {
        fetchCoinInfo().then(res => {
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
                        <Avatar src={coin.image} />
                        <Text py='2' fontSize='2xl'>{coin.name}</Text>
                        <Box pt='2'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='green'>
                                    {coin.symbol}
                                </Badge>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                    {coin.coin_id}
                                </Box>
                            </Box>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                {coin.id}
                            </Box>

                            <Box>
                                {coin.genesis_date ? <Box as='span' color='gray.600' fontSize='sm'>
                                    Genesis Date: {coin.genesis_date}
                                </Box> : null}
                            </Box>
                            <Box display='flex' mt='2' alignItems='center'>
                                {coin.hashing_algorithm ? <Box as='span' color='gray.600' fontSize='sm'>
                                    Hashing Algo: {coin.hashing_algorithm}
                                </Box> : null}
                            </Box>
                            <Box pt='2'>
                                <Text dangerouslySetInnerHTML={{ __html: coin.description }}></Text>
                            </Box>
                        </Box>
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