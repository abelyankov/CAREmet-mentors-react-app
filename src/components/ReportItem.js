import React from 'react'

class ReportItem extends React.Component {
    render() {
        const { status, title, date, text, sender, event_title} = this.props.props;
        
        return(
            <div className="ui card">
                {status === 'approved' ?
                <div className="ui green top attached label" style={{text_align: "center"}}>
                    Одобрен
                </div>:  
                <div className="ui red top attached label" style={{text_align: "center"}}>
                    Отклонён
                </div>}
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">{date}</div>
                    <div className="description">{text}</div>
                </div>
                <div className="extra content">
                    <p>{sender}. {event_title}</p>
                </div>
            </div>
        )
    }
}

export default ReportItem