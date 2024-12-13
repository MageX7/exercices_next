"use client";
import { useCountContext } from "@/contexts/CountContext";

const Boutons= () => {
  const {chiffre, setChiffre} = useCountContext();

  return (
    <div className="flex space-x-5">
      <button className="w-12 h-12 bg-red-400 text-white rounded-full hover:bg-red-500 flex items-center justify-center"
        onClick={()=>setChiffre(chiffre-1)}
      >-1</button>
      <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={()=>setChiffre(0)}
      >Réinitialiser</button>
      <button className="w-12 h-12 bg-green-400 text-white rounded-full hover:bg-green-500 flex items-center justify-center"
        onClick={()=>setChiffre(chiffre+1)}
      >+1</button>
    </div>
  )
}

export default Boutons