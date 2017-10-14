import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
const axios = require("axios");
//const React = require("react");

const Profile = require("./Profile");
//const Profile = require("./Profile");
const BattleWindow = require("./BattleWindow");

//const Navbar = require("./Navbar");

// Creating the Profile component

class Game extends React.Component {
  constructor(props) {
    super(props);
    //
    this.logOut = this.logOut.bind(this);

    //  const currentUser=this.props.currentUser
    // this.state = {
    //  currentUser:"",
    //
    //
    // };

  }

  logOut() {
    axios.get('/logout').then(() => {

      this.props.loggedIn(false, "");

    }).catch((error) => {
      console.log(error);

    });
  };

  render() {
    const BattleRef = () => <BattleWindow currentUser={this.props.currentUser}/>
    const ProfileRef = () => <Profile currentUser={this.props.currentUser}/>
    return (

      <Router>
        <div className="game-container">
          <div className="game-nav">
            <h1 className="sub-title1">Pinatata</h1>
            <p className="sub-title2">
              <em>Own, Play, Love
              </em>
            </p>

            <div className='nav-links'>
              <button className='button logout-button' onClick={this.logOut}>LogOut</button>
              <Link to="/profile" className='game-link' style={{
                textDecoration: 'none'
              }}>Profile</Link>
              {/* </div>
                <div className='nav'> */}
              <Link to="/battle" className='game-link' style={{
                textDecoration: 'none'
              }}>Battle</Link>

            </div>
          </div>

          <div className='component-div'>
            <Switch>
              <Route path="/battle" component={BattleRef}/>
              <Route path="/profile" component={ProfileRef}/>
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
};

module.exports = Game;
