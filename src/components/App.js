import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
const [page, setPage] = useState("/")

  return <div>
     <NavBar onChangePage={setPage} />
            <Switch>
                
                <Route path="/actors">
                    <Actors />
                </Route>
                <Route path="/directors">
                    <Directors />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/">
                    <Home />
                </Route>   
            </Switch>
  </div>;
}

export default App;
