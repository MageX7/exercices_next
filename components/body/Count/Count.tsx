"use client";
import { useState, useRef } from "react";


import Chiffre from "./Chiffre";
import Boutons from "./Boutons";

const Count = () => {
  // const [chiffre, setChiffre] = useState<number>(0)

  return ( 
    <div className="flex flex-col items-center space-y-10">
        <Chiffre></Chiffre>
        <Boutons></Boutons>
    </div>
    )
}

export default Count