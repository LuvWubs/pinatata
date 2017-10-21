import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
const axios = require("axios");
//const React = require("react");

const Profile = require("./Profile");
//const Profile = require("./Profile");
const BattleWindow = require("./donkey");
const PinataProfile = require("./pinataProfile")

//const Navbar = require("./Navbar");

// Creating the Profile component

class Game extends React.Component {
  constructor(props) {
    super(props);
    //
    this.logOut = this.logOut.bind(this);

    this.state = {
      profileIsHidden: false,
      petIsHidden: false,
      //profile_pic:"https://s3-us-west-2.amazonaws.com/petopair-s3-bucket/profpic"+this.props.currentUser._id
    }
    this.profileToggleHidden = this.profileToggleHidden.bind(this);
    this.petToggleHidden = this.petToggleHidden.bind(this);

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

  profileToggleHidden() {
    this.setState({
      profileIsHidden: !this.state.profileIsHidden
    })
  }

  petToggleHidden() {
    this.setState({
      petIsHidden: !this.state.petIsHidden
    })
  }

  render() {
    const BattleRef = () => <BattleWindow currentUser={this.props.currentUser}/>
    const ProfileRef = () => <Profile currentUser={this.props.currentUser}/>
    const PinataProfileRef = () => <PinataProfile currentUser={this.props.currentUser}/>

    return (
      <div>

        <Router>
          <div className="game-container">
            <div className="game-nav">
              <div>
                <button onClick={this.profileToggleHidden.bind(this)}>Toggle Profile</button>
                <button onClick={this.petToggleHidden.bind(this)}>Toggle Pinata</button>

              </div>
              <h1 className="game-title">Pinatata</h1>
              <p className="game-sub-title">
                <em>Grow, Play, Love, Fight
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

                <Link to="/pinataprofile" className='game-link' style={{
                  textDecoration: 'none'
                }}>Pinata Playground</Link>

              </div>

            </div>

            <div className='game-content'>
              <div className="game-toggle-section">
                <div >{!this.state.profileIsHidden && <Profile currentUser={this.props.currentUser}/>}
                </div>
                {/* <PinataProfile currentUser={this.props.currentUser}/> */}
                <div >{!this.state.petIsHidden && <PinataProfile currentUser={this.props.currentUser}/>}
                </div>
              </div>

              <div className='game-component-div'>
                <Switch>
                  <Route path="/battle" component={BattleRef}/>
                  <Route path="/profile" component={ProfileRef}/>
                  <Route path="/pinataprofile" component={PinataProfileRef}/>

                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>

    );
  }
};

module.exports = Game;
