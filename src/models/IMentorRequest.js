class MentorRequest {

    constructor(id,
                name,
                surname,
                city,
                phoneNumber,
                work,
                workPosition,
                hobby,
                assigned,
                age){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.work = work;
        this.workPosition = workPosition;
        this.hobby = hobby;
        this.assigned = assigned;
        this.age = age;
        this.aboutYourSelf = "Ya ochen' horoshiy metor potomu shto ya tasher"
    }
}

export default MentorRequest
