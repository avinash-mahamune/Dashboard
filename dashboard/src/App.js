import React, { Component } from 'react';

import $ from 'jquery';
// import ReactDOM from 'react-dom';
import {findDOMNode} from 'react-dom';
import SideNavbar from './Dashboard/SideNanbar/SideNavbar'
import Topbar from './Dashboard/TopNavbar/Topbar'
import './style/style.scss'

// import './App.scss';




  class App extends Component{
    render(){
      return (
        <div className="App">
          <div className="sideNavbarWrapper">
          <SideNavbar />
          </div>
          
          <div>
            <Topbar />
          </div>

          <div className="main-content">
           <div>
             
           </div>
          </div>
        </div>
      );
    }


    
  }



export default App;
