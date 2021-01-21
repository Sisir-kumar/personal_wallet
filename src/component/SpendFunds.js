import React, { Component } from 'react'
import {Layout} from './Element'

let userData =[
    {user_id:1,name:"Sisir",phone:8339943466,balance:654},
    {user_id:2,name:"Syam",phone:9337026984,balance:6534},
    {user_id:3,name:"Ram",phone:8339943466,balance:6354}
]
export class SpendFunds extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:"",
             amount:""
        }
    }
    spendFunds = () =>{
        //onclick all  api 
    }
    render() {
        return (
            <Layout>
                 <form className="mt-5 ml-5" onSubmit={this.spendFunds}>
                    <div class="form-group row">
                        <label for="inputPhone" class="col-sm-2 col-form-label">User</label>
                        <div class="col-sm-4">
                            <select class="custom-select" value={this.state.user} onChange={(e)=>this.setState({user:e.target.value})}>
                                <option selected>Select User</option>
                                {userData.map(a=><option value={a.balance}>{a.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div class="form-group row mt-5">
                            <label for="inputAmount" class="col-sm-2 col-form-label">Amount(Rs)</label>
                            <div class="col-sm-4">
                            <input type="number" class="form-control" id="inputAmount" placeholder="Amount"  value={this.state.amount} onChange={(e)=>this.setState({amount:e.target.value})} />
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </div>
                </form>
            </Layout>
        )
    }
}

export default SpendFunds
