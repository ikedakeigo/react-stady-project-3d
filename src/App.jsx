/* eslint-disable react/no-unknown-property */
import { ContactShadows, Float, Html, OrbitControls, PresentationControls, Text, useGLTF } from "@react-three/drei";
import "./App.css";
import { Canvas } from "react-three-fiber";
function App() {
  const macbook = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
  const meet_food = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/whole-ham/model.gltf");
  const meet_drink = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/wine-red/model.gltf");

  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6] }}>
        <color args={["#2a487c"]} attach="background" />
        {/* <OrbitControls /> */}
        <ambientLight />
        <directionalLight intensity={1.4} />
        {/* <mesh>
      <boxGeometry />
      <meshStandardMaterial />
      </mesh> */}
      <PresentationControls global
      config={{ mass: 4, tension: 500}}
      snap={true}

      >
        <Float rotationIntensity={2.5}>
        <rectAreaLight
        color={"#0021a7"}
        intensity={55}
        rotation={[0.1, Math.PI, 0]}
        width={1}
        height={1}
        />
        <primitive object={macbook.scene} position={[0, -1.5, 0]}>
          <Html
          position={[0, 1.56, -1.4]}
          distanceFactor={1.17}
          rotation-x={-0.256}
          transform
          wrapperClass="htmlScreen"
          >
            <iframe
            src="https://inakanomado.com/"
            frameborder="0">
          </iframe>
          </Html>

        </primitive>
        </Float>

        <Float rotationIntensity={2.5}>
        <rectAreaLight
        color={"#0021a7"}
        intensity={55}
        rotation={[0.1, Math.PI, 0]}
        width={1}
        height={1}
        />
        <primitive
        object={meet_food.scene}
        position={[-2.5, -1.5, 0]}
        scale={[3, 3, 3]}
        >

        </primitive>
        </Float>

        <Float rotationIntensity={2.5}>
        <rectAreaLight
        color={"#0021a7"}
        intensity={55}
        rotation={[0.1, Math.PI, 0]}
        width={1}
        height={1}
        />
        <primitive
        object={meet_drink.scene}
        position={[2.5, -1.5, 0]}
        scale={[3, 3, 3]}
        rotation-y={[2]}
        >

        </primitive>
        </Float>

        <Text
          font="RobotoSlab-Bold.ttf"
          fontSize={0.5}
          position={[0, 1.725, 0.75]}
        >
        React-Three-Fiber
        </Text>
        </PresentationControls>

        <ContactShadows
        scale={7}
        blur={2.4}
        opacity={0.7}
        position-y={-2.0}
        />
      </Canvas>
    </div>
  );
}

export default App;
