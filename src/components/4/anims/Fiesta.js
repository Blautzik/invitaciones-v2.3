import React from 'react'
import Lottie from "lottie-react";
import fiestaAnimation from "./fiesta.json"

const Fiesta = () => {
  return (
    <Lottie animationData={fiestaAnimation} loop={true} />
  )
}

export default Fiesta