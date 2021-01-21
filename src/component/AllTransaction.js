import React, { Component } from 'react'
import {Layout} from './Element'
import Table from 'react-bootstrap/Table'


let tranData =[
    {name:"Sisir",balance:654,amount:456,date:"2020 jan ,5pm"},
    {name:"Syam",balance:6534,amount:575,date:"2020 mar ,7pm"},
    {name:"Ram",balance:6354,amount:767,date:"2020 fab ,5pm"}
]
export class AllTransaction extends Component {


    componentDidMount(){
        //call the api get all the transaction
    }
    render() {
        return (
            <Layout>
                 <div>
                   <Table>
                   <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Balance(Rs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tranData.map(a=><tr>
                            <td>{a.name}</td>
                            <td>{a.date}</td>
                            <td>{a.amount}</td>
                            <td>{a.balance}</td>
                        </tr>)}
                    </tbody>
                   </Table>
                </div>
            </Layout>
        )
    }
}

export default AllTransaction
