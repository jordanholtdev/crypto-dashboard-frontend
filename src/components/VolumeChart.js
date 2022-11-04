import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

class VolumeChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart
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
                    <XAxis dataKey='date' hide='true' />
                    <YAxis dataKey='change' domain={['auto', 'auto']} />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke='#000' />
                    <Bar dataKey='change' fill='#8884d8' />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export default VolumeChart;
