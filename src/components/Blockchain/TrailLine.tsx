import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function TrailLine({
  trail,
  color,
}: {
  trail: THREE.Vector3[];
  color: string;
}) {
  const ref = useRef<THREE.BufferGeometry>(null);

  useFrame(() => {
    if (!ref.current || trail.length < 2) return;
    const geometry = new THREE.BufferGeometry().setFromPoints(trail);
    ref.current.copy(geometry);
    ref.current.computeBoundingSphere();
  });

  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </line>
  );
}
