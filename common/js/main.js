console.log('main js activated...')
    
const scene = new THREE.Scene();
const canvas = document.querySelector("#WebGLoutPut");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = -25;
camera.position.y = 30;
camera.position.z = 25;
camera.lookAt(scene.position);
renderer.setClearColor(new THREE.Color(0xeeeeee));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

const planeGeometry = new THREE.PlaneGeometry(180,180,1,1);
const planeMaterial = new THREE.MeshLambertMaterial({color:0x00ffff});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -0.5 * Math.PI
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane)

// var axes = new THREE.AxisHelper(20)
// scene.add(axes);

var cubeGeometry = new THREE.BoxGeometry(4,4,4)
var cubeMaterial = new THREE.MeshLambertMaterial({color:0x12db00, wireframe:false});
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
cube.castShadow = true;
cube.position.x = -4;
cube.position.y = 5;
cube.position.z = 0;
scene.add(cube)

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40,60,-10);
spotLight.castShadow = true;
spotLight.shadowMapHeight = 5000;
spotLight.shadowMapWidth = 5000;
scene.add(spotLight)

// renderer.render(scene, camera)

function render(time) {
    time *= 0.001;
    cube.rotation.x = time;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
$('#rotateRemote li').click(function(){
    var idx = $(this).index()
    var time = 0.001;
    cube.position.z = idx*5;
})