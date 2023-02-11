import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";


function App() {
    return (
        <div>
            <Header />
            <Body />    
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.root'))