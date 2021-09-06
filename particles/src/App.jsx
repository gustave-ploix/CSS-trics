// https://tympanus.net/codrops/2020/12/17/recreating-a-dave-whyte-animation-in-react-three-fiber/


import React from 'react';

import { Canvas } from '@react-three/fiber';

import Dots from './components/Dots'
import './App.css'


export default function App (){

    return(

        <Canvas orthographic camera={{ zoom: 20 }} colorManagement={false}>
            <color attach="background" args={["black"]} />
            <Dots />
        </Canvas>

    )

}