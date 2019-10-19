import MentorRequest from "../models/IMentorRequest";

class MentorRequestRepository {

    constructor(){
        let mentorRequestList = [];

        for(let i=0; i<10; i++ ){
            let  mentorRequest = new MentorRequest(
                i,
                "Serega",
                "Sergeev",
                "Almaty",
                "87078364815",
                "Prosto back-office",
                "Programmer",
                "Play games",
                false,
                24
            );

            mentorRequestList.push(
                mentorRequest
            )

        }

        this.mentorRequestList = mentorRequestList

    }

    fetchMentorRequests(){
        return this.mentorRequestList
    }

    fetchMentorRequest(id){
        this.mentorRequestList.forEach(function (mentorRequest) {
            if(mentorRequest.id === id){
                return mentorRequest
            }
        });

        return new MentorRequest(
            10,
            "Serega",
            "Sergeev",
            "Almaty",
            "87078364815",
            "Prosto back-office",
            "Programmer",
            "Play games",
            false,
            24
        );
    }


}

export default MentorRequestRepository

