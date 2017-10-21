const React = require("react");
const axios = require("axios");
//const MySvg = require('./donkey.svg')
//import React, { Component } from 'react';

import Donkey from 'svg-react-loader?name=Donkey!../models/dOutline.svg';
//import Donkey2 from 'svg-react-loader?name=Donkey!../models/donkey2.svg';

// export default class MyIcon extends Component {
//     render () {
//         return <Icon className='normal' />;
//     }
// };
// Creating the Results component

class DonkeySVG extends React.Component {
  constructor(props) {
    super(props);

  }
  // var divStyle = {
  //   color: 'white',
  //   backgroundImage: 'url(' + imgUrl + ')',
  //   WebkitTransition: 'all', // note the capital 'W' here
  //   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  // };
  render() {
    return (

      <div>
        <Donkey/>
        <svg height="400" width="450">
          <path id="lineAB" d="M 100 350 l 150 -300" stroke="red" strokeWidth="3" fill="none"/>
          <path id="lineBC" d="M 250 50 l 150 300" stroke="red" strokeWidth="3" fill="none"/>
          <path d="M 175 200 l 150 0" stroke="green" strokeWidth="3" fill="none"/>
          <path d="M 100 350 q 150 -300 300 0" stroke="blue" strokeWidth="5" fill="none"/>

          <g stroke="black" strokeWidth="3" fill="black">
            <circle id="pointA" cx="100" cy="350" r="3"/>
            <circle id="pointB" cx="250" cy="50" r="3"/>
            <circle id="pointC" cx="400" cy="350" r="3"/>
          </g>

          <g fontSize="30" fontFamily="sans-serif" fill="black" stroke="none" textAnchor="middle">
            <text x="100" y="350" dx="-30">A</text>
            <text x="250" y="50" dy="-10">B</text>
            <text x="400" y="350" dx="30">C</text>
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>

        <svg id="donkeyPolygon" height="500" width="1000">
  
          <polygon id="donkeyPolygon1" points="131 146,151 73,141 46,154 9,163 71,173 69,169 6,184 28,191 67,222 88,221 116,
          190 127,191 181,230 265,196 270,186 207,181 209,189 271,170 270,170 213,94 216,107 274,84 275,
          78 231,70 229,75 277,50 277,53 215,50 170,33 209,11 202,45 154" style={{fill:'red',stroke:'black',strokeWidth:5}}/>
          Sorry, your browser does not support inline SVG.
        </svg>

      </div>

    );
  }
};

// Export the component back for use in other files
module.exports = DonkeySVG;
