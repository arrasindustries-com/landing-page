import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { TrailLine } from "./TrailLine";
import * as THREE from "three";

export function BlockchainNetwork() {
  const group = useRef<THREE.Group>(null);
  const pulseRef = useRef(0);
  const { camera, pointer, clock } = useThree();
  const nodes = useMemo(() => {
    return [
      new THREE.Vector3(-2.4, 0.8, 1.6),
      new THREE.Vector3(-0.8, 1.6, 1.2),
      new THREE.Vector3(1.4, 1.1, 1.4),
      new THREE.Vector3(2.4, -0.1, 1.0),
      new THREE.Vector3(0.8, -1.4, 1.2),
      new THREE.Vector3(-1.6, -1.0, 1.4),
      new THREE.Vector3(0.0, 0.0, 0.0),
      new THREE.Vector3(-2.2, 0.6, -1.2),
      new THREE.Vector3(-0.6, 1.2, -1.6),
      new THREE.Vector3(1.6, 0.8, -1.2),
      new THREE.Vector3(2.6, -0.4, -1.6),
      new THREE.Vector3(0.6, -1.6, -1.4),
      new THREE.Vector3(-1.8, -1.2, -1.2),
      new THREE.Vector3(0.2, 0.2, -2.2),
    ];
  }, []);

  const rngRef = useRef(42);
  const seeded = () => {
    rngRef.current = (rngRef.current * 9301 + 49297) % 233280;
    return rngRef.current / 233280;
  };

  const buildRoute = () => {
    const order = nodes.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(seeded() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  };

  const routeRef = useRef(buildRoute());
  const stateRef = useRef({
    idx: 0,
    t: 0,
    speed: 0.28,
    pause: 0.0,
    cycles: 0,
  });
  const packetsRef = useRef(
    Array.from({ length: 3 }).map((_, idx) => ({
      t: idx * 0.33,
      speed: 0.08 + idx * 0.015,
      trail: [] as THREE.Vector3[],
    })),
  );
  const linkRefs = useRef<THREE.LineBasicMaterial[]>([]);
  const links = useMemo(() => {
    const pairs: Array<[number, number]> = [];
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        pairs.push([i, j]);
      }
    }
    return pairs;
  }, [nodes]);

  const pointToSegmentDistance = (
    p: THREE.Vector3,
    a: THREE.Vector3,
    b: THREE.Vector3,
  ) => {
    const ab = new THREE.Vector3().subVectors(b, a);
    const ap = new THREE.Vector3().subVectors(p, a);
    const t = THREE.MathUtils.clamp(ap.dot(ab) / ab.lengthSq(), 0, 1);
    const closest = new THREE.Vector3().copy(a).add(ab.multiplyScalar(t));
    return closest.distanceTo(p);
  };

  useFrame((_, delta) => {
    const state = stateRef.current;
    if (state.pause > 0) {
      state.pause -= delta;
    } else {
      state.t += delta * state.speed;
      if (state.t >= 1) {
        state.t = 0;
        state.idx = (state.idx + 1) % routeRef.current.length;
        state.pause = 0.6;
        if (state.idx === 0) {
          routeRef.current = buildRoute();
          state.cycles += 1;
          pulseRef.current = 1;
        }
      }
    }

    const order = routeRef.current;
    const from = nodes[order[state.idx]];
    const to = nodes[order[(state.idx + 1) % order.length]];
    const eased = state.t * state.t * (3 - 2 * state.t);
    const pos = new THREE.Vector3()
      .lerpVectors(from, to, eased)
      .add(new THREE.Vector3(0, 0, 2.6));

    camera.position.lerp(pos, 0.1);
    camera.lookAt(to.x * 0.2, to.y * 0.2, to.z * 0.2);
    const targetRoll =
      pointer.x * 0.06 + Math.sin(clock.getElapsedTime() * 0.4) * 0.02;
    // eslint-disable-next-line react-hooks/immutability
    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      targetRoll,
      0.06,
    );
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        pointer.x * 0.6,
        0.08,
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        pointer.y * 0.4,
        0.08,
      );
      if (pulseRef.current > 0) {
        pulseRef.current = Math.max(0, pulseRef.current - delta * 0.6);
        const pulse = pulseRef.current;
        group.current.scale.setScalar(1 + pulse * 0.03);
      } else {
        group.current.scale.setScalar(1);
      }
    }

    packetsRef.current.forEach((packet) => {
      packet.t += delta * packet.speed;
      if (packet.t >= 1) {
        packet.t = 0;
      }
      const packetIdx = Math.floor(packet.t * order.length);
      const packetFrom = nodes[order[packetIdx % order.length]];
      const packetTo = nodes[order[(packetIdx + 1) % order.length]];
      const packetLocalT = (packet.t * order.length) % 1;
      const p = new THREE.Vector3().lerpVectors(
        packetFrom,
        packetTo,
        packetLocalT,
      );
      packet.trail.push(p.clone());
      if (packet.trail.length > 18) {
        packet.trail.shift();
      }
    });

    const heads = packetsRef.current
      .map((packet) => packet.trail[packet.trail.length - 1])
      .filter(Boolean) as THREE.Vector3[];

    links.forEach(([i, j], idx) => {
      const mat = linkRefs.current[idx];
      if (!mat) return;
      const a = nodes[i];
      const b = nodes[j];
      let minDist = Infinity;
      heads.forEach((head) => {
        const d = pointToSegmentDistance(head, a, b);
        minDist = Math.min(minDist, d);
      });
      const highlight = minDist < 0.35 ? 0.35 : 0;
      mat.opacity = 0.2 + highlight;
    });
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={0.8}
            metalness={0.2}
            roughness={0.15}
          />
        </mesh>
      ))}

      {links.map(([i, j]) => {
        const points = [nodes[i], nodes[j]];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <primitive
            key={`link-${i}-${j}`}
            object={
              new THREE.Line(
                geometry,
                new THREE.LineBasicMaterial({
                  color: "#7C3AED",
                  transparent: true,
                  opacity: 0.2,
                }),
              )
            }
          />
        );
      })}

      {packetsRef.current.map((packet, idx) => {
        const head = packet.trail[packet.trail.length - 1];
        return (
          <group key={`packet-${idx}`}>
            <TrailLine trail={packet.trail} color="#60A5FA" />
            {head && (
              <mesh position={head}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial
                  color="#60A5FA"
                  emissive="#3B82F6"
                  emissiveIntensity={1.2}
                  metalness={0.3}
                  roughness={0.1}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
