import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'


export default function GradientBg({color1="#DBDFAC", color2="#250902", color3="#DBDFAC"}) {

  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <ShaderGradientCanvas lazyLoad={false}>
<ShaderGradient
  animate="on"
  control="props"
  enableCameraUpdate={false}
  axesHelper="off"
  brightness={1.2}
  cAzimuthAngle={250}
  cDistance={1.5}
  cPolarAngle={140}
  cameraZoom={16.51}
  color1={color1}
  color2={color2}
  color3={color3}
  destination="onCanvas"
  embedMode="off"
  //format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="on"
  lightType="3d"
  pixelDensity={0.5}
  positionX={0}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.5}
  rotationX={0}
  rotationY={0}
  rotationZ={140}
  shader="defaults"
  type="sphere"
  uAmplitude={7}
  uDensity={4.4}
  uFrequency={5.5}
  uSpeed={0.03}
  uStrength={0.3}
  uTime={0}
  wireframe={false}
/>
      </ShaderGradientCanvas>
    </section>
  );
}