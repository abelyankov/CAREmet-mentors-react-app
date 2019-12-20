import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import Reports from '../components/Reports';
import { ProfilePage }  from "../ProfilePage";
import MentorRequestsRoutes from "../components/MentorRequestList";
import {firebaseAuth} from "../firebase/FireBaseConnectr";
import ReportCreate from "../components/ReportCreate";
import ReportEdit from "../components/ReportEdit";

class App extends React.Component {
  constructor(props) {
    super(props);


    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
              {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Router history={history}>
                <Switch>
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/login" component={ LoginPage } />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/reports" component={ Reports } />
                  <Route path="/profile" component={ ProfilePage }/>
                  <Route path="/reports" component={Reports} />
                  <Route path="/create" component = {ReportCreate}/>
                  <Route path="/edit" component = {ReportEdit}/>
                  <Route path="/mentorRequests" component={MentorRequestsRoutes} />
                  <Redirect from="*" to="/" />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };