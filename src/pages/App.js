import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Nav from "./components/nav";

import navBarValue from "../configs/navBarValue";

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, far, fas);

function App() {
  const [sideBar,setSideBar]=useState(false);
  const sideBarTools = () =>{
    setSideBar(!sideBar);
    console.log(sideBar);
  }
  return (    
    <Router>
       <div >  
        <div className="flex flex-col w-full md:flex md:flex-row md:min-h-screen">
          <Nav onClick={sideBarTools} show={sideBar}/>
          <div className={`${sideBar===true?"pt-72 md:pt-0 md:pl-64 duration-700":"p-0 duration-700"} w-screen h-full`}>
            <Switch>
              {navBarValue? 
                navBarValue.map((data,id)=>
                  <Route 
                    key={id} 
                    path={data.Path} 
                    exact 
                    children={<data.Compenent/>}/>  
                )
              :" "}
            </Switch> 
          </div>
        </div>  
      </div>
    </Router>    
  );
}

export default App;
