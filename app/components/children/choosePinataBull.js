const React = require("react");
const axios = require("axios");
//import React, { Component } from 'react';
import * as THREE from 'three';
import {TweenMax, Power2, TimelineMax} from "gsap";


let renderer,
  scene,
  camera,
  donkeyPinata,
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
    //this.createDonkeyPinata= this.createDonkeyPinata.bind(this);

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
    loader.load('./pinata.json', function(geometry, materials) {
      console.log('Donkey Pinata', geometry);

      var material = new THREE.MeshNormalMaterial();
      donkeyPinata = new THREE.Mesh(geometry, material);
      donkeyPinata.scale.x = donkeyPinata.scale.y = donkeyPinata.scale.z = .65;
      donkeyPinata.translation = geometry.center(geometry);
      donkeyPinata.tl = new TimelineMax({});



    });

    let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 0, 350);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(directionalLight);
    //
    // setTimeout(()=>{ donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:Math.PI/4});scene.add(donkeyPinata); renderer.render(scene, camera);
    //   }, 500);
    setTimeout(() => {
      this.createDonkeyPinata()
    }, 300);



  }

  createDonkeyPinata() {
    console.log(donkeyPinata);

    donkeyPinata.tl = new TimelineMax({});

    donkeyPinata.tl.to(donkeyPinata.position, 3, {z: 40});

    //
    //   //look both ways
    donkeyPinata.tl.to(donkeyPinata.rotation, 3, {
      y: Math.PI / 4
    });
    donkeyPinata.tl.to(donkeyPinata.rotation, 3, {
      y: -Math.PI / 4
    });
    donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:0});


    //donkey jump
    donkeyPinata.tl.to(donkeyPinata.position, .2, {y: 5});
    donkeyPinata.tl.to(donkeyPinata.position, 1, {y: 0, ease:Power4.easeOut});

    //donkey flip
    //donkeyPinata.tl.to(donkeyPinata.rotation, 2, {x:-Math.PI/4, ease:Back.easeInOut});

    donkeyPinata.tl.to(donkeyPinata.rotation, 2, {x:-Math.PI*6});
  //	donkeyPinata.tl.to(donkeyPinata.rotation, .2, {x:0});


    //turn and walk away
    donkeyPinata.tl.to(donkeyPinata.rotation, 3, {y:Math.PI});

    donkeyPinata.tl.to(donkeyPinata.position, 5, {z:-1000});

    scene.add(donkeyPinata);
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

        <div className='user-info'>This is the donkey intro!! rara!</div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = ChooseBullPinata;
