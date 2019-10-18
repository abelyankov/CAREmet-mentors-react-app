import React from 'react'

class ReportItem extends React.Component {
    render() {
        return(
            <div class="ui card">
                <div class="ui top attached label" style="text-align: center">
                    Отправлен
                </div>
                <div class="content">
                    <div class="header"></div>
                    <div class="meta"></div>
                    <div class="description"></div>
                </div>
                <div class="extra content">

                </div>
            </div>
        )
    }
}

export default ReportItem