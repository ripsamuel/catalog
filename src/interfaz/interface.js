const container = document.querySelector('#container');
const button = document.querySelector('#button');

let scene, camera, renderer, cube;

init();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -5);
    scene.add(cube);

    camera.position.z = 5;

    animate();
}
function generateCubes() {
    for (let i = 0; i < 4; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const newCube = new THREE.Mesh(geometry, material);
        newCube.position.set(2 * i - 3, 0, -5);
        scene.add(newCube);

        // Asociar URL a cada cubo
        newCube.userData.url = `https://www.cubo${i + 1}.com`;
        newCube.addEventListener('click', () => window.open(newCube.userData.url));
    }
}
button.addEventListener('click', generateCubes);

cube.addEventListener('click', () => {
    scene.children
        .filter(child => child !== cube)
        .forEach(child => scene.remove(child));
});
