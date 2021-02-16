import React, { Component } from 'react'

import Home from './component/Home.component'
import Login from './component/Login.component';

// const initlog=false;
let  currentUser  ={};
let  isloggedIn =false ;
export default class App extends Component {
 
  constructor(props) {    
    super(props);
     currentUser = localStorage.getItem('user'); // localStorage.removeItem('user')
     isloggedIn = localStorage.getItem('loggedIn') ;  // localStorage.removeItem('loggedIn')
    this.state = {
      loggedIn: localStorage.getItem('loggedIn') === "true" ?  true : false,
      user: {
        email: currentUser ? currentUser.email : '',
      },
    }
  }
  DoIdsd(){
    localStorage.removeItem('user')
    localStorage.removeItem('loggedIn')
    this.setState({ loggedIn: false, user: null})
  }
  render() {
      console.log('this.state.loggedIn',this.state.loggedIn)
    
    const app = this.state.loggedIn?
    <Home signout={() =>  this.DoIdsd()  }  />  :
    <Login signIn={(user) => this.setState({ loggedIn: true, user: user })} />;

    return (
      <div>
        {app}
      
      </div>
    )
  }
}

