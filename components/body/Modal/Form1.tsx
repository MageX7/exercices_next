"use client";
import { RxCross2 } from "react-icons/rx";
import {useEffect, useRef} from "react"


const sleep = (ms:number): Promise<void> =>{
    return new Promise((resolve)=>setTimeout(resolve, ms))
}

interface Props{
    // compo: RefObject<HTMLDivElement>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form1:React.FC<Props> = ({setOpenModal}) => {
    const compo = useRef()
    useEffect(() =>{
        console.log("Ouverture du modal !!")
        compo.current?.classList.add("apparition")
        compo.current?.classList.remove("disparition")
    },[])
    const close = async ()=>{
        compo.current?.classList.add("disparition")
        compo.current?.classList.remove("apparition")
        await sleep(500)
        setOpenModal(false)
    }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div onClick={()=>close()}  className="absolute inset-0 bg-black bg-opacity-60" id="overlay"></div>
        <div ref={compo} className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg" id="close">
            <button onClick={()=>close()} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                <RxCross2></RxCross2>
            </button>
            <form className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="texte" className="text-sm font-medium text-gray-700">Texte</label>
                    <input type="text" name="texte" id="texte" className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="number" className="text-sm font-medium text-gray-700">Nombre</label>
                    <input type="number" name="number" id="number" className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <input type="submit" value="Valider" className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
            </form>
        </div>
    </div>
  )
}

export default Form1