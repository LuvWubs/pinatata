const React = require("react");
const axios = require("axios");
import {TweenMax, Power2, TimelineMax} from "gsap";

// Creating the Results component

class BattleWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src:''

    }


  }

//   setInterval(function() {
//     this.state.img_src = "new_img_src";
// }, 250)(this)

// function scrollLeft(div) {
//   var elmnt = document.getElementById(div);
//   $(elmnt).animate( { scrollLeft: '+=350' }, 500);
//
// }
//
//
// function scrollRight(div) {
// var elmnt = document.getElementById(div);
//   $(elmnt).animate( { scrollLeft: '-=350' }, 500);
//
// }

  componentDidMount(){
  const t = new TimelineMax({ paused: true });
      let n = [1,2,3,4,5,7,8];
      let img=this.refs.d1;
      let src1='/public/images/d'


  for (var i=0; i<n.length; i++) {
    t.set(img, {attr:{src:src1+n[i]+'.png'}}, i);
    t.to(img, 6, {x: 500},i);

  }

  t.to(img, 6, {x: 0});
  //t.to(img.rotation, 3, {y:Math.PI*6});

  TweenMax.to(t, 6, { progress:1, ease:Power4.easeInOut });

  img.hover(over, out);
  let dRotate=180;
  function over() {
    TweenMax.to(img, 1, {
      rotationY: 180
    });
  }

  function out() {
    // TweenMax.to(this,1, {
    // rotationX:60}
    dRotate = dRotate + 180;
  }
}
  render() {
    return (
      <div> <img ref="d1" className="dframe" src="/public/images/d1.png" />
      {/* <img ref="d2" class="dframe" src="/public/images/d2.png" />
      <img id="d3" class="dframe" src="/public/images/d3.png" />
      <img id="d4" class="dframe" src="/public/images/d4.png" />
      <img id="d5" class="dframe" src="/public/images/d5.png" />
      <img id="d6" class="dframe" src="/public/images/d6.png" />
      <img id="d7" class="dframe" src="/public/images/d7.png" />
      <img id="d8" class="dframe" src="/public/images/d8.png" />
      <img id="d9" class="dframe" src="/public/images/d9.png" />
      <div class='scroll_buttons'>
        <span id='scrollRightButton' class="scroll">&nbsp;&lt;&lt;&nbsp;</span>

        <span id='scrollLeftButton' class="scroll">&nbsp;&gt;&gt;&nbsp;</span>
      </div>

      <div class="outerDiv1">
        <div id="outerDiv2">

         <div id="innerDiv"></div>

        </div>
      </div>
      */}
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = BattleWindow;
