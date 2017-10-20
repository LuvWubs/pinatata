import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

//const React = require("react");
const Splash = require("./children/Splash");
const Game = require("./children/Game");
const axios = require("axios");

// Creating the Profile component

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.state = {
      isLoggedIn: false,
      currentUser:"",
      profileImg:""
    };
    //this.state = {loggedIn:"false", isLoggedIn="false"};
    //  this.state = {isLoggedIn:"false"};

  }
  loggedIn(loggedBoolean, data) {
    this.setState({isLoggedIn: loggedBoolean})
    this.setState({currentUser: data})
    console.log("current user", this.state.currentUser)
  }

  componentDidMount() {
    console.log("Checking Credentials");
    axios.get("/checkLogin")
    .then((response)=>{
      console.log("getting login info", response);
      if (response.data){
        this.setState({isLoggedIn:true})
        this.setState({currentUser:response.data})
      //  this.setState({profileImg:"/})
      }
      else{
        this.setState({isLoggedIn:false})
        this.setState({currentUser:''})

      }
      console.log(this.state.isLoggedIn);

    })
    .catch((error)=> {
    console.log(error);
    // this.setState({signUpError:"Wrong Username or Password"});
    // console.log(this.state.signUpError);
  });
    // Get the latest saved.

  }


  render() {
    // const Spla =() => <Splash />
    // // const Game =() => <Game />
    // let loggedIn = true;
    let displayComp;
    if (this.state.isLoggedIn) {
      displayComp = <Game loggedIn={this.loggedIn} currentUser={this.state.currentUser}/>;
    } else {
      displayComp = <Splash loggedIn={this.loggedIn}/>;
    }

    return (
      <nav>
        {displayComp}
      </nav>
    );

  }
};

module.exports = Main;
