import React, { Fragment, Suspense } from "react";

export const Form = () => {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <section className=" w-[100%] h-[90vh] flex justify-center items-start">
               <div className="content rounded-md  w-[80%] h-[90%] shadow-lg  my-4 flex flex-col">
                  <header className="broder border-red-500 w-[100%] h-[20%] flex justify-center items-center bg-green-700 rounded-t-md rounded-b-2xl">
                     <div className="headerContent">
                        <strong>
                           <span className="text-lime-300 text-3xl">
                              Enter Data
                           </span>
                        </strong>
                     </div>
                  </header>
                  <div className="p-3">
                     <div className="name my-4">
                        <div class="w-72">
                           <div class="relative w-full min-w-[200px] h-10">
                              <input
                                 class="peer w-full h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-gray-200 peer-focus:after:!border-green-600">
                                 Username
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="email my-4">
                        <div class="w-72">
                           <div class="relative w-full min-w-[200px] h-10">
                              <input
                                 class="peer w-full h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-200 peer-focus:after:!border-green-600">
                                 Email
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="address my-4">
                        <div class="w-72">
                           <div class="relative w-full min-w-[200px] h-10">
                              <input
                                 class="peer w-full h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-gray-200 peer-focus:after:!border-green-600">
                                 Address
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="phoneNumber my-4">
                        <div class="w-72">
                           <div class="relative w-full min-w-[200px] h-10">
                              <input
                                 type="number"
                                 class="peer w-full h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-gray-200 peer-focus:after:!border-green-600">
                                 Phone Number
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="gender">
                        {/* <div class="flex ">
                           <div class="inline-flex items-center">
                              <label
                                 class="relative flex items-center p-3 rounded-full cursor-pointer"
                                 htmlFor="html"
                              >
                                 <input
                                    name="type"
                                    type="radio"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                    id="html"
                                 />
                                 <span class="absolute text-green-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       class="h-3.5 w-3.5"
                                       viewBox="0 0 16 16"
                                       fill="currentColor"
                                    >
                                       <circle
                                          data-name="ellipse"
                                          cx="8"
                                          cy="8"
                                          r="8"
                                       ></circle>
                                    </svg>
                                 </span>
                              </label>
                              <label
                                 class="mt-px font-light text-green-600 cursor-pointer select-none"
                                 htmlFor="html"
                              >
                                 Male
                              </label>
                           </div>
                           <div class="inline-flex items-center">
                              <label
                                 class="relative flex items-center p-3 rounded-full cursor-pointer"
                                 htmlFor="react"
                              >
                                 <input
                                    name="type"
                                    type="radio"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-700 checked:before:bg-green-700 hover:before:opacity-10"
                                    id="react"
                                    checked
                                 />
                                 <span class="absolute text-green-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       class="h-3.5 w-3.5"
                                       viewBox="0 0 16 16"
                                       fill="currentColor"
                                    >
                                       <circle
                                          data-name="ellipse"
                                          cx="8"
                                          cy="8"
                                          r="8"
                                       ></circle>
                                    </svg>
                                 </span>
                              </label>
                              <label
                                 class="mt-px font-light text-green-600 cursor-pointer select-none"
                                 htmlFor="react"
                              >
                                 Female
                              </label>
                           </div>
                           <div class="inline-flex items-center">
                              <label
                                 class="relative flex items-center p-3 rounded-full cursor-pointer"
                                 htmlFor="react"
                              >
                                 <input
                                    name="type"
                                    type="radio"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-700 checked:before:bg-green-700 hover:before:opacity-10"
                                    id="react"
                                    checked
                                 />
                                 <span class="absolute text-green-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       class="h-3.5 w-3.5"
                                       viewBox="0 0 16 16"
                                       fill="currentColor"
                                    >
                                       <circle
                                          data-name="ellipse"
                                          cx="8"
                                          cy="8"
                                          r="8"
                                       ></circle>
                                    </svg>
                                 </span>
                              </label>
                              <label
                                 class="mt-px font-light text-green-600 cursor-pointer select-none"
                                 htmlFor="react"
                              >
                                 Other
                              </label>
                           </div>
                        </div> */}

                        <select
                           name="gender"
                           id="gender"
                           className="w-[100%] cursor-pointer py-2 px-1 outline-none bg-white text-green-600 "
                        >
                           <option
                              className="hover:bg-green-600 hover:text-lime-300"
                              value="male"
                           >
                              Male
                           </option>
                           <option value="femal">Female</option>
                           <option value="other">Other</option>
                        </select>
                     </div>
                  </div>

                  <div className="button flex justify-center items-start w-full">
                     <button className="hover:bg-green-600 bg-green-700 text-lime-300 px-3 rounded-md py-2 font-bold">
                        Add Data
                     </button>
                  </div>
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};
