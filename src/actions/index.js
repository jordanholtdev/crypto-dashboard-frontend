import coins from '../apis/coins';
import gecko from '../apis/gecko';

export const fetchCoin = async (id) => {
    const response = await coins.get('/coin', {
        params: {
            id: id,
        },
    });
    return response.data;
};

export const fetchCoins = async () => {
    const response = await coins.get('/coins');
    return response.data;
};

export const fetchCoinInfo = async (id) => {
    const response = await coins.get('/coin/info', {
        params: {
            id: id,
        },
    });
    return response.data;
};

export const fetchPortfolioHoldings = async () => {
    const response = await coins.get('/portfolio');
    return response.data;
};

// fetch CoinGecko API data
export const fetchCoinGecko = async (id) => {
    const response = await gecko.get(`/coins/${id}`, {
        params: {
            localization: false,
            market_data: true,
            community_data: false,
            developer_data: false,
            sparkline: true,
        },
        withCredentials: false,
    });
    return response.data;
};

// helper function for dates.
export const renderDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
        hour: 'numeric',
    };
    const formatDate = new Date(date);
    return formatDate.toLocaleString('en-US', options);
};
