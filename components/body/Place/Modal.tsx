"use client";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";

import Place from "./Place";
import VoitureDeroule from "./VoitureDeroule";
import Notif from "./Notif";

interface Props {
  setPlace: React.Dispatch<React.SetStateAction<number[]>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  place: number[];
  titre: string;
}
const Modal: React.FC<Props> = ({ setIsOpen, setPlace, place, titre }) => {
  const numeros: number[] = [
    0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 9, 10, 11, 0, 12, 13, 14, 15, 16,
  ];
  const [estDeroule, setEstDeroule] = useState<boolean>(false);
  const [selection, setSelection] = useState<number[]>([]);
  const [notif, setNotif] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPlace([...place, ...selection]);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {notif && <Notif />}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black bg-opacity-60"
      ></div>
      <div className="relative bg-white p-4 rounded-lg shadow-lg">
        <div className="w-full flex flex-row justify-between border-b-[2px] border-b-[#93441A] pt-[4px] pb-[4px] ">
          <h3>{titre}</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-[20px] h-[20px]"
          >
            <IoCloseSharp />
          </button>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="p-2 flex flex-col gap-2  w-[400px]"
        >
          <div>
            <span>Places à réserver</span>
            <div className="w-full flex flex-row p-2 border border-[#B67332] rounded-md relative">
              <div className="flex-1"></div>
              <div
                onClick={() => setEstDeroule(!estDeroule)}
                className="w-[20px] h-[20px] flex justify-center items-center cursor-pointer"
              >
                <GoTriangleDown />
              </div>
              {estDeroule && (
                <VoitureDeroule setSelection={setSelection} setNotif={setNotif}>
                  {numeros.map((num, index) => {
                    return (
                      <React.Fragment key={index}>
                        {num == 0 ? (
                          <div className="w-[35px] h-[35px]"></div>
                        ) : (
                          <Place
                            modal={true}
                            selection={selection}
                            numero={num}
                            place={place}
                          ></Place>
                        )}
                      </React.Fragment>
                    );
                  })}
                </VoitureDeroule>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#B67332] text-white p-2 rounded-md"
          >
            Valider{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
