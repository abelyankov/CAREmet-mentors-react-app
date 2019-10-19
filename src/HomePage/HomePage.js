import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sibebar';
import { userActions } from '../actions';
import Reports from '../components/Reports';
import MentorsMentorRequestListComponent from '../components/MentorRequestListComponent'

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <Sidebar />
                <div style={{ margin: '50px 0 0 200px' }}>  
                    <h1>Добрый день, {user.firstName}!</h1>
                    <div className="ui grid">
                        <div className="eight wide column">
                            <Reports />
                        </div>
                        <div className="eight wide column">
                            <MentorsMentorRequestListComponent />
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };