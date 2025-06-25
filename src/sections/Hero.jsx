import { Canvas } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import ParallxBackground from "../components/ParallxBackground"
import { Astronote } from "../components/Astronote"
import { OrbitControls } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"


const Hero = () => {
const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section className="flex item-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        <ParallxBackground/>
        <figure className="absolute inset-0"
        style={{
          width: "100vh",
          height: "100vh"
        }}>

          <Canvas camera={{position:[0,1,3]}}>
            <Astronote 
            scale={isMobile && 0.23} 
            position={isMobile && [0, -1.5, 0]}/>
            <OrbitControls/>
          </Canvas>

        </figure>
    </section>

  )
}

export default Hero
