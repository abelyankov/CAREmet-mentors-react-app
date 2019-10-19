import React from 'react'
import Sidebar from '../components/Sibebar'
import { userActions } from '../actions';
import { connect } from 'react-redux';

class ProfilePage extends  React.Component {

    render() {
        const { user } = this.props;
        console.log(user);
        return (
            <div style={{margin: '50px 0 0 200px'}}>
                <Sidebar/>
                <h1> Профиль </h1>
                <div className="ui segment" style={{background: "rgba(0,0,0,0.03)", margin: "20px"}}>
                    <table className="ui very basic compact table">
                        <tr>
                            <td style={{width: "180px"}}>Имя и фамилия:</td>
                            <td> {user.firstName} {user.lastName}</td>
                        </tr>
                        <tr>
                            <td style={{width: "180px"}}>Имя пользователя:</td>
                            <td> {user.username} </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}
const actionCreators = {
    getUsers: userActions.getAll,
};

const connectedProfilePage = connect(mapState,actionCreators)(ProfilePage);

export { connectedProfilePage as ProfilePage }