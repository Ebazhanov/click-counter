# Simple example of `click counter`
[https://click-to-count.netlify.app/](https://click-to-count.netlify.app/)

```js
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
```


