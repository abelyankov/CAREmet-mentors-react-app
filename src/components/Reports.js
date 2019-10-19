import React from 'react'
import ReportItem from './ReportItem'
import reports from '../stubs/reports'
import Sidebar from './Sibebar'

class Reports extends React.Component {
    render() {
        return(
            <div style={{ margin: '50px 0 0 200px' }}>
                <Sidebar /> 
                <h1> Отчёты </h1>
                    
                <div className="ui cards">
                    {reports.map(v => <ReportItem key={v.key} props={v} />)}
                    {/* <ReportItem /> */}
                </div>
            </div>   
        )
    }
}

export default Reports