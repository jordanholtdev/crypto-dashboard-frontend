import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

class PriceChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
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
                    <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                    <XAxis
                        dataKey='date'
                        label={{ value: 'Dates', position: 'insideBottomLeft', offset: 0 }}
                        hide='true'
                    />
                    <YAxis dataKey='price' domain={['auto', 'dataMax']} />
                    <Tooltip />
                    <Legend verticalAlign='bottom' iconType='circle' />
                    <Line
                        type='monotone'
                        dataKey='price'
                        stroke='#2c7a7b'
                        dot={{ stroke: 'teal', strokeWidth: 1 }}
                        activeDot={{ stroke: 'teal', strokeWidth: 2, r: 10 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default PriceChart;
