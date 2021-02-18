import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Navbar.component'
import history from '../history';



export default function Home(props){
    
        return (
           
            <div className="col-md-12">
              
                <Router history={history}>
                    <NavBar signout={props.signout}/>
                    {/* <Route path="/addUser" exact component={addUser} />                         */}


                </Router>
             </div>
             
        )
    
}
                        