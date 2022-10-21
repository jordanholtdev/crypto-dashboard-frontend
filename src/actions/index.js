import coins from '../apis/coins';

export const fetchCoins = async () => {
    const response = await coins.get('/coins')
    return response.data;
};

export const fetchCoinInfo = async () => {
    const response = await coins.get('/coin/info')
    return response.data;
};

export const fetchPortfolioHoldings = async () => {
    const response = await coins.get('/portfolio')
    return response.data
};

export const renderDate = (date) => {
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
