import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class App extends Component {
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
                <button type="button" class="btn btn-primary" onClick={this.buttonClicked}>Count!</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;
