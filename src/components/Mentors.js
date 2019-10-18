import React from 'react'
import TableItems from './TableItems'

class Mentors extends React.Component {
    render() {
        return(
            <div>
                <h1> Наставники </h1>

                <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Наставник</th>
                        <th>Ребенок</th>
                        <th>Куратор</th>
                        <th>Психолог</th>
                        <th>Город</th>
                        <th>Статус</th>
                        <th>Детский дом</th>
                        <th>Отчёты </th>
                    </tr>
                </thead>
                <tbody>
                    <TableItems />
                </tbody>
                </table>
            </div>
        )
    }
}

export default Mentors