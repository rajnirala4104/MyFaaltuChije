import axios from "axios";
import React, { Fragment, Suspense, useContext, useState } from "react";
import { FormPopupProvider } from "../Contexts";
import { insertUserInDatabase } from "../api/service/users.service";

export const Form = () => {
   const { formPopup, setFormPopup } = useContext(FormPopupProvider);
   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");
   const [userAddress, setUserAddress] = useState("");
   const [userPhoneNumber, setUserPhoneNumber] = useState("");
   const [userGender, setUserGender] = useState();

   const submitHandler = async () => {
      console.log(
         userName,
         userEmail,
         userAddress,
         userPhoneNumber,
         userGender
      );
      if (
         !userName ||
         !userEmail ||
         !userAddress ||
         !userPhoneNumber ||
         !userGender
      ) {
         return "Data is invailid";
      }

      try {
         const { data } = await insertUserInDatabase({
            name: userName,
            email: userEmail,
            address: userAddress,
            phoneNumber: userPhoneNumber,
            gender: userGender,
         });

         setFormPopup(!formPopup);
         window.location.reload();
      } catch (error) {
         alert("Oops!! something went wrong.. in submit handler function");
      }
   };

   return (
      <Fragment>
         <Suspense fallback="loading..">
            <section className="bg-[rgba(29,29,29,0.3)] backdrop-blur-md absolute top-0 w-full h-full  flex justify-center items-center">
               <span
                  onClick={() => {
                     setFormPopup(!formPopup);
                  }}
                  className="absolute top-[3%] left-[95%] my-3 cursor-pointer"
               >
                  <i className="fa-solid fa-x text-lime-200 hover:text-lime-300 text-xl lg:text-[2rem]"></i>
               </span>
               <div className="content rounded-md  w-[80%] lg:w-[50%] h-[90%] bg-lime-100 shadow-lg  my-4 flex flex-col">
                  <header className=" w-[100%] h-[20%] flex justify-center items-center bg-green-700 rounded-t-md rounded-b-2xl">
                     <div className="headerContent">
                        <strong>
                           <span className="text-lime-300 text-3xl">
                              Enter Data
                           </span>
                        </strong>
                     </div>
                  </header>
                  <div className="p-3 flex flex-col justify-center items-center ">
                     <div className="name my-4">
                        <div className="w-72">
                           <div className="relative w-full min-w-[200px] h-10">
                              <input
                                 onChange={(e) => setUserName(e.target.value)}
                                 className="peer shadow-lg w-[100%] h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-gray-200 peer-focus:after:!border-green-600">
                                 Username
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="email my-4">
                        <div className="w-72">
                           <div className="relative w-full min-w-[200px] h-10">
                              <input
                                 type="email"
                                 onChange={(e) => setUserEmail(e.target.value)}
                                 className="peer shadow-lg w-[100%] h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-200 peer-focus:after:!border-green-600">
                                 Email
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="address my-4">
                        <div className="w-72">
                           <div className="relative w-full min-w-[200px] h-10">
                              <input
                                 onChange={(e) =>
                                    setUserAddress(e.target.value)
                                 }
                                 className="peer shadow-lg w-[100%] h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-gray-200 peer-focus:after:!border-green-600">
                                 Address
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="phoneNumber my-4">
                        <div className="w-72">
                           <div className="relative w-full min-w-[200px] h-10">
                              <input
                                 onChange={(e) =>
                                    setUserPhoneNumber(e.target.value)
                                 }
                                 type="number"
                                 className="peer shadow-lg w-[100%] h-full bg-transparent text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-green-gray-200 focus:border-green-600"
                                 placeholder=" "
                              />
                              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-600 peer-focus:text-green-600 before:border-green-gray-200 peer-focus:before:!border-green-600 after:border-green-gray-200 peer-focus:after:!border-green-600">
                                 Phone Number
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="gender">
                        <select
                           onChange={(e) => setUserGender(e.target.value)}
                           name="gender"
                           id="gender"
                           className="relative w-full min-w-[200px] h-10 rounded-md cursor-pointer py-2 px-1 outline-none bg-transparent shadow-lg text-green-600 "
                        >
                           <option value="">Gender</option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                           <option value="other">Other</option>
                        </select>
                     </div>
                  </div>

                  <div className="button flex justify-center items-start w-full">
                     <button
                        onClick={() => submitHandler()}
                        className="hover:bg-green-600 bg-green-700 text-lime-300 px-3 rounded-md py-2 font-bold"
                     >
                        Add Data
                     </button>
                  </div>
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};
