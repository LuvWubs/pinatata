const React = require("react");
const axios = require("axios");

// Creating the Results component

class Profile extends React.Component {
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


//   changeUserName(event) {
//     this.user.username= event.target.value;
//           console.log(this.user);
//   }
//
//   submitSignInUser(event){
//       event.preventDefault();
//     alert(JSON.stringify(this.user));
//     this.props.signInUser(this.user);
//
// }


  render() {
    return (
      <div> Profile Shit Here
        <div className='user-info'>{JSON.stringify(this.props.currentUser)}</div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Profile;
