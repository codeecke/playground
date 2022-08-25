import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader';

let logo;
const width = window.innerWidth;
const height = window.innerHeight;
const aspactRation = width / height;
const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const modelLoader = new GLTFLoader();
const light = new THREE.HemisphereLight(0xffffff,0x000000, 5);
const renderer = new THREE.WebGL1Renderer({
    alpha: true,
    antialias: true
});

const camera = new THREE.PerspectiveCamera(
    75,
    width / height,
    .1,
    2000
);



renderer.setSize(width, height);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;


textureLoader.load('./assets/brown_photostudio_02_4k.jpeg', texture => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture
    scene.environment = texture
})

modelLoader.load('./assets/html5.glb', gltf => {
    console.log(gltf);
    logo = gltf.scene;
    logo.rotation.y = -1.5;
    logo.children[1].material.thickness = 0.3;
    scene.add(logo)
    
});

scene.add(light);
// scene.background = new THREE.Color(0x333333);
camera.position.set(0,.5,3.25)


function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    
}
document.body.appendChild(renderer.domElement);
animate()

window.addEventListener('resize', () => {
    location.reload();
})

document.addEventListener('mousemove', e => {
    if(e.buttons === 0) return;
    const halfScreenHeight = window.innerHeight / 2;
    const halfScreenWidth = window.innerWidth / 2;
    logo.rotation.y = -1.5 + 3.25 / halfScreenWidth * (halfScreenWidth - e.clientX);
    logo.rotation.x = 1 / halfScreenHeight * (halfScreenHeight - e.clientY);
});