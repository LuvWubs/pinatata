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
      //profile_pic:"https://s3-us-west-2.amazonaws.com/petopair-s3-bucket/profpic"+this.props.currentUser._id
    }
    this.toggleHidden=this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {

    this.refs.profileImg.src="/profile_pic";

  }
//



  render() {
    return (
      <div className="profile-div toggle-div"> <h2>Your Profile</h2>
        <div className='user-info info'>
          <h3>{this.props.currentUser.first_name} - "{this.props.currentUser.username}"</h3>
          <p>Sweetness:{this.props.currentUser.sweetness}</p>
          <p>{this.props.currentUser.email}</p>
      </div>
        <div><img ref="profileImg" id="main-profile-pic" src="/profile_pic"  style={{width:200,height:"auto"}}/></div>
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
