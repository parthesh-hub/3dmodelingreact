import React, { Suspense }  from "react";
import './styles.css';

import Model from "./model2";

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";



function App() {



  return (

    <React.Fragment>
      
          <div className="canvas1">
            <Canvas >
                <OrbitControls />
                <ambientLight intensity={0.6} />
                <directionalLight intensity={0.5} />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
            </Canvas>
            
          </div>
      
    </React.Fragment>

  );
}

export default App;

