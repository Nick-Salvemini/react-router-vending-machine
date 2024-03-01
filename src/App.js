import Snickers from "./Snickers";
import Reeses from "./Reeses";
import KettleChips from "./KettleChips";
import NavBar from "./NavBar";
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" >
            <VendingMachine />
          </Route>
          <Route exact path="/kettle_chips">
            <KettleChips />
          </Route>
          <Route exact path="/snickers">
            <Snickers />
          </Route>
          <Route exact path="/reeses">
            <Reeses />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
