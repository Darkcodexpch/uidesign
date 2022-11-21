import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Construction from './Pages/Construction'
import Contact from './Pages/Contact'
import Header from './Components/Header'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/construction">
                    <Construction />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
