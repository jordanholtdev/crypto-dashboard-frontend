import React from "react";
import { fetchCoins, renderDate, fetchCoinInfo } from "../actions";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import TinyChart from "./TinyChart";
import Loading from "./Loading";
import {
    Box,
    Badge,
    Button,
    Text,
    List,
    ListItem,
    Link,
    Stat,
    StatLabel,
    StatNumber,
    StatArrow,
    StatHelpText,
    Avatar,
    StatGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    VStack,
} from '@chakra-ui/react'


class CoinList extends React.Component {
    state = { coins: [], prices: [], info: [], coinPrice: [], isLoaded: false, isOpen: false }

    componentDidMount() {
        fetchCoins().then(res => {
            this.setState({
                coins: res.coins,
                prices: res.prices,
                isLoaded: true
            });
            console.log("prices", this.state.prices)
        });
    };

    onOpen(id) {
        fetchCoinInfo(id).then(res => {
            this.setState({
                info: res.info,
                coinPrice: res.price,
                isOpen: true
            });
        });
    };

    onClose() {
        this.setState({
            isOpen: false
        })
    };

    renderList() {
        return this.state.coins.slice(0, 10).map((coin) => {
            return (
                <ListItem key={coin.id}>
                    <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                        <StatGroup>
                            <Stat>
                                <Link onClick={() => this.onOpen(coin.coin_id)}><Avatar size='xs' src={coin.image} /></Link>
                                <Text paddingLeft={2} as='b' fontSize='md'><Link onClick={() => this.onOpen(coin.coin_id)}>{coin.name}</Link></Text>
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
                            <Stat px={2}>
                                <TinyChart coin={coin.coin_id} />
                            </Stat>
                        </StatGroup>
                    </Box>
                </ListItem>
            )
        })
    };

    renderModal() {
        return (
            <>
                <Modal size='xl' isOpen={this.state.isOpen} onClose={() => this.onClose()}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{this.state.info[0].name} Information</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Avatar src={this.state.info[0].image} />
                            <Text py='2' fontSize='2xl'>{this.state.info[0].name}</Text>
                            <Box pt='2'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme='green'>
                                        {this.state.info[0].symbol}
                                    </Badge>
                                    <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                    >
                                        {this.state.info[0].coin_id}
                                    </Box>
                                </Box>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    {this.state.info[0].id}
                                </Box>

                                <Box>
                                    {this.state.info[0].genesis_date ? <Box as='span' color='gray.600' fontSize='sm'>
                                        Genesis Date: {this.state.info[0].genesis_date}
                                    </Box> : null}
                                </Box>
                                <Box display='flex' mt='2' alignItems='center'>
                                    {this.state.info[0].hashing_algorithm ? <Box as='span' color='gray.600' fontSize='sm'>
                                        Hashing Algo: {this.state.info[0].hashing_algorithm}
                                    </Box> : null}
                                </Box>
                                <Box pt='2'>
                                    <Text dangerouslySetInnerHTML={{ __html: this.state.info[0].description }}></Text>
                                </Box>
                                <VStack pt='50px'>
                                    <Box h='25em' py='20' w='full'>
                                        <PriceChart data={this.state.coinPrice} />
                                    </Box>
                                    <Box h='25em' w='full'>
                                        <VolumeChart data={this.state.coinPrice} />
                                    </Box>
                                </VStack>
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={() => this.onClose()}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    };


    render() {
        if (this.state.isLoaded === false) return <Loading isLoaded={this.state.isLoaded} />
        return (
            <>
                <List>{this.renderList()}</List>
                {this.state.info[0] ? (this.renderModal()) : null}
            </>
        )
    }
}

export default CoinList;
