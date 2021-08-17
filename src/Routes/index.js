import {Route, Switch } from "react-router-dom";
import Coins from "../Pages/Coins";
import Bank from "../Pages/Bank/index";
import Login from "../Pages/Login/index"

export default function Routes() {
    return (
        
            <Switch>
                <Route path="/" exact={true} component={Coins}/>
                <Route path="/bank" exact={true} component={Bank}/>
                <Route path="/login" exact={true} component={Login}/>
            </Switch>
      
    )
}
