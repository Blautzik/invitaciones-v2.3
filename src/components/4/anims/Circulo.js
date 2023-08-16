import React from 'react'
import Lottie from "lottie-react";
import circuloAnimation from "./circulo.json"

const Circulo = () => {
  return (
    <Lottie animationData={circuloAnimation} loop={true} SetSpeed={0.5}
    style={{
        width: 600,
        height:500,
    }} 
    />
  )
}

export default Circulo




