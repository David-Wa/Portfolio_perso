import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function GradientBg({color1="#DBDFAC", color2="#250902", color3="#DBDFAC"}) {
  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <ShaderGradientCanvas
        lazyLoad={true}
        pixelDensity={0.7}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          control="props"
          enableCameraUpdate={false}
          brightness={1.2}
          cAzimuthAngle={250}
          cDistance={1.5}
          cPolarAngle={140}
          cameraZoom={16.51}
          color1={color1}
          color2={color2}
          color3={color3}
          grain="on"
          lightType="3d"
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.5}
          rotationX={180}
          rotationY={90}
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
          frameRate={10}
          powerPreference="low-power"
        />
      </ShaderGradientCanvas>
    </section>
  );
}