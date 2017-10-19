const React = require("react");
const axios = require("axios");
// const Child = () => (
// <div className='modal'>
//       Hello, World!
//   </div>
// )
const UploadPic = require("./upload_profile_pic");
// Creating the Results component

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      profile_pic:""
    }
    this.toggleHidden=this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidUpdate() {
    // axios.get("/profile_pic").then((response) => {
    //   console.log(response);
    //   this.setState({profile_pic: response.data});
    //
    // }).catch((error) => {
    //   console.log(error);
    //
    // });
    this.refs.profileImg.src="/profile_pic";


  }

  render() {
    return (
      <div> Profile Shit Here
        <div className='user-info'>{JSON.stringify(this.props.currentUser)}</div>
        <div><img ref="profileImg" id="main-profile-pic" src="" alt="main profile picture" /></div>
        {/* </div><a href="/uploadProfilePic">UPLOAD PROFILE PIC</a> */}
        <div>
          <button onClick={this.toggleHidden.bind(this)} >
            UPLOAD PROFILE PIC
          </button>
          {!this.state.isHidden && <UploadPic toggleHidden={this.toggleHidden}/>}
        </div>
      </div>

    );
  }
};




// Export the component back for use in other files
module.exports = Profile;
