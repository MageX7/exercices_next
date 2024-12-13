"use client";
import {useEffect, useRef} from "react"


const sleep = (ms:number): Promise<void> =>{
    return new Promise((resolve)=>setTimeout(resolve, ms))
  }

interface Props {
    setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Infobulle:React.FC<Props> = ({setInfoOpen}) => {
    const bulle = useRef()
    useEffect(()=>{
        console.log("bonjour")
        setTimeout(()=>{
            bulle.current?.classList.add("infobulle")
            setTimeout(()=>setInfoOpen(false), 2000)
        }, 4000)


    },[])
  return (
    <div ref={bulle} className="absolute inline-block z-50 bg-green-500 rounded-md text-white p-5">La réservation a été faite avec succès</div>
  )
}

export default Infobulle