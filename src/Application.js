import React, { Component } from "react";
import HighScore from './HighScore';

class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overFive: false,
        }
    }

    /*
    componentWillMount(props, state) {

    }

    componentDidMount(props, state) {
        console.log("Mountid with ", props, state);
    }

    componentWillReceiveProps(props) {

    }

    componentWillUpdate(props, status) {
        if (this.props.name !== props.name) {
            // do something
        }
    }

    */

    resetCount = (e) => {
        console.log("Event is ",e);
        this.setState({count:0 , overFive:false})
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidUpdate(props, state) {
        /*
        console.log("Updated from",state," to ",this.state);
        */

        if (this.state.count > 5 && this.state.count != state.count && !this.state.overFive) {
            this.setState({ overFive: true })
        }
    }


    render() {
        let { count } = this.state;
        let name = "Saeed";
        return (
            <header>
                <h2>Hello, {name}! , You Clicked the button for more {count} times. &nbsp;
                <span>
                        <button onClick={this.handleClick}>Click Me</button>
                    </span>
                </h2>
                <HighScore
                    overFive={this.state.overFive}
                    onReset={(e) => this.resetCount(e)}
                />

            </header>
        );
    }
}

export default Application;