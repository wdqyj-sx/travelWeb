import React from 'react';
import styles from "./App.module.css";
import {Home, Register, Detail, SignIn} from "./page"
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}></Route>
                    <Route path={"/register"} component={Register}></Route>
                    <Route path={"/signIn"} component={SignIn}></Route>
                    <Route path={"/detail/:ItouristRouted"} component={Detail}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
