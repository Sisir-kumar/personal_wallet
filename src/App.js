
import './App.css';
import { Switch ,Route,BrowserRouter as Router} from "react-router-dom";
import AllWallet from './component/AllWallet';
import NewWallet from './component/NewWallet';
import CheckBalance from './component/CheckBalance';
import AddFunds from './component/AddFunds';
import SpendFunds from './component/SpendFunds';
import AllTransaction from './component/AllTransaction'
function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" component={AllWallet} />        
          <Route exact path="/check_balance" component={CheckBalance} />        
          <Route exact path="/addfund" component={AddFunds} />        
          <Route exact  path="/newwallet"component={NewWallet} />        
          <Route exact  path="/spendfund"component={SpendFunds} />        
          <Route exact path="/all_transaction" component={AllTransaction} />       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
