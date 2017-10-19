const React = require("react");
const axios = require("axios");
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import {TweenMax, Power2, TimelineLite} from "gsap";
let donkeyPinata;
// Creating the Results component

class Simple extends React.Component {
  constructor(props) {
    super(props);

    this.cameraPosition = new THREE.Vector3(0, 0, 5);

       // construct the position vector here, because if we use 'new' within render,
       // React will think that things have changed when they have not.


       this.state = {
         cubeRotation: new THREE.Euler(),
         cubeTranslation:''
       };


       this._onAnimate = () => {
         // we will get this callback every frame

         // pretend cubeRotation is immutable.
         // this helps with updates and pure rendering.
         // React will be sure that the rotation has now updated.
         this.setState({
           cubeRotation: new THREE.Euler(
             this.state.cubeRotation.x + 0.1,
             this.state.cubeRotation.y + 0.1,
             0
           ),
         });


       };

     }
  //
  // componentDidMount(){
  //    TweenMax.to(this.refs.meshie, 0.4, {
  //        top: '100%',
  //        y: '-100%',
  //        ease: Bounce.easeOut,
  //        delay: 2
  //      }),
  //    }

  render() {

     const width = window.innerWidth
     const height = window.innerHeight

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene ref="scenie">
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />

        <mesh ref='meshie'
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }
  }



// Export the component back for use in other files
 module.exports = Simple;
