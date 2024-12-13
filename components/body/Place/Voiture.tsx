
"use client";
import { FaRegSquarePlus } from "react-icons/fa6";
import React, {useState} from 'react'

import Place from "./Place"
import Modal from "./Modal"

interface Props{
  titre : string
  identifiant : number
}

const Voiture:React.FC<Props> = ({titre, identifiant}) => {
  const numeros: number[] = [0,0,1,2,3,4,5,6,7,8,0,9,10,11,0,12,13,14,15,16]
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [place, setPlace] = useState<number[]>([])

  return (
    <>
    <div>
      <div  className='flex flex-row justify-between pl-3 pr-3 gap-[10px]'>
        <h3 className='font-bold'>{titre}</h3>
        <button 
          onClick={()=>setIsOpen(true)}
          className='flex items-center justify-end text-xl'
        ><FaRegSquarePlus/></button>
      </div>
      <div key={identifiant} className='min-w-[130px] p-[10px] grid grid-cols-4 gap-[10px] bg-white rounded-md shadow-md gap-2 bg-[#93441A]'>
          {numeros.map((num, index)=>{
            return (<React.Fragment key={index}>
                {num==0 ? <div className="w-[35px] h-[35px]"></div>:<Place modal={false} numero={num} place={place} selection={[]}></Place>}
              </React.Fragment>)
          })}
          
      </div>
    </div>
      {isOpen && <Modal setIsOpen={setIsOpen} setPlace={setPlace} place={place} titre={titre}/>}
    </>
  )
}

export default Voiture