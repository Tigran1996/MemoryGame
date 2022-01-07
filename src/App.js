import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MemoryGame from "./components/MemoryGame/MemoryGame"

const routes = [
    {path: "/", name: "memoryGame", Component: MemoryGame}
]

function App() {
    return (
        <Router>
            <Switch>
                {routes.map(({path, Component}) => (
                    <Route key={path} exact path={path}>
                        <Component/>
                    </Route>
                ))}
            </Switch>
        </Router>

    )
}

export default App;
