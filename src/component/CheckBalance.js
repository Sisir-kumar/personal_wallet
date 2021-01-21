import React, { Component } from 'react'
import {Layout} from './Element'
  
let userData =[
    {user_id:1,name:"Sisir",phone:8339943466,balance:654},
    {user_id:2,name:"Syam",phone:9337026984,balance:6534},
    {user_id:3,name:"Ram",phone:8339943466,balance:6354}
]
export class CheckBalance extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:""
        }
    }

    componentDidMount(){
        //here u call the api get all the user details
    }
    checkBalance =(e) =>{
        e.preventDefault()
        const {user} =this.state
        alert(`user balance is ${user}`)
    }
    
    render() {
        return (
            <Layout>
                <div className="mt-5 ml-5">
                    <form class="form-group row" onSubmit={this.checkBalance}>
                        <label for="inputPhone" class="col-sm-2 col-form-label">User</label>
                        <div class="col-sm-4">
                            <select class="custom-select" value={this.state.user} onChange={(e)=>this.setState({user:e.target.value})}>
                                <option selected>Select User</option>
                                {userData.map(a=><option value={a.balance}>{a.name}</option>)}
                                
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary mb-2 ml-5">Get Balance</button>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default CheckBalance
