import { Environment, Float, Lightformer, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Group } from "three";
import * as THREE from "three";

/* ---------------------------------------------------------------------------
   The one and only place that knows about three.js.
   A fixed canvas sits behind the whole page: a glass torus knot, an obsidian
   pebble wrapped in a red "signal ring", and a few floating accents.
   Everything eases toward the pointer and drifts down slightly on scroll.
--------------------------------------------------------------------------- */

/** Track one media query without any external hook library. */
function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => setMobile(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return mobile;
}

/** Rotates the whole group gently toward the pointer, with damping. */
function Rig({ children }: { children: ReactNode }) {
  const group = useRef<Group>(null);
  const reduced = useReducedMotion();

  useFrame((state, delta) => {
    const node = group.current;
    if (!node || reduced) return;

    const targetY = state.pointer.x * 0.22;
    const targetX = -state.pointer.y * 0.16;
    node.rotation.y = THREE.MathUtils.damp(node.rotation.y, targetY, 1.6, delta);
    node.rotation.x = THREE.MathUtils.damp(node.rotation.x, targetX, 1.6, delta);

    // Shapes slowly sink as you scroll, so new sections feel like new depths.
    const page = Math.min(window.scrollY / window.innerHeight, 4);
    node.position.y = THREE.MathUtils.damp(node.position.y, page * 0.55, 2.2, delta);
  });

  return <group ref={group}>{children}</group>;
}

/** Organic float that turns itself off when the user prefers reduced motion. */
function Drift({ reduced, speed, children }: { reduced: boolean; speed: number; children: ReactNode }) {
  if (reduced) return <>{children}</>;
  return (
    <Float speed={speed} rotationIntensity={0.45} floatIntensity={1.15}>
      {children}
    </Float>
  );
}

function Shapes({ mobile, reduced }: { mobile: boolean; reduced: boolean }) {
  const pebblePosition: [number, number, number] = mobile ? [-1.6, 4.4, -4] : [-3.9, 1.5, -2.6];

  return (
    <>
      {/* Hero piece — the glass torus knot */}
      <Drift reduced={reduced} speed={1.1}>
        <mesh position={mobile ? [0, 2.4, -3] : [3.6, 0.3, -1.5]} scale={mobile ? 0.7 : 1}>
          <torusKnotGeometry args={[1.05, 0.32, mobile ? 140 : 220, mobile ? 24 : 36]} />
          <MeshTransmissionMaterial
            samples={4}
            resolution={256}
            thickness={1.3}
            roughness={0.14}
            ior={1.45}
            chromaticAberration={0.35}
            distortion={0.25}
            distortionScale={0.5}
            temporalDistortion={0.08}
            color="#d7dce8"
          />
        </mesh>
      </Drift>

      {/* The obsidian pebble with its red signal ring */}
      <Drift reduced={reduced} speed={0.9}>
        <mesh position={pebblePosition} scale={[1.15, 1.4, 1]}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshPhysicalMaterial color="#161a26" roughness={0.3} clearcoat={1} clearcoatRoughness={0.25} />
        </mesh>
        <mesh position={pebblePosition} rotation={[1.15, 0.35, 0]}>
          <torusGeometry args={[2.1, 0.016, 12, 128]} />
          <meshStandardMaterial color="#e5484d" emissive="#e5484d" emissiveIntensity={1.4} roughness={0.4} />
        </mesh>
      </Drift>

      {/* Floating accents */}
      <Drift reduced={reduced} speed={1.4}>
        <mesh position={[-2.7, -2.1, 0.6]}>
          <octahedronGeometry args={[0.32]} />
          <meshPhysicalMaterial color="#e5484d" roughness={0.18} clearcoat={1} />
        </mesh>
      </Drift>
      <Drift reduced={reduced} speed={1.2}>
        <mesh position={[2.9, -2.3, 0.9]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshStandardMaterial color="#eceae3" metalness={0.5} roughness={0.3} />
        </mesh>
      </Drift>
      {!mobile && (
        <Drift reduced={reduced} speed={1.6}>
          <mesh position={[4.6, 2.5, -3]}>
            <octahedronGeometry args={[0.2]} />
            <meshStandardMaterial color="#8a93a8" metalness={0.6} roughness={0.25} />
          </mesh>
        </Drift>
      )}
    </>
  );
}

export default function Scene() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion() ?? false;

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      <Canvas
        dpr={mobile ? [1, 1.5] : [1, 1.75]}
        camera={{ position: [0, 0, 9], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 5]} intensity={0.8} />

        {/* Procedural studio lighting — renders locally, no HDR download. */}
        <Environment resolution={256}>
          <Lightformer form="circle" intensity={4} position={[0, 5, -9]} scale={2} />
          <Lightformer form="rect" intensity={3} color="#e5484d" position={[-5, 1, -1]} scale={[3, 0.8]} />
          <Lightformer form="rect" intensity={2} color="#8a93a8" position={[5, -1, -1]} scale={[3, 0.8]} />
        </Environment>

        <Rig>
          <Shapes mobile={mobile} reduced={reduced} />
        </Rig>
      </Canvas>
    </div>
  );
}
