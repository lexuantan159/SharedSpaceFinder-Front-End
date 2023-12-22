import React from "react";

export function HeaderAdmin({ OpenSidebar }) {
  return (
    <header className="shadow">
      <nav className="mx-auto max-w-[1200px] border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl mx-auto">
          <form className="flex-row flex-wrap items-center hidden mr-3 md:flex lg:ml-auto">
            <div className="relative flex flex-wrap items-stretch w-full">
              <span className="absolute z-10 items-center justify-center w-8 h-full py-3 pl-3 text-base font-normal leading-snug text-center bg-transparent rounded text-blueGray-300">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="relative w-full px-3 py-3 pl-10 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
              />
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default HeaderAdmin;
