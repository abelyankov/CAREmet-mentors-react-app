import React, {useEffect, useState} from "react";


export default class ReportEdit extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: props.title || "",
            status: props.status || "",
            date: props.date || "",
            text: props.text || "",
            sender: props.sender || "",
            eventTitle: props.eventTitle || ""
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
        console.log(JSON.stringify(this.state))
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