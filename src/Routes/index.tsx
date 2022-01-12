import {Switch, Route} from "react-router-dom" 
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";


function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route path={"/dashboard"} component={Dashboard}/>
            </Switch>
        </div>
    )
}

export default Routes;