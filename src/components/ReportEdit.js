import React from "react";
import {baseUrl} from "../constants/constants";
import {history} from "../helpers";


export default class ReportEdit extends React.Component {

    constructor(props){
        super(props);
        console.log(props.location.state);
        const data = props.location.state.data;
        this.state = {
            title: data.title || "",
            status: data.status || "",
            date: data.date || "",
            text: data.text || "",
            sender: data.sender || "",
            eventTitle: data.event_title || "",
            _id: data.id||""
        }
    }

    titleHandler = (event) => {
        const value = event.currentTarget.value;
        this.setState({
            title: value
        })
    };
    statusHandler = (event) => {
        const value = event.currentTarget.value;
        this.setState({
            status: value
        })
    };
    dateHandler = (event) => {
        const value = event.currentTarget.value;
        this.setState({
            date: value
        })
    };
    textHandler = (event) => {
        const value = event.currentTarget.value;
        this.setState({
            text: value
        })
    };
    senderHandler = (event) => {
        const value = event.currentTarget.value;
        this.setState({
            sender: value
        })
    };
    eventTitleHandler = (event) => {
        const value = event.currentTarget.value;
        this.setState({
            eventTitle: value
        })
    };

    submitHandler = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        fetch(baseUrl + "users/" + user.id + "/reports/" +this.state._id,{
            method: "PUT",
            headers: {"Authorization":user.token},
            body: JSON.stringify(this.state)
        } ).then(res => res.json()).then(res => {
            history.back();
            return res
        })
    };


    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <input type={"text"} placeholder={"title"} value={this.state.title} name={"title"} onChange={this.titleHandler} required />
                    <input type={"text"} placeholder={"date"} value={this.state.date} name={"date"} onChange={this.dateHandler} required />
                    <input type={"text"} placeholder={"status"} value={this.state.status} name={"status"} onChange={this.statusHandler} required/>
                    <input type={"text"} placeholder={"text"} value={this.state.text} name={"text"} onChange={this.textHandler}  required/>
                    <input type={"text"} placeholder={"sender"} value={this.state.sender} name={"sender"} onChange={this.senderHandler}  required/>
                    <input type={"text"} placeholder={"event title"} value={this.state.eventTitle} name={"event_title"} onChange={this.eventTitleHandler} required />

                    <input type={"submit"}/>
                </form>
            </div>
        )
    }

}