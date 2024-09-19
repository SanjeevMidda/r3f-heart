import "./index.css";
import {
  OrbitControls,
  useGLTF,
  Environment,
  directionalLight,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import heart from "./heart.gltf";
import { useState } from "react";
import font from "./PPPangaia-Bold.otf";

function App(props) {
  const { nodes, materials } = useGLTF(heart);

  console.log(nodes);

  const [color, setColor] = useState("red");

  let changeColor = () => {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);

    let newColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;

    setColor(newColor);
  };
  return (
    <>
      <OrbitControls />
      <Environment preset="city" />
      <directionalLight position={[1, 2, 3]} color="white" intensity={4.5} />
      <ambientLight intensity={1.5} />
      <group {...props} dispose={null} onClick={changeColor}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle.geometry}
            material={nodes.Rectangle.material}
            position={[617.679, 1, -2010.615]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          >
            <meshBasicMaterial color="white" />
          </mesh>
          <directionalLight
            intensity={0.7}
            decay={2}
            rotation={[-0.32, 0.354, 0.762]}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
            position={[5.559, 2.65, 44.525]}
            rotation={[0.046, 0.096, 0.586]}
          >
            {" "}
            <meshBasicMaterial color="white" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[7.115, 3.81, 42.203]}
            rotation={[0.118, -0.014, 0.581]}
          >
            {" "}
            <meshBasicMaterial color="pink" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.heart_lowpoly_3.geometry}
            material={nodes.heart_lowpoly_3.material}
            position={[-0.029, 0.02, 4.42]}
            rotation={[-0.016, -0.007, 0.007]}
            scale={0.553}
          >
            <meshBasicMaterial color={color} />
          </mesh>
        </group>
      </group>
      <Text position={[0, -1.2, 0]} color="black" font={font}>
        heart
      </Text>
    </>
  );
}

export default App;
