import React from "react";
import './Header.css';

class Header extends React.Component {
  
  render(){
    return (
      <div className="header-container">
        <div className="header-title">
          <h1 className="tracking-in-contract">ITCS 6112 Diversity</h1>
          <h3 className="tracking-in-contract-delay">Project 4</h3>
        </div>
      </div>
    );
  }
}

export default Header;
