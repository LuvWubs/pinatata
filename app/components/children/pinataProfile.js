const React = require("react");
const axios = require("axios");
// const Child = () => (
// <div className='modal'>
//       Hello, World!
//   </div>
// )
const UploadPic = require("./upload_profile_pic");
// Creating the Results component

class PinataProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,

      //profile_pic:"https://s3-us-west-2.amazonaws.com/petopair-s3-bucket/profpic"+this.props.currentUser._id
    }
  }






  render() {
    const src="/public/images/"+this.props.currentUser.pet+"good.jpeg";
    return (
      <div className="pet-div toggle-div"> <h2>Your Pinata Profile</h2>
        <div className='pinata-info info'>
          <p>Level:{this.props.currentUser.level} </p>
          <p>Happiness Quotient:{this.props.currentUser.happy}</p>
          <p>Candy:{this.props.currentUser.candy}</p>
          <p>Type:{this.props.currentUser.pet}</p>
        </div>
        <div><img ref="petPinataImg" alt="CHOOSE A PINATA!" id="main-pinata-pic" src={src}  style={{width:200,height:"auto"}}/></div>
        {/* </div><a href="/uploadProfilePic">UPLOAD PROFILE PIC</a> */}
        {/* <div>
          <button onClick={this.toggleHidden.bind(this)} >
            UPLOAD PROFILE PIC
          </button>
          {!this.state.isHidden && <UploadPic toggleHidden={this.toggleHidden}/>}
        </div> */}
      </div>

    );
  }
};




// Export the component back for use in other files
module.exports = PinataProfile;
