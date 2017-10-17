const React = require("react");
const axios = require("axios");

// Creating the Results component

class DonkeyIntro extends React.Component {
  constructor(props) {
    super(props);

  //   this.changeUserName = this.changeUserName.bind(this);
  //   this.changePassword = this.changePassword.bind(this);
  //
  // this.submitSignInUser=this.submitSignInUser.bind(this);
  //   this.user = {
  //
  //     username: "",
  //     password: ""
  //
  //   };
    //  this.state = {term: ''};

  }



  makeAnimation(){
    renderer = new THREE.WebGLRenderer({canvas : this.refs.scene});

  }


  render() {
    return (
      <div>
        <canvas ref="scene" className="introCanvas"></canvas>

        <div className='user-info'>This is the donkey intro!! rara!</div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = DonkeyIntro;
