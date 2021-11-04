import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div className="relative min-h-screen md:flex">

            <Router>

                <Sidebar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/order">
                        <Order />
                    </Route>
                </Switch>
                
            </Router>

        </div>

    )
}

export default App;
