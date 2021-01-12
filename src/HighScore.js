import React, { Component } from "react";

class HighScore extends Component {
    render() {
        if (this.props.overFive) {
            return (
                <h5>Beat High score of 5! 
                    <button onClick={(e) => this.props.onReset(e)}>Reset</button>
                </h5>
            );
        } else {
            return null;
        }

    }
}

export default HighScore;