
"use client";

import { useCountContext } from "@/contexts/CountContext";
// interface Props {
//     chiffre: number;
//   }

const Chiffre  = () => {
  const {chiffre, setChiffre} = useCountContext()
  
  return (
    <div className="text-8xl font-bold text-gray-800">
      {chiffre}
    </div>
  )
}

export default Chiffre