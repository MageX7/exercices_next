import React from 'react'
import { RxCross2 } from "react-icons/rx";
import MaReservation from "./Types"

interface Props {
    // compo: RefObject<HTMLDivElement>;
    isOpen : boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    liste :MaReservation[],
    setListe: React.Dispatch<React.SetStateAction<MaReservation[]>>,
    setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>
    
}




const Ajout:React.FC<Props> = ({isOpen, setIsOpen, liste, setListe, setInfoOpen}) => {
    const close = ()=>{
        setIsOpen(false)
    }
    const inputClasse = "mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        const ajout = {
            depart: e.target[0].value,
            destination: e.target[1].value,
            date: e.target[2].value,
            heure: e.target[3].value,
            place: e.target[4].value,
        }
        liste?.push(ajout)
        setListe(liste)
        setIsOpen(false)
        setInfoOpen(true)
    }    
    
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div onClick={()=>close()}  className="absolute inset-0 bg-black bg-opacity-60" id="overlay"></div>
        <div className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg" id="close">
            <button onClick={()=>close()} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                <RxCross2></RxCross2>
            </button>
            <form className="space-y-4" onSubmit={e=>handleSubmit(e)}>
                <div className="flex flex-col">
                    <label htmlFor="depart" className="text-sm font-medium text-gray-700">Départ</label>
                    <select name="depart" id="depart" className={inputClasse}>
                        <option value="antsirabe">Antsirabe</option>
                        <option value="antananarivo">Antananarivo</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="destination" className="text-sm font-medium text-gray-700">Destination</label>
                    <select name="destination" id="destination" className={inputClasse}>
                        <option value="antananarivo">Antananarivo</option>
                        <option value="antsirabe">Antsirabe</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
                    <input type="date" name="date" id="date" className={inputClasse} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="heure" className="text-sm font-medium text-gray-700">Heure</label>
                    <select name="heure" id="heure" className={inputClasse}>
                        <option value="7h">7h</option>
                        <option value="8h">8h</option>
                        <option value="9h">9h</option>
                        <option value="10h">10h</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="number" className="text-sm font-medium text-gray-700">Nombre de place</label>
                    <input type="number" name="place" id="number" className={inputClasse} />
                </div>
                <input type="submit" value="Valider" className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
            </form>
        </div>
    </div>
  )
}

export default Ajout