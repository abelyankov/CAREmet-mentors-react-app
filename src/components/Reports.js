import React from 'react'
import ReportItem from './ReportItem'

class Reports extends React.Component {
    render() {
        return(
            <div>
                <h1> Отчёты </h1>
                <div className="ui cards">
                    <ReportItem />
                </div>
            </div>   
        )
    }
}

export default Reports