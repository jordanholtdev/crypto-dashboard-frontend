import React from "react";
import { fetchCoin } from "../actions";
import Loading from "./Loading";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import { Box, Text, Stack, Button } from "@chakra-ui/react";

class ChartsList extends React.Component {
    state = { coin: [], isLoaded: false }

    componentDidMount() {
        fetchCoin('bitcoin').then(res => {
            console.log(res)
            this.setState({
                coin: res,
                isLoaded: true
            });
        });
    };

    handleOnClick(id) {
        this.setState({
            isLoaded: false
        })
        fetchCoin(id).then(res => {
            this.setState({
                coin: res,
                isLoaded: true
            });
        });
    };

    renderButtons() {
        return (
            <Stack direction='row' spacing={6} align='center' m='2' p='6' justifyContent='center'>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('bitcoin')}>
                    Bitcoin
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('ethereum')}>
                    Ethereum
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('tether')}>
                    Tether
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('usd-coin')}>
                    USD Coin
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('binancecoin')}>
                    BNB
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('ripple')}>
                    XRP
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('binance-usd')}>
                    Binance USD
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('cardano')}>
                    Cardano
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('solana')}>
                    Solana
                </Button>
                <Button colorScheme='teal' variant='link' onClick={() => this.handleOnClick('dogecoin')}>
                    Dogecoin
                </Button>
            </Stack>
        )
    };

    renderChart() {
        return (
            <>
                <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                    <Text>24 Hour Price Chart: {this.state.coin[0].name}</Text>
                    <Box h='25em'>
                        <PriceChart data={this.state.coin} />
                    </Box>
                </Box>
                <Box border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white' m='2'>
                    <Text>24 Hour Price Change: {this.state.coin[0].name}</Text>
                    <Box h='25em'>
                        <VolumeChart data={this.state.coin} />
                    </Box>
                </Box>
            </>
        )
    };

    render() {

        return (<div>
            {this.renderButtons()}
            {this.state.isLoaded ? (
                <div>{this.renderChart()}</div>
            ) : (
                <div>

                    <Loading isLoaded={this.state.isLoaded} />
                </div>
            )
            }
        </div>)
    }
}

export default ChartsList;
