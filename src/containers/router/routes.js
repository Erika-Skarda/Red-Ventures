import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../../utils/constants";
import Home from "../pages/home";
import NotFound from "../pages/notFound/NotFound";
import PlantsPage from "../pages/plantsPage";

function Routes(props){
    return(
        <Router>
            {/* <div className={"routes"}>
                <div className={"pages"}> */}
                    <Switch>
                        <Route exact path={"/"} component={Home} />
      
                        <Route exact path={routes.home} component={Home} />
                        <Route exact path={routes.plants} component={PlantsPage} />
                        <Route component={ NotFound }/>
                    </Switch>
                {/* </div>
            </div> */}
        </Router>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Routes)