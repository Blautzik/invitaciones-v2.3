import React from 'react'
import Lottie from "lottie-react";
import regaloAnimation from "./regalo.json"

const RegaloIcon = () => {
  return (
    <Lottie animationData={regaloAnimation} loop={true} />
  )
}

export default RegaloIcon