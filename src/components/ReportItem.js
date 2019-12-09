import React from 'react'
import {baseUrl} from "../constants/constants";
import {history} from "../helpers";
import {Button} from "semantic-ui-react";

function ReportItem(props) {

        const {_id, status, title, date, text, sender, event_title} = props.props;
        return(
            <div className="ui card">
                {status === 'approved' ?
                <div className="ui green top attached label" style={{text_align: "center"}}>
                    Одобрен
                </div>:
                <div className="ui red top attached label" style={{text_align: "center"}}>
                    Отклонён
                </div>}
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">{date}</div>
                    <div className="description">{text}</div>
                </div>
                <div className="extra content">
                    <p>{sender}. {event_title}</p>
                    <div className="ui two buttons">
                        <div className="ui basic green button">Edit</div>
                        <Button onClick={(event)=> {
                            const user = JSON.parse(localStorage.getItem("user"));
                            fetch(baseUrl + "users/" + user.id + "/reports/" + _id,{
                                method: "DELETE",
                                headers: {"Authorization":user.token}
                            } ).then(res => res.json()).then(res => {
                                window.location.reload();
                                return res
                            })
                        }} className="ui basic red button">Delete</Button>
                    </div>
                </div>
            </div>
        )
}

export default ReportItem
