import React, { Component } from 'react'
import {Layout} from './Element'

export class NewWallet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
            phone:"",
            amount:""
        }
    }
    
    render() {
        return (
            <Layout>
                <div className="mt-5">
                    <form onSubmit={this.handleSumbit}>
                       <div class="form-group row">
                            <label for="staticName" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-4">
                            <input type="text"  class="form-control" id="staticName" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-4">
                            <input type="number" class="form-control" id="inputPhone" placeholder="Phone" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputAmount" class="col-sm-2 col-form-label">Amount(Rs)</label>
                            <div class="col-sm-4">
                            <input type="number" class="form-control" id="inputAmount" placeholder="Amount" value={this.state.amount} onChange={(e)=>this.setState({amount:e.target.value})} />
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                        </div>
            
                    </form>
                </div>
            </Layout>
        )
    }


    handleSumbit = ()=>{
        // here u all the api and post the dada
    }
}

export default NewWallet
