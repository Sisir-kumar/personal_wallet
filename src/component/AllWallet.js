import React, { Component } from 'react'
import {Layout} from './Element'
import Table from 'react-bootstrap/Table'
let userData =[
    {user_id:1,name:"Sisir",phone:8339943466,balance:654},
    {user_id:2,name:"Syam",phone:9337026984,balance:6534},
    {user_id:3,name:"Ram",phone:8339943466,balance:6354}
]

class AllWallet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
  componentDidCatch(){
      // here u call the api and use the data
  }

    
    render() {
        return (
            <Layout>
                <div>
                   <Table>
                   <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Balance(Rs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((a)=><tr>
                            <td>{a.user_id}</td>
                            <td>{a.name}</td>
                            <td>{a.phone}</td>
                            <td>{a.balance}</td>
                        </tr>)}
                    </tbody>
                   </Table>
                </div>
            </Layout>
        )
    }
}

export default AllWallet
