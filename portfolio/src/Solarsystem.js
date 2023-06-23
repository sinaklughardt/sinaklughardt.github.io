import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { useEffect } from 'react';
import sunpic from './images/motivational_planet.png'
import purplePlanetTexture from './images/purple_planet.jpg'
import bluePlanetTexture from './images/blue_planet.jpg'
import saturnRingTexture from './images/saturn_ring_texture.jpg'
import orangePlanetTexture from './images/orange_planet.jpg'
import starsTexture from './images/stars.jpg'
import { Suspense } from 'react';
import Stats from 'three/addons/libs/stats.module.js';


export default function Solarsystem() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const loader = new THREE.TextureLoader();
        loader.load(purplePlanetTexture , function(texture)
                    {
                     scene.background = texture;
                    });
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth/window.innerHeight,
            0.1,
            1000
          );
        const states = new Stats();
        // background
        // scene.background = new THREE.CubeTextureLoader()
        //     .load( [
        //     starsTexture,
        //     starsTexture,
        //     starsTexture,
        //     starsTexture,
        //     starsTexture,
        //     starsTexture
        // ] );

        // scene.background = new THREE.Color( 0xf0f0f0 );
        const canvas = document.getElementById('myThreeJsCanvas')
        const renderer = new THREE.WebGL1Renderer({
            canvas,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();

        const orbit = new OrbitControls(camera, renderer.domElement);
        camera.position.set(-90, 140, 140);
        orbit.update();

        const ambient = new THREE.AmbientLight(0x333333);
        scene.add(ambient);

        // add sun
        const textureload = new THREE.TextureLoader();
        const sunGeo = new THREE.SphereGeometry(15, 25, 20);
        const sunMat = new THREE.MeshBasicMaterial({
            map:textureload.load(sunpic)
        });
        const sun = new THREE.Mesh(sunGeo, sunMat)
        scene.add(sun);

        // add point light
        const pointLight = new THREE.PointLight(0xffffff , 3 , 300);
        scene.add(pointLight);

        // add planets with a function
        function createPlanet(size, texture, position, ring) {
            const geometry = new THREE.SphereGeometry(size, 25, 20);
            const material = new THREE.MeshStandardMaterial({
                map:textureload.load(texture)
            });
            const planet = new THREE.Mesh(geometry, material);
            const planetObj = new THREE.Object3D;
            planetObj.add(planet);
            scene.add(planetObj);
            planet.position.x = position;

            if(ring) {
                const RingGeo = new THREE.RingGeometry(
                    ring.innerRadius,
                    ring.outerRadius, 30
                );
                const RingMat = new THREE.MeshStandardMaterial({
                    map:textureload.load(ring.texture),
                    side : THREE.DoubleSide
                });
                const Ring = new THREE.Mesh(RingGeo, RingMat);
                planetObj.add(Ring);

                Ring.position.x = position;
                Ring.rotation.x = -0.5 *Math.PI;
            }
            return (planet, planetObj);
        }
        const purplePlanet = new createPlanet(5, purplePlanetTexture, 30);
        const orangePlanet = new createPlanet(5,orangePlanetTexture, 60)

        const ringPlanet = new createPlanet(5, bluePlanetTexture, 150, {
            innerRadius: 10,
            outerRadius: 15,
            texture: saturnRingTexture
        });
        function hoverPlanet() {
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            for (let i = 0; i < intersects.length; i++) {
                intersects[i].object.material.transparent = true;
                intersects[i].object.material.opacity = 0.5;
            }
        }
        function resetMaterials() {
            for (let i = 0; i < scene.children.length; i++) {
                if (scene.children[i].material) {
                    scene.children[i].material.opacity = 1.0;
                }
            }
        }
        function onMouseMove( event ) {

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        }
        window.addEventListener( 'pointermove', onMouseMove );
        const animate = () => {
            sun.rotateY(0.002);
            purplePlanet.rotateY(0.004);
            ringPlanet.rotateY(0.001);
            orangePlanet.rotateY(0.002)
            renderer.render(scene, camera);

            hoverPlanet();
            resetMaterials();
            window.requestAnimationFrame(animate);
        };
        animate();


        // renderer.setAnimationLoop(animate);

        // // setting window size
        // window.addEventListener('resize', function(){
        //     camera.aspect = window.innerWidth/window.innerHeight;
        //     camera.updateProjectionMatrix(
        //         renderer.setSize(window.innerWidth/window.innerHeight))
        // })
        })
    return (
        <>
        <Suspense>
        <p className="font-mono text-white items-center py-2 pl-3 pr-4 absolute z-40">Welcome astronaut! Please go ahead and click on the planets to discover the sinaverse</p>
        <div>
        <canvas id="myThreeJsCanvas" />
        </div>
        </Suspense>
        </>
    );
};
