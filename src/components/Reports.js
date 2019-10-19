import React from 'react'
import ReportItem from './ReportItem'
import Sidebar from './Sibebar'

class Reports extends React.Component {
    render() {
        return(
            <div>
                <Sidebar />
                <div style={{ margin: '50px 0 0 200px' }}>  
                <h1> Отчёты </h1>
                    
                </div>
                <div className="ui cards">
                    <ReportItem />
                </div>
            </div>   
        )
    }
}

export default Reports