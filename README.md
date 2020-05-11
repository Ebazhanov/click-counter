# Simple example of `click counter`

#### you can check it out here 
- [https://click-to-count.netlify.app](https://click-to-count.netlify.app)

--------

```js
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

To run on `http://localhost:3000`:
- `$ yarn start`

> We now have a counter that increases every time there’s a click on a Button.
This is a simple example to illustrate state. I don’t recommend you use it as a counter in a real application. Instead, you’d probably want to create this.state.history variable that stores exactly which button was clicked at which point as an array of the current state at different points in time.
Then, if you need a click count, you can access it with this.state.history.length, and that click count will be correct even if you undo past changes.
