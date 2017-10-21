

import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
const axios = require("axios");
//const React = require("react");


//const Profile = require("./Profile");
const ChoosePinataDonkey = require("./choosePinataDonkey");
const ChoosePinataChicken = require("./choosePinataChicken");
const ChoosePinataBull = require("./choosePinataBull");



//const Navbar = require("./Navbar");

// Creating the Profile component

class ChoosePinata extends React.Component {
  constructor(props) {
    super(props);
    //

    this.choosePet=this.choosePet.bind(this);
    this.state = {
      animal:''

    //  currentUser:{this.props.currentUser}
      //profile_pic:"https://s3-us-west-2.amazonaws.com/petopair-s3-bucket/profpic"+this.props.currentUser._id
    }

  }

  choosePet(){
    console.log(this.state.animal);
    let animal=this.state.animal;
    let animalObj={animal:animal}
    axios.post("/updateAnimal", {animal: animal }).then((response) => {
      console.log("updatedAnimal", response.data);
    //  this.props.setCurrentUser(response.data)


    }).catch((error) => {
      console.log("oh no",error);

    });
    axios.get("/userInfo").then((response) => {
      console.log("updatedAnimal2", response.data);
      this.props.setCurrentUser(response.data)


    }).catch((error) => {
      console.log("oh no",error);

    });
  }
  // buttonText(animal){
  //   this.setState({animal:animal})
  //
  // }

  render() {
    const DonkeyRef = () => <ChoosePinataDonkey />
    const ChickenRef = () => <ChoosePinataChicken />
    const BullRef = () => <ChoosePinataBull />

    return (
      <div>

        <Router>
          <div className="choose-container">
            <div className="choose-nav">

              <h1 className="choose-title">PICK A PET PINATA</h1>


              <div className='choose-links'>
                <Link to="/choosechicken" className='game-link' onClick={()=>{this.setState({animal:"chicken"})}} style={{
                  textDecoration: 'none'
                }}>CHICKEN</Link>
                {/* </div>
                <div className='nav'> */}
                <Link to="/choosebull" className='game-link' onClick={()=>{this.setState({animal:"bull"})}} style={{
                  textDecoration: 'none'
                }}>BULL</Link>

                <Link to="/choosedonkey" className='game-link' onClick={()=>{this.setState({animal:"donkey"})}} style={{
                  textDecoration: 'none'
                }}>DONKEY</Link>

              </div>

            </div>
            <div>
              <br/>
            <button onClick={this.choosePet} id="choose-button"> Click to confirm {this.state.animal}</button>
          </div>
              <div className='choose-component-div'>
                <Switch>
                  <Route path="/choosechicken" component={ChickenRef}/>
                  <Route path="/choosebull" component={BullRef}/>
                  <Route path="/choosedonkey" component={DonkeyRef}/>

                </Switch>
              </div>

          </div>
        </Router>
      </div>

    );
  }
};

module.exports = ChoosePinata;
