"use client";
import span from "@/node_modules/next/link"
import { useRouter } from "@/node_modules/next/navigation"

const Nav = () => {

  const router = useRouter();

  return (<nav>
    <ul className="flex space-x-4">
      <li><span onClick={()=>router.push("/")} className="hover:underline cursor-pointer">Accueil</span></li>
      <li><span onClick={()=>router.push("/exercices/count")} className="hover:underline cursor-pointer">Count</span></li>
      <li><span onClick={()=>router.push("/exercices/modal")} className="hover:underline cursor-pointer">Modal</span></li>
      <li><span onClick={()=>router.push("/exercices/reservation")} className="hover:underline cursor-pointer">Reservation</span></li>
      <li><span onClick={()=>router.push("/exercices/place")} className="hover:underline cursor-pointer">Place</span></li>
    </ul>
  </nav>
  )
}

export default Nav