// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
   return (
      <nav className="bg-white shadow-md text-black">
         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <button
                     type="button"
                     className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                     aria-controls="mobile-menu"
                     aria-expanded="false"
                  >
                     <span className="sr-only">Open main menu</span>
                     {/* Icon when menu is closed. */}
                     <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16m-7 6h7"
                        />
                     </svg>
                     {/* Icon when menu is open. */}
                     <svg
                        className="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               </div>
               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0">
                     <Link href="/">
                        Brand
                     </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                     <div className="flex space-x-4">
                        <Link href="/">
                           Home
                        </Link>
                        <Link href="/about">
                           About
                        </Link>
                        <Link href="/services">
                           Services
                        </Link>
                        <Link href="/contact">
                           Contact
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="relative w-full max-w-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <svg
                        className="h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M10 14l2-2m0 0l2-2m-2 2h.01M4 6h16M4 10h16m-7 4h7"
                        />
                     </svg>
                  </div>
                  <input
                     className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm"
                     placeholder="Search"
                     type="search"
                     name="search"
                  />
               </div>
            </div>
         </div>

         {/* Mobile menu */}
         <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
               <Link href="/">
                  Home
               </Link>
               <Link href="/about">
                  About
               </Link>
               <Link href="/services">
                  Services
               </Link>
               <Link href="/contact">
                  Contact
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
