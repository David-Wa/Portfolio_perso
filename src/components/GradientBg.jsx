import { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'


export default function GradientBg() {

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <ShaderGradientCanvas>
<ShaderGradient
  animate="on"
  axesHelper="off"
  brightness={1.2}
  cAzimuthAngle={250}
  cDistance={1.5}
  cPolarAngle={140}
  cameraZoom={16.51}
  color1="#DBDFAC"
  color2="#DB162F"
  color3="#DBDFAC"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="on"
  lightType="3d"
  pixelDensity={1}
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
  uSpeed={0.1}
  uStrength={0.3}
  uTime={0}
  wireframe={false}
/>
      </ShaderGradientCanvas>
    </div>
  );
}