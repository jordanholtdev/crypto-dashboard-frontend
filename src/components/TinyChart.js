import React, { PureComponent } from 'react';
import { fetchCoinGecko } from '../actions';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class TinyChart extends PureComponent {
    state = { sparklineData: [] };

    componentDidMount() {
        fetchCoinGecko(this.props.coin).then((res) => {
            this.setState({
                sparklineData: res.market_data.sparkline_7d.price,
            });
        });
    }

    render() {
        return (
            <Sparklines data={this.state.sparklineData}>
                <SparklinesLine color='teal' />
            </Sparklines>
        );
    }
}

export default TinyChart;
