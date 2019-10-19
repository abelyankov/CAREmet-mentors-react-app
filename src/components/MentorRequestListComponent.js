import React from 'react'
import MentorRequestComponent from "./MentorRequestComponent";
import MentorRequestRepository from "../Repositories/MentorRequestRepository";
import Sidebar from "./Sibebar";


 class MentorRequestListComponent extends React.Component{

     render() {
         let repository = new MentorRequestRepository();

         return (
           <div style={{ margin: '50px 0 0 200px'}}>
           <Sidebar />
           <h1> Наставники </h1>

               <div className="ui cards">
                {
                    repository.mentorRequestList.map((mentorRequest) => {
                        return <MentorRequestComponent
                            key={mentorRequest.id}
                            mentorRequest = {mentorRequest}
                        />
                    })
                }
               </div>
           </div>
        )
    }
}

export default MentorRequestListComponent