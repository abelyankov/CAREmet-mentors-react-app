import React from "react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import MentorRequestListComponent from "./MentorRequestListComponent";
import MentorRequestDetailsComponent from "./MentorRequestDetailsComponent";

const MentorRequestsRoutes = () => (
    <div>
        <Switch>
            <Route exact path='/mentorRequests' component={MentorRequestListComponent}/>
            <Route path='/mentorRequests/:number' component={MentorRequestDetailsComponent}/>
        </Switch>
    </div>
);
export default MentorRequestsRoutes