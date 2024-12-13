"use client";
import React, {useState, useEffect} from 'react'


interface Props{
    numero : number,
    place : number[]
    modal : boolean
    selection : number[]
}

const Place:React.FC<Props> = ({numero, place, modal, selection}) => {
    const base_style:string = "w-[35px] h-[35px] rounded-md  text-white flex flex-rows justify-center items-center  "
    const background:string = "bg-[#b95f2e]"
    const reservee:string = "bg-gray-200 cursor-default"
    const modal_background:string = "bg-blue-500 hover:bg-[#1956a5] cursor-pointer"
    const bg_checked = "bg-red-500"

    const [checked, setChecked] = useState<boolean>(false)

    useEffect(()=>{
        if(selection.includes(numero)){
            setChecked(true)
        }
    }, [])

    const handleClick = ()=>{
        if(!checked){
            selection.push(numero)
        }
        else{
            const index = selection.indexOf(numero)
            selection.splice(index, 1)
        }
        setChecked(!checked)
    }
   
    return (
        <div 
            onClick={()=>handleClick()}
            className={base_style + `${
                place.includes(numero) ?  
                    reservee : (
                        modal ? 
                            (
                                checked ? bg_checked : modal_background
                            ): 
                            background
                    )}`}
        >{numero}</div>
    )
}

export default Place