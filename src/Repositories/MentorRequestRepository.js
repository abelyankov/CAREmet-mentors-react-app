import IMentorRequest from "../models/IMentorRequest";


class MentorRequestRepository {

    mentorRequestList = [] ;

    init(){
        for(let i=0; i<10; i++ ){
            this.mentorRequestList.push(
                new IMentorRequest(
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
                )
            )
        }

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

        return new IMentorRequest(
            12,
            "Serega",
            "Sergeev",
            "Almaty",
            "87078364815",
            "Prosto back-office",
            "Programmer",
            "Play games",
            false,
            24
        )
    }


}

export default MentorRequestRepository

