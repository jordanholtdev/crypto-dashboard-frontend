import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class PriceChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={this.props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="created_date" />
                    <YAxis dataKey="price_usd" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price_usd" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="price_change_24h" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
};

export default PriceChart;