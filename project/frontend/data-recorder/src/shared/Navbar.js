import React, { Fragment } from "react";

export const Navbar = () => {
  return (
    <Fragment>
      <header className=" flex justify-between items-center h-16 px-2 bg-green-700 ">
        <div className="logo cursor-pointer" onClick={() => {}}>
          <strong>
            <span className="text-lime-300 text-2xl">Data</span>
          </strong>
          <span className="text-white text-2xl">Recorder</span>
        </div>
        <div className="searchUser lg:flex hidden">
          <input
            type="text"
            className="bg-lime-400 outline-none rounded-sm px-2 py-[7px] placeholder:text-slate-700"
            placeholder="Search"
          />
          <button className="bg-lime-500 mx-2 rounded-sm px-2 text-slate-700 hover:bg-lime-400">
            Search
          </button>
        </div>
      </header>
    </Fragment>
  );
};
