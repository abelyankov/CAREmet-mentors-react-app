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

                <h1>Name: {mentorRequest.name}</h1>
                <h1>Age: {mentorRequest.age}</h1>
                <h1>City: {mentorRequest.city}</h1>
                <h1>Phone number: {mentorRequest.phoneNumber}</h1>
                <h1>Work: {mentorRequest.work}</h1>
                <h1>Work Position: {mentorRequest.workPosition}</h1>
                <h1>Hobby: {mentorRequest.hobby}</h1>
                <h1>About : {mentorRequest.aboutYourSelf}</h1>


            </div>
        )
    }
}

export default MentorRequestDetailsComponent