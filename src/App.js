import React from 'react';
import ReactDOM from 'react-dom';
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
                <h6 className="displayedNumber">{this.state.value}</h6>
                <button type="button" class="btn btn-primary btn-lg" onClick={this.buttonClicked}>Count me!</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;
