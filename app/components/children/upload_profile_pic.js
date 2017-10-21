const React = require("react");
const axios = require("axios");
const axiosFileupload = require('axios-fileupload');



class UploadPic extends React.Component {
  constructor(props) {
    super(props);

    this.pressButton = this.pressButton.bind(this);
    this.getPhoto = this.getPhoto.bind(this);

    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  }

  pressButton(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log(e);
    console.log('handle uploading-', this.state.file);
    this.props.toggleHidden();
    let picFile = this.state.file;
    console.log(picFile);

    let data = new FormData();
data.append('file', this.state.file, "profpic");


axios.post('/profile', data, {
  headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data`,
  }
})
  .then((response) => {
    console.log("RAWRRRR",response)
    window.location.reload();
  }).catch((error) => {
    console.log('nay')
  });



  // fetch('/profile', { // Your POST endpoint
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": this.state.file.type
  //   },
  //   body: this.state.file // This is the content of your file
  // }).then(
  //   response => response.json()// if the response is a JSON object
  // ).then(
  //   console.log("yay") // Handle the success response object
  // ).catch(
  //   console.log("boo") // Handle the error response object
  // );

  // fetch("/profile", {
  //     method: "POST",
  //     body: {"hello":"hello"}
  //   }).then(function (res) {
  //     if (res.ok) {
  //       alert("Perfect! ");
  //     } else if (res.status == 401) {
  //       alert("Oops! ");
  //     }
  //   }, function (e) {
  //     alert("Error submitting form!");
  //   });



  // axiosFileupload('/profile',this.state.file).then((response) => {
  //     console.log("good ", response);
  //     // this.setState({signUpError: ""});
  //     // this.setState({isLoggedIn: true});
  //     // this.props.loggedIn(this.state.isLoggedIn, response.data);
  //   }).catch((error) => {
  //     console.log("bad", error);
  //
  //     console.log("picture could not upload");
  //   });;


    // fetch("/profile", {
    //       method: "POST",
    //       body: (this.state.file),
    //       headers: { "Content-Type": "application/json" }
    //   }).then(response => {
    //       var contentType = response.headers.get("content-type");
    //       if (contentType && contentType.includes("application/json")) {
    //           return response.json();
    //       }
    //       throw new TypeError("Oops, we haven't got JSON!");
    //   })
    //       .then(json => {
    //           console.log("good job");
    //       })
    //       .catch(error => { console.log(error); });
  //  alert(JSON.stringify(this.robot));



  //   axios.post("/profile"
  //   , picFile, {
  //     headers: {
  //       'Content-Type': picFile.type
  //     }
  //   }
  // ).then((response) => {
  //     console.log("good ", response);
  //     // this.setState({signUpError: ""});
  //     // this.setState({isLoggedIn: true});
  //     // this.props.loggedIn(this.state.isLoggedIn, response.data);
  //   }).catch((error) => {
  //     console.log("bad", error);
  //
  //     console.log("picture could not upload");
  //   });
}

  getPhoto(e) {
    e.preventDefault();
    console.log('getphoto', e);
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("e.target",e.target.files[0]);

    reader.onloadend = () => {
      this.setState({file: file, imagePreviewUrl: reader.result});
    }

    reader.readAsDataURL(file);

    // fetch("/profile", {
    //       method: "POST",
    //       body: this.state.file,
    //       headers: { "Content-Type": "application/json" }
    //   }).then(response => {
    //       var contentType = response.headers.get("content-type");
    //       if (contentType && contentType.includes("application/json")) {
    //           return response.json();
    //       }
    //       throw new TypeError("Oops, we haven't got JSON!");
    //   })
    //       .then(json => {
    //           console.log("good job");
    //       })
    //       .catch(error => { console.log(error); });

  }

  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl}/>);
    }
    return (
      <div>

        {/* <div className="imgPreview">
          {imagePreview}
        </div> */}
        <form ref="uploadForm" encType="multipart/form-data">
          <input type='file' onChange={this.getPhoto}/>
          <div className="imgPreview">
            {imagePreview}
          </div>
          <div><button onClick={this.pressButton} >
            Submit
          </button></div>
          {/* type="submit" name="action" action="/profile" method="post"*/}
        </form>
      </div>
    )
  }

}
module.exports = UploadPic;
