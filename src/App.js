import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.setState({value: this.state.value + 1});
    }

    render() {
        return (
            <div>
                <div className="displayedNumber">{this.state.value}</div>
                <Button onClick={this.buttonClicked}>Count me!</Button>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;
