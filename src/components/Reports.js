import React from 'react'
import ReportItem from './ReportItem'
import reports from '../stubs/reports'
import Sidebar from './Sibebar'
import reports from "../stubs/reports";

class Reports extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: []
        }
      }

    getReports(){
        setTimeout(() => {
          console.log('data is fetched');
          this.setState({
            data: reports
          })
        }, 400)
      }
    
    componentDidMount() {
        this.getReports();
    }
    
    render() {
        console.log(this.state.data)
        return(
            <div style={{ margin: '50px 0 0 200px' }}>
                <Sidebar /> 
                <h1> Отчёты </h1>
                <div className="ui cards">
                    {this.state.data.map(v => <ReportItem key={v.key} props={v} />)}
                </div>
            </div>   
        )
    }
}

export default Reports