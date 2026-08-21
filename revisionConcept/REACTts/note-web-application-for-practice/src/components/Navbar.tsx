import { FaSearch } from "react-icons/fa"
import { Fragment } from "react/jsx-runtime"

export const Navbar:React.FC = () => {
  return (
    <Fragment>
      <section className="navbar py-2 px-3 bg-black sticky top-0 w-full flex justify-center items-center">
        <div className="m-2 flex justify-between items-center w-[95%]">
          <div className="logo">
            <span className="text-4xl font-bold">
              <span className="text-3xl font-bold text-emerald-400">.</span>
              <span className="text-white">demoSite</span>
            </span>
          </div>
          <div className="middelSection w-[30%]">
            <div className="flex justify-start items-cetner border border-emerald-400 rounded-full p-2">
              <div className="searchIcon rounded-full bg-emerald-400 p-4 text-center ">
                <FaSearch className="" />
              </div>
              <div className="w-full">
                <input name="navabarKaSearchBar" type="text" className="p-3 bg-transparent w-[96%] text-emerald-400 outline-none placeholder:text-emerald-500 focus:border-b focus:border-emerald-400" placeholder="type something.." />
              </div>
            </div>
          </div>
          <div className="button w-[20%] ml-3 ">
            <div className="w-full *:h-12 *:rounded-lg *:font grid gap-4 grid-cols-3 *:cursor-pointer *:transition-all *:duration-300 text-xl">
              <button className="loginBtn bg-emerald-400 border border-emerald-400 hover:bg-emerald-500">
                Login
              </button>
              <button className="signupBtn col-span-2 bg-transparent text-emerald-400 border border-emerald-400 hover:bg-emerald-500 hover:text-black ">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

