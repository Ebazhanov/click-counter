## My example of `click counter` with using the State Hook
> [https://click-to-count.netlify.app](https://click-to-count.netlify.app)
> I styled my version with material-ui, you can try to reach 2 clicks to see the bonus ))  

--------

You might want to see from where it was all started, what is the simple implementation

```js
function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{count}</div>
            <button 
                type="button"
                onClick={() => setCount(count + 1)}
            >
                Count me!</button>
        </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;
```

You can run on `http://localhost:3000`:
-  `$ yarn start`, make sure you installed `node_modules`

> We now have a counter that increases every time there’s a click on a Button.
This is a simple example to illustrate state. I don’t recommend you use it as a counter in a real application. Instead, you’d probably want to create this.state.history variable that stores exactly which button was clicked at which point as an array of the current state at different points in time.
Then, if you need a click count, you can access it with this.state.history.length, and that click count will be correct even if you undo past changes.

#### Reference link
- [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)
