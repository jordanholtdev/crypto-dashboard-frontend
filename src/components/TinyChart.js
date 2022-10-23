import React, { PureComponent } from 'react';
import { fetchCoinInfo } from "../actions";
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

class TinyChart extends PureComponent {
    state = { info: [], coinPrice: [] }

    componentDidMount() {
        fetchCoinInfo(this.props.coin.coin_id).then(res => {
            console.log('api firing')
            this.setState({
                info: res.info,
                coinPrice: res.price,
            });
            console.log(this.state.coinPrice)
        });
    };

    render() {
        return (
            <ResponsiveContainer width="100%" height={700}>
                <LineChart width={730} height={250} data={this.state.coinPrice}>
                    <Line type="monotone" dataKey="price_usd" stroke="#48BB78" strokeWidth={2} isAnimationActive={false} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        );
    }
};

export default TinyChart;