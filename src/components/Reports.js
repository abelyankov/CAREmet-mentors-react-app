import React from 'react'
import ReportItem from './ReportItem'
import Sidebar from './Sibebar'
import {baseUrl} from "../constants/constants";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
class Reports extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: [],
          filterMethod: "1"
        }
      }

    getReports(){
        const user = JSON.parse(localStorage.getItem("user"));
        fetch(baseUrl  + "users/"+ user.id + "/reports?filter=" + this.state.filterMethod, {
            method: "GET",
            headers: {"Authorization": user.token}
        }).then(res => res.json()).then(res => {
            console.log(res);
            this.setState({
                data: res
            })
        })
    }
    
    componentDidMount() {
        this.getReports();
    }

    filterUp = (event) => {
        this.setState({ filterMethod : "1"} );

        this.getReports()
    };

    filterDown = (event) => {
        this.setState({ filterMethod : "-1"} );
        this.getReports()
    };

    
    render() {
        return(
            <div>
                <Sidebar />
                <div style={{ margin: '50px 0 0 200px' }}>

                    <Button onClick={this.filterUp}>Filter by date up</Button>
                    <Button onClick={this.filterDown}>Filter by date down</Button>
                    <Link to={`/create`}><Button>Создать</Button></Link>
                    <h1> Отчёты </h1>
                    <div className="ui cards">
                        {this.state.data.map(v => <ReportItem key={v._id} props={v} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Reports