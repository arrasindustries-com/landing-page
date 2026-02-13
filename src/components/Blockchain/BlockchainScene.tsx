import { Canvas } from "@react-three/fiber";
import { BlockchainNetwork } from "./BlockchainNetwork";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export function BlockchainScene() {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0B0C10"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 6]} intensity={1.1} color="#60A5FA" />
      <pointLight position={[-4, -2, 6]} intensity={0.8} color="#7C3AED" />
      <BlockchainNetwork />
      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
