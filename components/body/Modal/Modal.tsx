"use client";

import { FaPlusCircle } from "react-icons/fa";
import { MdMode } from "react-icons/md";

import {useState, useRef} from "react";
import Form1 from "./Form1";

const sleep = (ms:number): Promise<void> =>{
  return new Promise((resolve)=>setTimeout(resolve, ms))
}


const Modal = () => {

  const [openModal, setOpenModal] = useState<boolean>(false)

  const open = async ()=>{
    setOpenModal(true)
  }

  return (<>
    <div className="flex space-x-20 items-center justify-center">
      <button onClick={()=>open()} className="text-green-500 text-3xl hover:text-green-600"><FaPlusCircle></FaPlusCircle></button>
      <button className="text-blue-500 text-3xl hover:text-blue-600"><MdMode></MdMode></button>
    </div>
    {openModal && <Form1 setOpenModal={setOpenModal}/>}
  </>
  )
}

export default Modal