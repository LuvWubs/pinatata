const React = require("react");
const axios = require("axios");
import React3 from 'react-three-renderer';
import * as THREE from 'three';
// Creating the Results component

class Simple extends React.Component {
  constructor(props) {
    super(props);

    this.cameraPosition = new THREE.Vector3(0, 0, 5);

       // construct the position vector here, because if we use 'new' within render,
       // React will think that things have changed when they have not.

       this.state = {
         cubeRotation: new THREE.Euler(),
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




    //  this.state = {term: ''};




  //  this.props.signInUser(this.user);




  render() {
    return (
      <div className="panel panel-default">
      hello
      </div>
    );
  }
  render() {
    // const {
    //   width,
    //   height,
    // } = this.props;

    // or you can use:
     const width = window.innerWidth
     const height = window.innerHeight

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <mesh
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




// import React from 'react';
// import React3 from 'react-three-renderer';
// import * as THREE from 'three';
//
// class Simple extends React.Component {
//   // static propTypes = {
//   //   width: React.PropTypes.number.isRequired,
//   //   height: React.PropTypes.number.isRequired,
//   // };
//
//   constructor(props) {
//     super(props);
//
//     // this.cameraPosition = new THREE.Vector3(0, 0, 5);
//     //
//     // // construct the position vector here, because if we use 'new' within render,
//     // // React will think that things have changed when they have not.
//     //
//     // this.state = {
//     //   cubeRotation: new THREE.Euler(),
//     // };
//     //
//     // this._onAnimate = () => {
//     //   // we will get this callback every frame
//     //
//     //   // pretend cubeRotation is immutable.
//     //   // this helps with updates and pure rendering.
//     //   // React will be sure that the rotation has now updated.
//     //   this.setState({
//     //     cubeRotation: new THREE.Euler(
//     //       this.state.cubeRotation.x + 0.1,
//     //       this.state.cubeRotation.y + 0.1,
//     //       0
//     //     ),
//     //   });
//     // };
//   }
//
//   render() {
//     // const {
//     //   width,
//     //   height,
//     // } = this.props;
//
//     // or you can use:
//      const width = 200;
//      const height = 200;
//
//     return (
//       <p>Hello</p>)
//       /*{ <React3
//       mainCamera="camera" // this points to the perspectiveCamera below
//       width={width}
//       height={height}
//
//       onAnimate={this._onAnimate}
//     >
//       <scene>
//         <perspectiveCamera
//           name="camera"
//           fov={75}
//           aspect={width / height}
//           near={0.1}
//           far={1000}
//
//           position={this.cameraPosition}
//         />
//         <mesh
//           rotation={this.state.cubeRotation}
//         >
//           <boxGeometry
//             width={1}
//             height={1}
//             depth={1}
//           />
//           <meshBasicMaterial
//             color={0x00ff00}
//           />
//         </mesh>
//       </scene>
//     </React3>); }*/
//   }
// }
//
// export default Simple;
