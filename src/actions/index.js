import coins from '../apis/coins';

export const fetchCoins = async () => {
    const response = await coins.get('/coins')
    return response.data;
}