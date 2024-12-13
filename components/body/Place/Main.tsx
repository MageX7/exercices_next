"use client"
import React from 'react'
import Voiture from './Voiture'


const Main = () => {
  return (
    <div className='flex items-center justify-center gap-5 w-full h-full bg-[#e5e7e6] text-[#93441A]'>
        <Voiture titre={"Voiture 1"} identifiant={1}></Voiture>
        <Voiture titre={"Voiture 2"} identifiant={2}></Voiture>
        <Voiture titre={"Voiture 3"} identifiant={3}></Voiture>
        <Voiture titre={"Voiture 4"} identifiant={4}></Voiture>
    </div>
  )
}

export default Main