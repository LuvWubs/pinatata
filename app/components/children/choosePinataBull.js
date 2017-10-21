const React = require("react");
const axios = require("axios");
//import React, { Component } from 'react';
import * as THREE from 'three';
import {TweenMax, Power2, TimelineMax} from "gsap";


let renderer,
  scene,
  camera,
  bullPinata,
  directionalLight;


const ww = window.innerWidth;
const wh = window.innerHeight;
// Creating the Results component

class ChooseBullPinata extends React.Component {
  constructor(props) {
    super(props);
    this.render1= this.render1.bind(this);
    //this.init= this.init.bind(this);
    this.render= this.render.bind(this);
    //this.createbullPinata= this.createbullPinata.bind(this);

  //  this.init();

  }



    render1() {
    	requestAnimationFrame(this.render1);

    	//Simply render the scene with a request animation frame and the timeline from GreenSock will do the rest ;)
    	renderer.render1(scene, camera);
    };
  componentDidMount() {


    scene = new THREE.Scene();
    //camera = new THREE.PerspectiveCamera(50, 1000 / 1000, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({canvas: this.refs.threeCanvas, alpha: true});
    renderer.setSize(ww, wh);

    camera.position.z = 50;
    //camera.position.y = 100;


    let loader = new THREE.JSONLoader();
    loader.load('./public/images/bull.json', function(geometry, materials) {
      console.log('bull Pinata', geometry);

      var material = new THREE.MeshStandardMaterial();
      bullPinata = new THREE.Mesh(geometry, material);
      bullPinata.scale.x = bullPinata.scale.y = bullPinata.scale.z = .65;
      bullPinata.translation = geometry.center(geometry);
      bullPinata.tl = new TimelineMax({});



    });

    let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 0, 350);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(directionalLight);
    //
    // setTimeout(()=>{ bullPinata.tl.to(bullPinata.rotation, 1, {y:Math.PI/4});scene.add(bullPinata); renderer.render(scene, camera);
    //   }, 500);
    setTimeout(() => {
      this.createbullPinata()
    }, 300);



  }

  createbullPinata() {
    console.log(bullPinata);

    bullPinata.tl = new TimelineMax({});

    bullPinata.tl.to(bullPinata.position, 3, {z: 40});

    //
    //   //look both ways
    bullPinata.tl.to(bullPinata.rotation, 1, {
      y: 3*Math.PI / 2
    });
    bullPinata.tl.to(bullPinata.position, .2, {x: -5});

    bullPinata.tl.to(bullPinata.rotation, 1, {
      y: Math.PI
    });

    bullPinata.tl.to(bullPinata.position, .2, {z: -5});

    bullPinata.tl.to(bullPinata.rotation, 1, {
      y: Math.PI/2
    });

    bullPinata.tl.to(bullPinata.position, .2, {x: 0});

    bullPinata.tl.to(bullPinata.rotation, 1, {
      y: 2*Math.PI
    });

    bullPinata.tl.to(bullPinata.position, .2, {z:43});



    //bull jump

    bullPinata.tl.to(bullPinata.position, .2, {y:2, ease:Power4.easeOut});

    bullPinata.tl.to(bullPinata.position, .2, {y:0, ease:Power4.easeOut});


    //bull flip
    //bullPinata.tl.to(bullPinata.rotation, 2, {x:-Math.PI/4, ease:Back.easeInOut});



    scene.add(bullPinata);
    this.render1();
    //renderer.render(scene, camera);


  }

  render1() {
    requestAnimationFrame(this.render1);

    //Simply render the scene with a request animation frame and the timeline from GreenSock will do the rest ;)
    renderer.render(scene, camera);
  };

  render() {
  //  requestAnimationFrame(this.render);

    //Simply render the scene with a request animation frame and the timeline from GreenSock will do the rest ;)
  //  renderer.render(scene, camera);
    return (
      <div>
        {/* <canvas ref="scene" className="introCanvas"></canvas> */}
        <div>
          <canvas ref="threeCanvas"></canvas>
        </div>

      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = ChooseBullPinata;
