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

const ww=1000;
const wh=500;

// Creating the Results component

class DonkeyIntro extends React.Component {
  constructor(props) {
    super(props);
    this.render1= this.render1.bind(this);
    //this.init= this.init.bind(this);
    this.render= this.render.bind(this);
    //this.createDonkeyPinata= this.createDonkeyPinata.bind(this);

  //  this.init();

  }

  // init(){
  //   renderer = new THREE.WebGLRenderer({canvas: this.refs.threeCanvas, alpha: true});
  //   renderer.setSize(1000, 500);
  //     scene = new THREE.Scene();
  //     //camera = new THREE.PerspectiveCamera(50, 1000 / 1000, 0.1, 1000);
  //     camera = new THREE.PerspectiveCamera(50, 1000 / 500, 0.1, 1000);
  //
  //     camera.position.z = 10;
  //
  // 	scene.add(camera);
  //
  // 	//Add a light in the scene
  // 	directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
  // 	directionalLight.position.set( 0, 0, 350 );
  // 	directionalLight.lookAt(new THREE.Vector3(0,0,0));
  // 	scene.add( directionalLight );
  //
  // 	//Add a donkeyPinata in the scene add apply animation
  // 	this.createDonkeyPinata();
  //
  // 	//Render the scene and start request animation frame
  // 	//this.render1();
  //
  // }
  //
  // createDonkeyPinata(){
  //
  // 	//Create a new donkeyPinata with simple geometry & material
  // 	//var geometry = new THREE.BoxGeometry(200,10,10);
  // 	var texture = new THREE.MeshLambertMaterial({color:0x00ff00, transparent: true });
  // 	//var rectangle = new THREE.Mesh(geometry, texture);
  // 	var donkeyPinata;
  //
  // 	var loader = new THREE.JSONLoader();
  // 	loader.load('./pinata.json', function(geometry, materials) {
  // 			var material= new THREE.MeshNormalMaterial();
  // 			donkeyPinata = new THREE.Mesh(geometry, material);
  // 			donkeyPinata.scale.x = donkeyPinata.scale.y = donkeyPinata.scale.z = 30;
  // 			donkeyPinata.translation = geometry.center(geometry);
  // 			donkeyPinata.tl = new TimelineMax({});
  // 			//add animation to timeline
  // 			//donkey spin
  // 			//donkeyPinata.tl.to(donkeyPinata.rotation, 3, {y:-Math.PI*6, ease:Back.easeInOut});
  //
  // 			//come forward
  // 			donkeyPinata.tl.to(donkeyPinata.position, 1, {z: 100});
  //
  // 			//look both ways
  // 			donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:Math.PI/4});
  // 			donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:-Math.PI/4});
  // 			donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:0});
  //
  //
  // 			//donkey jump
  // 			donkeyPinata.tl.to(donkeyPinata.position, .2, {y: 100});
  // 			donkeyPinata.tl.to(donkeyPinata.position, 1, {y: 0, ease:Power4.easeOut});
  //
  // 			//donkey flip
  // 			//donkeyPinata.tl.to(donkeyPinata.rotation, 2, {x:-Math.PI/4, ease:Back.easeInOut});
  //
  // 			donkeyPinata.tl.to(donkeyPinata.rotation, 2, {x:-Math.PI*6});
  // 		//	donkeyPinata.tl.to(donkeyPinata.rotation, .2, {x:0});
  //
  //
  // 			//turn and walk away
  // 			donkeyPinata.tl.to(donkeyPinata.rotation, 3, {y:Math.PI});
  //
  // 			donkeyPinata.tl.to(donkeyPinata.position, 5, {z:-10000});
  // 			//donkeyPinata.tl.to(donkeyPinata.rotation, 3, {x:0,y:0, ease: Back.easeInOut.config(2)},"-=3");
  //
  //
  // 			//Add the donkeyPinata in the scene
  // 			scene.add(donkeyPinata);
  //
  // 	});
  // }

    render1() {
    	requestAnimationFrame(this.render1);

    	//Simply render the scene with a request animation frame and the timeline from GreenSock will do the rest ;)
    	renderer.render1(scene, camera);
    };
  componentDidMount() {


    scene = new THREE.Scene();
    //camera = new THREE.PerspectiveCamera(50, 1000 / 1000, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(50, 1000 / 500, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({canvas: this.refs.threeCanvas, alpha: true});
    renderer.setSize(1000, 500);

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
module.exports = DonkeyIntro;
