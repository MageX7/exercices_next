"use client";
import Tableau from "./Tableau"
import Ajout from "./Ajout";
import Infobulle from "./Infobulle";

import { FaPlusCircle } from "react-icons/fa";

import {useState, useEffect} from "react"
import MaReservation from "./Types";

const Reservation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [infoOpen, setInfoOpen] = useState<boolean>(false);
    const [liste, setListe] = useState<MaReservation[]>([])

    useEffect(()=>{}, [liste])
    

  return (
    <>
        <div className="w-full h-full p-7 flex flex-col">
            <div className="h-10 flex justify-end items-center">
                <button onClick={()=>setIsOpen(true)} className="flex items-center space-x-2 text-blue-500 hover:text-blue-600">
                    <FaPlusCircle />
                    <span>Réserver</span>
                </button>
            </div>
            <Tableau liste={liste} setListe={setListe}></Tableau>
        </div>
        {isOpen && <Ajout isOpen={isOpen} setIsOpen={setIsOpen} liste={liste} setListe={setListe} setInfoOpen={setInfoOpen}/>}
        {infoOpen && <Infobulle setInfoOpen={setInfoOpen}/>}
    </>
  )
}

export default Reservation