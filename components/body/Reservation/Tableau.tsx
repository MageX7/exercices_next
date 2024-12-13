import React from 'react'
import MaReservation from "./Types"

interface Props {
    liste: MaReservation[],
    setListe: React.Dispatch<React.SetStateAction<MaReservation[]>>
}

const Tableau:React.FC<Props> = ({liste, setListe}) => {
  return (
    <table className="w-full border-collapse border border-white-300 text-sm lg:text-base">
        <thead className="bg-blue-600 text-white">
            <tr>
                <th className="border border-white-700 p-3">Départ</th>
                <th className="border border-white-700 p-3">Destination</th>
                <th className="border border-white-700 p-3">Date</th>
                <th className="border border-white-700 p-3">Heure</th>
                <th className="border border-white-700 p-3">Nombre de places</th>
            </tr>
        </thead>
        <tbody>
            {liste.map((reserve, key)=>{
                return (
                    <tr key={key} className="hover:bg-blue-50 odd:bg-gray-50 even:bg-gray-100">
                        <td className="border border-white-300 p-3 text-gray-800 text-center">{reserve.depart}</td>
                        <td className="border border-white-300 p-3 text-gray-800 text-center">{reserve.destination}</td>
                        <td className="border border-white-300 p-3 text-gray-800 text-center">{reserve.date}</td>
                        <td className="border border-white-300 p-3 text-gray-800 text-center">{reserve.heure}</td>
                        <td className="border border-white-300 p-3 text-gray-800 text-center">{reserve.place}</td>
                    </tr>)
            })}
        </tbody>
    </table>
  )
}

export default Tableau