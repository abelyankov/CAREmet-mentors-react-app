import React from 'react'
import {Link} from "react-router-dom";

 class MentorRequestComponent extends React.Component {
    render() {

        const {mentorRequest} = this.props;

        return <div className="ui card">
            <div className="content">

                <Link to={`/mentorRequests/${mentorRequest.id}`} className="header">
                    {mentorRequest.name} {mentorRequest.surname}
                </Link>

                <div className="meta">
                    <span className="age"> {mentorRequest.age}</span>
                <br/>
                <span className="phone-number">
                    {mentorRequest.phoneNumber}
                 </span>
                <span className="email">
                    {mentorRequest.name}
                </span>
            </div>
            <div className="description">
                О себе: {mentorRequest.aboutYourSelf} ;<br/>
                Адрес: Город {mentorRequest.city} <br/>
                Опыт с детьми: Нет опыта
            </div>
            <div className="full_description_">
                Семейное положение:

                Работа: {mentorRequest.work}
                Должность: {mentorRequest.workPosition} <br/>

                Хобби: {mentorRequest.hobby} <br/>

                Машина:  Est'<br/>
            </div>
            </div>
        </div>

    }
}

export default MentorRequestComponent