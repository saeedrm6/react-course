import React, { Component } from "react";

class Application extends Component {
    render() {
        let name = "Saeed";
        return (
            <header>
                <h2>Hello, {name}! &nbsp;<span>its 2021 :-D</span></h2>
            </header>
        );
    }
}

export default Application;