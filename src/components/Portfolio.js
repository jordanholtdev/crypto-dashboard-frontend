import React from "react";
import { fetchPortfolioHoldings } from "../actions/index"

class Portfolio extends React.Component {
    state = { holdings: [], isLoaded: false }

    componentDidMount() {
        fetchPortfolioHoldings().then(res => {
            console.log(res)
            this.setState({
                holdings: res,
                isLoaded: true
            });
        });
    }


    render() {
        return (
            <div>holdings</div>
        )
    }
};

export default Portfolio;