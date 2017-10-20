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
      profile_pic:"https://s3-us-west-2.amazonaws.com/petopair-s3-bucket/profpic"+this.props.currentUser._id
    }
    this.toggleHidden=this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

//   componentDidMount() {
//     axios.get("/profile_pic").then((response) => {
//       console.log(response);
//       this.setState({profile_pic: response.data});
//
//     }).catch((error) => {
//       console.log(error);
//
//     });
//     this.refs.profileImg.src="/profile_pic";
//
//   }
//
//   // componentWillReceiveProps(){
//   //   console.log("UserChange");
//   //   this.refs.profileImg.src="/profile_pic";
//   // }
//
//   componentDidUpdate(prevProps, prevState) {
//     console.log("doing this");
//   // only update chart if the data has changed
//   if (prevProps.data !== this.props.data) {
//     this.refs.profileImg.src="/profile_pic";
//   }
// }

  render() {
    return (
      <div> Profile Shit Here
        <div className='user-info'>{JSON.stringify(this.props.currentUser)}</div>
        <div><img ref="profileImg" id="main-profile-pic" src={this.state.profile_pic} alt="main profile picture" /></div>
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
