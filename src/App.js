import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appoinment/Appointment/Appointment';



function App() {
  return (
    <Router >
      <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/appoinment">
         <Appointment />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
