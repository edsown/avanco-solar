import React from "react";
import { GiFlamer } from "react-icons/gi";
function Navbar() {
  return (
    <>
      <div className="navbar top-0 fixed w-full bg-slate-600 flex h-16 p-4 px-4 lg:px-64 justify-center lg:text-2xl text-xl">
        <div className="logo lg:text-4xl text-3xl text-violet-50 flex flex-row mr-auto">
          <GiFlamer />
          <p className=" text-2xl ml-2 hidden lg:block">CHAMA SOLAR</p>
        </div>
        <ul className="flex lg:space-x-12 space-x-4 text-violet-50 ">
          <li className="menu-item">Entenda</li>
          <li className="menu-item">Orçamento</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
