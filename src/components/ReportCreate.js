import React, {useEffect, useState} from "react";
import {baseUrl} from "../constants/constants";
import {history} from "../helpers";


export default class ReportCreate extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {

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

    eventTitleHandler = (event) => {
        const value = event.currentTarget.value;
        this.setState({
            event_title: value
        })
    };

    submitHandler = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user.id);
        fetch(baseUrl + "users/" + user.id + "/reports", {
            method: "POST",
            headers: {'Authorization': user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
            .catch(error => console.log(error))
        history.goBack()
    };


    render(){
        return (
            <div>
                <form style={{
                    display: "flex",
                    flexDirection: "column"
                }} onSubmit={this.submitHandler}>

                    <input style={{padding: "16px", margin: "16px"}} type={"text"} placeholder={"title"} name={"title"} onChange={this.titleHandler} required />
                    <input style={{padding: "16px", margin: "16px"}} type={"date"} placeholder={"date"} name={"date"} onChange={this.dateHandler} required />
                    <input style={{padding: "16px", margin: "16px"}} type={"text"} placeholder={"status"} name={"status"} onChange={this.statusHandler} required/>
                    <input style={{padding: "16px", margin: "16px"}} type={"text"} placeholder={"text"} name={"text"} onChange={this.textHandler}  required/>
                    <input style={{padding: "16px", margin: "16px"}} type={"text"} placeholder={"event title"} name={"event_title"} onChange={this.eventTitleHandler} required />
                    <input type={"submit"}/>
                </form>
            </div>
        )
    }

}