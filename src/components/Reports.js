import React from 'react'
import ReportItem from './ReportItem'
import reports from '../stubs/reports'

class Reports extends React.Component {
    render() {
        return(
            <div>
                <h1> Отчёты </h1>
                <div className="ui cards">
                    reports.map(v => <ReportItem v />)
                </div>
            </div>   
        )
    }
}

export default Reports