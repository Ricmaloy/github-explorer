import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { User } from "../pages/User";

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:user" component={User} />
            </Switch>
        </BrowserRouter>
    )
}