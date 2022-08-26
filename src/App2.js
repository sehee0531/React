
import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import WebServiceManager from "./util/webservice_manager";

class App2 extends Component {
    constructor(props) {
        super(props);

        this.state={
            contents:[],
        };
    }

    componentDidMount() {
        this.callGetRepair().then((response) => {
            console.log(response);
            this.setState({contents:response.repairs});
        });
        console.log(this.state.contents);
    }

    async callGetRepair() {
        let manager = new WebServiceManager("http://203.241.251.177/car/GetRepair");
        let response = await manager.start();
        if(response.ok)
            return response.json();
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <p>
                Edit <code>src/App.js</code> and save to reload. 김태웅
                </p>
                {this.state.contents.map((car,i) => <ListItem a={car} key={i}/>)}
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>
        );
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const car=this.props.a;
        return(
        <p>
                {car.carNumber}:{car.content}
        </p>
        );
    }
}

export default App2;
