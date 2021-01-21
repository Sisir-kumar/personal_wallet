import React from 'react'
import { Link } from "react-router-dom";
const Menu = () => {
    let currentPath = window.location.pathname;
    return (
        <div  style={{ backgroundColor: "#eaf1fb" }}>
            <nav id="sidebar pt-5"  >
               <ul className="list-unstyled ">
                   <li style={
							currentPath === "/"
								? { backgroundColor: '#093e87' }
								: null
                        }
                        className="px-3 py-2 border-bottom border-gray  "
                        >
                        <Link className="text-decoration-none" to="/">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }>All Wallets</span>
                        </Link>
                    </li>
                    <li 
                    className="px-3 py-2 border-bottom border-gray "
                    style={
							currentPath === "/newwallet"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="/newwallet">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/newwallet"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }>New Wallets</span>
                        </Link>
                    </li> <li
                    className="px-3 py-2 border-bottom border-gray"
                    style={
							currentPath === "/check_balance"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="check_balance">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/check_balance"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }>Check Balance</span>
                        </Link>
                    </li> <li
                    className="px-3 py-2 border-bottom border-gray"
                     style={
							currentPath === "/addfund"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="addfund">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/addfund"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }>Add Funds</span>
                        </Link>
                    </li>
                    <li
                    className="px-3 py-2 border-bottom border-gray" 
                    style={
							currentPath === "/spendfund"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="spendfund">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/spendfund"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }>Spend Funds</span>
                        </Link>
                    </li>
                    <li
                    className="px-3 py-2 border-bottom border-gray" 
                    style={
							currentPath === "/all_transaction"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="all_transaction">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/all_transaction"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }>All Transaction</span>
                        </Link>
                    </li>
               </ul>
            </nav>
        </div>
    )
}

export default Menu
