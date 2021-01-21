import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopMenu = (props) => {
    return (
        <div className="pt-0">
            <div className="row">
                <Navbar   expand="lg" className="flex-grow-1" style={{ backgroundColor: "#eaf1fb" }}>
                    <span
                        style={{ fontSize: "30px", cursor: "pointer" }}
                        className="openToggle ml-3"
                        onClick={props.toggleOpen}
                    >
                        &#9776;
                    </span>
                    <Nav className="menuItems flex-row flex-grow-1 justify-content-center">
                        <Nav.Item>
                         <span>Personal Wallet UI</span>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
            {props.children}
        </div>
    )
}

export default TopMenu
