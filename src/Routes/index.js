import {Route, Switch } from "react-router-dom";
import Coins from "../Pages/Coins";
import Bank from "../Pages/Bank/index";
import Login from "../Pages/Login/index"
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import { useLogged } from "../Context/Logged.js";


export default function Routes() {
    
    const { logged } = useLogged()


    if(logged === "yes"){
        return(

            <Switch>
                <Route path="/" exact={true} component={Coins}/>
                <Route path="/bank" exact={true} component={Bank}/>
                <Route path="/login" exact={true} component={Login}/>
                <Route path="/register" exact={true} component={Register} />
            </Switch>
                 )
    }

    return (
            <Switch>
                <Route path="/login" exact={true} component={Login}/>
                <Route path="/register" exact={true} component={Register} />
                <Route path="/" exact={true} component={NotFound}/>
                <Route path="/bank" exact={true} component={NotFound}/>
            </Switch>
                
    )
}
