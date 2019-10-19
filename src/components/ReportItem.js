import React from 'react'

class ReportItem extends React.Component {
    render() {
        return(
            <div className="ui card">
                <div className="ui top attached label" style={{text_align: "center"}}>
                    Отправлен
                </div>
                <div className="content">
                    <div className="header"></div>
                    <div className="meta"></div>
                    <div className="description"></div>
                </div>
                <div className="extra content">

                </div>
            </div>
        )
    }
}

export default ReportItem