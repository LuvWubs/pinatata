// import React from 'react';
 import ReactDOM from 'react-dom';
// // import {Paper} from 'material-ui';
// // import {Grid} from 'react-flexbox-grid';
import {TweenLite, CSSPlugin} from 'gsap';
//



const React = require("react");
const axios = require("axios");

// Creating the Results component

class BattleW extends React.Component {
  constructor(props) {
    super(props);



  }

    componentDidMount() {
      setTimeout(() => {
        this.animateBox()
      }, 500);
    }

    animateBox() {
      const box = this.refs.box;

      TweenLite.fromTo(box, 2, {x: '-=200px'}, {x: 150, ease: Power4.easeInOut});
      TweenLite.to(box, 0.4, {top: '100%', y: '-100%', ease: Bounce.easeOut, delay: 2});
      TweenLite.to(box, 0.7, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 3});
      TweenLite.to(box, 0.8, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 4.2});
      TweenLite.to(box, 2.5, {top: '50%', y: '-50%', ease: Power0.easeNone, delay: 5});
      TweenLite.to(box, 2.5, {x: '+=400px', ease: Elastic.easeInOut, delay: 7.7});
      TweenLite.to(box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});
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
      <div> This is the gsap window
        <div className='box' ref='box'></div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = BattleW;
