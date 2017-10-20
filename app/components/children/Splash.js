import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
const axios = require("axios");
//const React = require("react");

const SignUp = require("./SignUp");
//const Profile = require("./Profile");
const SignIn = require("./SignIn");

 const DonkeyIntro = require("./donkey_intro");
//const ObjViewer = require("./object-viewer");

const Simple= require("./pinata_anim");

const GreenS= require("./gsexe");


// Creating the Profile component

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.makeUser = this.makeUser.bind(this);
    this.signInUser = this.signInUser.bind(this);
    this.clearError = this.clearError.bind(this);

    //        this.render= this.render.bind(this);

    this.state = {
      user: "",
      isLoggedIn: "",
      signUpError: ""

    };

  }

  makeUser(user) {
    console.log("inSplash", user)
    axios.post("/put_newuser_in_db", user).then((response) => {
      console.log(response);
      this.setState({signUpError: ""});
      this.setState({isLoggedIn: true});
      this.props.loggedIn(this.state.isLoggedIn, response.data);
    }).catch((error) => {
      console.log(error);
      this.setState({signUpError: "Username is taken"});
      this.setState({isLoggedIn: false});
      console.log(this.state.signUpError);
    });
  }

  signInUser(user) {
    console.log("inSplash", user)
    axios.post("/signin", user).then((response) => {
      console.log("signed In", response);
      this.setState({signUpError: ""});
      this.setState({isLoggedIn: true});
      this.props.loggedIn(this.state.isLoggedIn, response.data);

    }).catch((error) => {
      console.log(error);
      this.setState({signUpError: "Wrong Username or Password"});
      this.setState({isLoggedIn: false});
      console.log(this.state.signUpError);
    });
  }

  componentDidMount() {
    console.log("here!!");
    // Get the latest saved.

  }

  setLoggedIn(isLoggedIn) {};

  componentDidUpdate() {
    console.log("here");

  }

  clearError(event) {
    this.setState({signUpError: ""});
  }

  render() {

    const Sign_up = () => <SignUp makeUser={this.makeUser}/>
    const Sign_in = () => <SignIn signInUser={this.signInUser}/>
    const Anim=()=><Simple />
    const Anim2=()=><DonkeyIntro />
    const Green=()=><GreenS />
    return (
    <div>
      <Router>

        {/* <Simple /> */}
        <div className="container">

        <div className="auth-container">
          <div className="jumbotron">
            <h1 className="sub-title1">Pinatata</h1>
            <p className="sub-title2">
              <em>Grow, Fight, Play, Love
              </em>
            </p>
            <div className="sign-up-error">{this.state.signUpError}</div>

            <div className='nav-links'>

              <Link to="/signup" onClick={this.clearError} className='link-auth' style={{
                textDecoration: 'none'
              }}>signup</Link>
              {/* </div>
                <div className='nav'> */}
              <Link to="/signin" onClick={this.clearError} className='link-auth' style={{
                textDecoration: 'none'
              }}>signin</Link>

              <Link to="/anim" className='link-auth' style={{
                textDecoration: 'none'
              }}>anim</Link>

              <Link to="/anim2" className='link-auth' style={{
                textDecoration: 'none'
              }}>anim2</Link>

              <Link to="/green" className='link-auth' style={{
                textDecoration: 'none'
              }}>greensock</Link>

            </div>
          </div>

          <div className='component-div'>
            <Switch>
              <Route path="/signin" component={Sign_in}/>
              <Route path="/signup" component={Sign_up}/>
              <Route path="/anim" component={Anim}/>
              <Route path="/anim2" component={Anim2}/>
              <Route path="/green" component={Green}/>
            </Switch>
          </div>
        </div>
      </div>
      </Router>
      <div id='donkeyDiv' className='donkeyIntro'><DonkeyIntro /></div>
    </div>
  )

  }
};

module.exports = Splash;
