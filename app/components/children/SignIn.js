// Include React
const React = require("react");
const axios = require("axios");

// Creating the Results component

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);

  this.submitSignInUser=this.submitSignInUser.bind(this);
    this.user = {

      username: "",
      password: ""

    };
    //  this.state = {term: ''};

  }

  changePassword(event) {
    this.user.password = event.target.value;
        console.log(this.user);
  }
  changeUserName(event) {
    this.user.username= event.target.value;
          console.log(this.user);
  }

  submitSignInUser(event){
      event.preventDefault();
    alert(JSON.stringify(this.user));
    this.props.signInUser(this.user);

}


  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading"></div>
        <div className="panel-body text-center">
          <form>
            {/* onSubmit={this.submitMakeUser} */}
            <div className="form-group">

              <label htmlFor="userame">Username </label>
              <input type="text" className="search-box" id="username" onChange={this.changeUserName} required/>
              <br/><label htmlFor="password">Password </label>
              <input type="text" className="search-box" id="password" onChange={this.changePassword} required/>

              <br/><button className="submit-button" type="submit" onClick={this.submitSignInUser}>
                Submit
              </button>
            </div>
          </form>
          <div className="panel-body text-center">

            {/* {this.props.saved.map((item, i) => {
              return (
                <div key={i} className='saved-div'>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>

                  <p>{item.snippet}</p>
                  <a href={item.url}>{item.url}</a>
                </div>
              );
            })} */}
          </div>

        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = SignIn;
