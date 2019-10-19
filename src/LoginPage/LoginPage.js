import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="ui center aligned three column grid"
                 style={{display: "flex", align_items: "center", height: "100vh", margin: "100px"}}>
                <div className="column"></div>
                <div className="column">
                    <div className="ui segment">
                        <form name="form" className='ui large form' onSubmit={this.handleSubmit}>
                            <div className={'field' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                <div className="help-block">Username is required</div>}
                            </div>
                            <div className={'field' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="field">
                                <button className="ui small button primary">Login</button>
                                <Link to="/register" className="ui small button">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };