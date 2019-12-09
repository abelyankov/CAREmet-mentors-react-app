import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        console.log(user);
        if (user.firstName && user.lastName && user.username && user.password && user.email) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="ui center aligned three column grid"
                 style={{display: "flex", align_items: "center", height: "100vh", margin: "100px"}}>
                <div className="column"></div>
                <div classNmae='column'>
                    <div className="ui segment">
                        <h2>Register</h2>
                        <form name="form" className='ui large form' onSubmit={this.handleSubmit}>
                            <div className={'field' + (submitted && !user.firstName ? ' has-error' : '')}>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="ui input" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                {submitted && !user.firstName &&
                                <div className="help-block">First Name is required</div>
                                }
                            </div>
                            <div className={'field' + (submitted && !user.lastName ? ' has-error' : '')}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} />
                                {submitted && !user.lastName &&
                                <div className="help-block">Last Name is required</div>
                                }
                            </div>
                            <div className={'field' + (submitted && !user.username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" value={user.username} onChange={this.handleChange} />
                                {submitted && !user.username &&
                                <div className="help-block">Username is required</div>
                                }
                            </div>

                            <div className={'field' + (submitted && !user.email ? ' has-error' : '')}>
                                <label htmlFor="username">Email</label>
                                <input type="email" name="email" value={user.email} onChange={this.handleChange} />
                                {submitted && !user.email &&
                                <div className="help-block">Username is required</div>
                                }
                            </div>

                            <div className={'field' + (submitted && !user.password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={user.password} onChange={this.handleChange} />
                                {submitted && !user.password &&
                                <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="field">
                                <button className="ui button primary">Register</button>
                                {registering}
                                <Link to="/login" className="ui button">Cancel</Link>
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
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };