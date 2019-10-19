import React from 'react'
import MentorRequestRepository from "../Repositories/MentorRequestRepository";
import Sidebar from "./Sibebar";

class MentorRequestDetailsComponent extends React.Component{
    render() {

        let mentorRepository = new MentorRequestRepository();

        let mentorRequest = mentorRepository.fetchMentorRequest(this.props.match.params.number);

        return(


            <div style={{ margin: '50px 0 0 200px' }}>

                <Sidebar />

                <h1>Name: {mentorRequest.name} {mentorRequest.surname}</h1>
                {/*<h1>Age: {mentorRequest.age}</h1>*/}
                {/*<h1>City: {mentorRequest.city}</h1>*/}
                {/*<h1>Phone number: {mentorRequest.phoneNumber}</h1>*/}
                {/*<h1>Work: {mentorRequest.work}</h1>*/}
                {/*<h1>Work Position: {mentorRequest.workPosition}</h1>*/}
                {/*<h1>Hobby: {mentorRequest.hobby}</h1>*/}
                {/*<h1>About : {mentorRequest.aboutYourSelf}</h1>*/}
                <div className="ui segment" style={{background: "rgba(0,0,0,0.03)", margin: "20px"}}>
                    <table className="ui very basic compact table">
                        <tbody>
                        <tr>
                            <td style={{width: "180px"}}>
                                Возраст
                            </td>
                            <td> {mentorRequest.age}</td>
                        </tr>
                        <tr>
                            <td style={{width: "180px"}}>Город</td>
                            <td> {mentorRequest.city} </td>
                        </tr>
                        <tr>
                            <td style={{width: "180px"}}>Phone number</td>
                            <td> {mentorRequest.phoneNumber} </td>
                        </tr>
                        <tr>
                            <td style={{width: "180px"}}>Work</td>
                            <td> {mentorRequest.work} </td>
                        </tr>
                        <tr>
                            <td style={{width: "180px"}}>Work Position</td>
                            <td> {mentorRequest.workPosition} </td>
                        </tr>
                        <tr>
                            <td style={{width: "180px"}}>Hobby</td>
                            <td> {mentorRequest.hobby} </td>
                        </tr>
                        <tr>
                            <td style={{width: "180px"}}>About</td>
                            <td> {mentorRequest.aboutYourSelf} </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default MentorRequestDetailsComponent