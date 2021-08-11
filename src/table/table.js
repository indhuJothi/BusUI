import React from 'react'
import './table.css'
import Search from '../search/search';
class Table extends React.Component{
    constructor(){
        super();

    }




    render(){
        return(
            <div>
                <table class='table'>
                    <thead class="thead">
                    <tr>
                    <th class='head'>From</th>
                    <th class='head'>To</th>
                    <th class='head'>Date</th>
                    <th class='head'>No of Passengers</th>
                    <th class='head'>Bus Number</th>
                    <th class='head'>Bus Name</th>
                    <th class='head'>Fare</th>
                    </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr>
                            <td>chennai</td>
                            <td>Madurai</td>
                            <td>12-08-2020</td>
                            <td>2</td>
                            <td>TN543</td>
                            <td>Red Bus</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>coimbatore</td>
                            <td>Trichy</td>
                            <td>31-09-2020</td>
                            <td>1</td>
                            <td>TN523</td>
                            <td>Blue Bus</td>
                            <td>150</td>
                        </tr>
                    </tbody>
                </table>
                <span class='search'>
              <Search/>
              </span>
            </div>
        )
    }
}


export default Table