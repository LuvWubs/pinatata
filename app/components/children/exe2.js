$(document).ready(function(){
let renderer, scene, camera, donkeyPinata;

const ww = window.innerWidth,
	wh = window.innerHeight;

function init(){

	renderer = new THREE.WebGLRenderer({canvas : document.getElementById('scene')});
	renderer.setSize(ww,wh);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(50,ww/wh, 0.1, 10000 );
	camera.position.set(0,0,500);
	scene.add(camera);

	//Add a light in the scene
	directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
	directionalLight.position.set( 0, 0, 350 );
	directionalLight.lookAt(new THREE.Vector3(0,0,0));
	scene.add( directionalLight );

	//Add a donkeyPinata in the scene add apply animation
	createDonkeyPinata();

	//Render the scene and start request animation frame
	render();

}



var createDonkeyPinata = function(){

	//Create a new donkeyPinata with simple geometry & material
	//var geometry = new THREE.BoxGeometry(200,10,10);
	var texture = new THREE.MeshLambertMaterial({color:0x00ff00, transparent: true });
	//var rectangle = new THREE.Mesh(geometry, texture);
	var donkeyPinata;
	var loader = new THREE.JSONLoader();
	loader.load('./pinata.json', function(geometry, materials) {
			var material= new THREE.MeshNormalMaterial();
			donkeyPinata = new THREE.Mesh(geometry, material);
			donkeyPinata.scale.x = donkeyPinata.scale.y = donkeyPinata.scale.z = 30;
			donkeyPinata.translation = geometry.center(geometry);
			donkeyPinata.tl = new TimelineMax({});
			//add animation to timeline
			//donkey spin
			//donkeyPinata.tl.to(donkeyPinata.rotation, 3, {y:-Math.PI*6, ease:Back.easeInOut});

			//come forward
			donkeyPinata.tl.to(donkeyPinata.position, 1, {z: 100});

			//look both ways
			donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:Math.PI/4});
			donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:-Math.PI/4});
			donkeyPinata.tl.to(donkeyPinata.rotation, 1, {y:0});


			//donkey jump
			donkeyPinata.tl.to(donkeyPinata.position, .2, {y: 100});
			donkeyPinata.tl.to(donkeyPinata.position, 1, {y: 0, ease:Power4.easeOut});

			//donkey flip
			//donkeyPinata.tl.to(donkeyPinata.rotation, 2, {x:-Math.PI/4, ease:Back.easeInOut});

			donkeyPinata.tl.to(donkeyPinata.rotation, 2, {x:-Math.PI*6});
		//	donkeyPinata.tl.to(donkeyPinata.rotation, .2, {x:0});


			//turn and walk away
			donkeyPinata.tl.to(donkeyPinata.rotation, 3, {y:Math.PI});

			donkeyPinata.tl.to(donkeyPinata.position, 5, {z:-10000});
			//donkeyPinata.tl.to(donkeyPinata.rotation, 3, {x:0,y:0, ease: Back.easeInOut.config(2)},"-=3");


			//Add the donkeyPinata in the scene
			scene.add(donkeyPinata);

	});



	//scene.add(rectangle);
};


var render = function () {
	requestAnimationFrame(render);

	//Simply render the scene with a request animation frame and the timeline from GreenSock will do the rest ;)
	renderer.render(scene, camera);
};

init();
});
