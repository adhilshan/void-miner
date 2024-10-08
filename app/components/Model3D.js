"use client";
import Head from "next/head";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../styles/model.css";
const Model3D = () => {
  const gltf = useLoader(GLTFLoader, "/assets/coin.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function RenderModel() {
  return (
    <div>
      <div className="globe">
        <div className="shade"></div>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={3} />

          {/* Purple lights from various directions */}
          <pointLight color={0x800080} intensity={10} distance={50} position={[5, 0, 0]} />
          <pointLight color={0x800080} intensity={10} distance={50} position={[-5, 0, 0]} />
          <pointLight color={0x800080} intensity={10} distance={50} position={[0, 5, 0]} />
          <pointLight color={0x800080} intensity={10} distance={50} position={[0, -5, 0]} />
          <pointLight color={0x800080} intensity={10} distance={50} position={[0, 0, 5]} />
          <pointLight color={0x800080} intensity={10} distance={50} position={[0, 0, -5]} />

          {/* Blue lights from front and back */}
          <pointLight color={0x0000FF} intensity={200} distance={500} position={[4, 5, 4]} />
          <pointLight color={0xA020F0} intensity={200} distance={500} position={[-4, 5, 4]} />

          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <Model3D />
          </Suspense>
          <OrbitControls autoRotate enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        </Canvas>
      </div>
    </div>
  );
}
