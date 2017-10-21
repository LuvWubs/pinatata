const React = require("react");
const helpers = require("../utils/helpers");
const axios = require("axios");

// Creating the Results component

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.submitMakeUser=this.submitMakeUser.bind(this);
    this.user = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
      candy: 50,
      happy: 1,
      level: 0,
      pet: "",
      sweetness:100

    };

    //  this.state = {term: ''};
  this.state = {signUpError: ''};
  }

  changeFirstName(event) {
    this.user.first_name = event.target.value;
        console.log(this.user);
  }
  changeLastName(event) {
    this.user.last_name = event.target.value;
          console.log(this.user);
  }
  changePassword(event) {
    this.user.password = event.target.value;
        console.log(this.user);
  }
  changeUserName(event) {
    this.user.username= event.target.value;
          console.log(this.user);
  }
  changeEmail(event) {
    this.user.email = event.target.value;
        console.log(this.user);
  }

  //


  submitMakeUser(event){
    event.preventDefault();
    this.props.makeUser(this.user);

}



  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading"></div>
        <div className="panel-body text-center">
          <form>
            {/* // onSubmit={this.submitMakeUser} > */}
            <div className="form-group">
              <label htmlFor="first_name">First Name </label>
              <input type="text" className="search-box" id="first_name" onChange={this.changeFirstName} required/>
              <br/><label htmlFor="last_name">Last Name </label>
              <input type="text" className="search-box" id="last_name" onChange={this.changeLastName} required/>
              <br/><label htmlFor="userame">Username </label>
              <input type="text" className="search-box" id="username" onChange={this.changeUserName} required/>
              <br/><label htmlFor="password">Password </label>
              <input type="text" className="search-box" id="password" onChange={this.changePassword} required/>
              <br/><label htmlFor="email">Email </label>
              <input type="text" className="search-box" id="email" onChange={this.changeEmail} required/>
              <br/>
              <button onClick={this.submitMakeUser} className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = SignUp;
