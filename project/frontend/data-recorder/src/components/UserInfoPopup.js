import axios from "axios";
import React, {
   Fragment,
   Suspense,
   useContext,
   useEffect,
   useState,
} from "react";
import { UserInfoPopupProvider } from "../Contexts";
import { capitalizeWord } from "../Utils";

export const UserInfoPopup = () => {
   const { userInfoPopup, setUserInfoPopup } = useContext(
      UserInfoPopupProvider
   );
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      setUsers([user]);
   }, []);

   return (
      <Fragment>
         <Suspense fallback="loadin..">
            <section className="bg-[rgba(94,94,94,0.3)] backdrop-blur-md absolute top-0 left-0 w-full h-full  flex justify-center items-center">
               <span
                  onClick={() => {
                     setUserInfoPopup(!userInfoPopup);
                     localStorage.removeItem("userInfo");
                  }}
                  className="absolute top-[3%] left-[95%] my-3 cursor-pointer"
               >
                  <i className="fa-solid fa-x text-lime-200 hover:text-lime-300 text-xl lg:text-[2rem]"></i>
               </span>
               <div className="content rounded-lg  w-[50%] lg:w-[50%] h-[50%] bg-lime-100 shadow-lg  my-4 flex flex-col">
                  {users.map((singleUserData, i) => {
                     return (
                        <Fragment key={i}>
                           <Suspense>
                              <div className="flex justify-center rounded-lg flex-col items-center bg-lime-200 w-full h-[100vh]">
                                 <div className="title flex justify-center items-center ">
                                    <span className="text-5xl font-bold text-green-700">
                                       {capitalizeWord(singleUserData.name)}
                                       <span className="text-[10px] m-2">
                                          {singleUserData.gender}
                                       </span>
                                    </span>
                                 </div>
                                 <div className="userInfo my-3 flex justify-center  items-start flex-col">
                                    <div className="phone flex justify-center items-center ">
                                       <span className="text-2xl  font-bold text-green-700 ">
                                          Phone -
                                       </span>
                                       <span className="mx-3 text-xl font-bold text-lime-600">
                                          {singleUserData.phoneNumber}
                                       </span>
                                    </div>
                                    <div className="email flex justify-center items-center ">
                                       <span className="text-2xl  font-bold text-green-700 ">
                                          Email -
                                       </span>
                                       <span className="mx-3 text-xl font-bold text-lime-600">
                                          {singleUserData.email}
                                       </span>
                                    </div>
                                    <div className="Address flex justify-center items-center ">
                                       <span className="text-2xl  font-bold text-green-700 ">
                                          Address -
                                       </span>
                                       <span className="mx-3 text-xl font-bold text-lime-600">
                                          {singleUserData.address}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </Suspense>
                        </Fragment>
                     );
                  })}
               </div>
            </section>
         </Suspense>
      </Fragment>
   );
};
