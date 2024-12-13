"use client";
import React, { ReactElement, useEffect } from "react";

interface Props {
  children: ReactElement[];
  setNotif: React.Dispatch<React.SetStateAction<boolean>>;
  setSelection: React.Dispatch<React.SetStateAction<number[]>>;
}

const VoitureDeroule: React.FC<Props> = ({
  setNotif,
  setSelection,
  children,
}) => {
  useEffect(() => {
    clearTimeout(resetTimout);
    return () => {
      resetTimout = setTimeout(() => {
        setSelection([]);
        setNotif(true);
        setTimeout(() => {
          setNotif(false);
        }, 3000);
      }, 5000);
    };
  }, []);
  return (
    <div className="absolute right-0 top-[110%] rounded-md inline-grid grid-cols-4 p-2 bg-gray-200 gap-[10px] bg-white border border-[#B67332]">
      {children}
    </div>
  );
};

let resetTimout: any;

export default VoitureDeroule;
