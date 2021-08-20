import React, { Component } from "react";
import Coin from "./Coin";
import "./Coin.css";
import { randChoice } from "./helper";

export class CoinProtocol extends Component {
  static defaultProps = {
    coins: [
      { side: "Head", imgSrc: "http://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "Tail",
        imgSrc:
          "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = randChoice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "Head" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "Tail" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinProtocol">
        <h2>Let's Flip A Coin</h2>
        <button onClick={this.handleClick}>Flip Me!</button>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <p>
          Out of {this.state.nFlips}, there have been {this.state.nHeads} and{" "}
          {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinProtocol;
