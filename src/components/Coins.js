import React from "react";
import { fetchCoins } from "../actions";
class Coins extends React.Component {
    state = { coins: [] }

    componentDidMount() {
        fetchCoins().then(res => {
            console.log(res)
            this.setState({
                coins: res
            });
        });
    }

    render() {
        return (
            <div>Coin list</div>
        )
    }
}

export default Coins;
