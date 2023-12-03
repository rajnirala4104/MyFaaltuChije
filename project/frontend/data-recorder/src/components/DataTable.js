import axios from "axios";
import React, {
   Fragment,
   Suspense,
   useContext,
   useEffect,
   useState,
} from "react";
import "../CSS/utils.css";
import { UserInfoPopupProvider } from "../Contexts";
import { capitalizeWord } from "../Utils";
import { getAllUsers } from "../api/service/users.service";

export const DataTable = () => {
   const [users, setUsers] = useState([]);
   const { userInfoPopup, setUserInfoPopup } = useContext(
      UserInfoPopupProvider
   );

   const fetchAllUsesFromApi = async () => {
      try {
         const { data } = await getAllUsers();
         setUsers(data.data);
      } catch (e) {
         console.log("Oops!! something went wron fetchChats function");
      }
   };
   useEffect(() => {
      fetchAllUsesFromApi();
   }, []);
   //    console.log(users);

   return (
      <Fragment>
         <Suspense fallback="loading..">
            {!users ? (
               <div className="w-full h-full flex justify-center items-center">
                  <span>Nothing to show here..</span>
               </div>
            ) : (
               <div className="flex flex-col justify-start rounded-md border border-green-800 overflow-x-auto w-[90%] h-[74vh] lg:w-[80%] ">
                  <table className="table-fixed rounded-md ">
                     <thead className="bg-green-700 text-lime-300">
                        <tr className="">
                           <th>Sno.</th>
                           <th>Name</th>
                           <th>Gender</th>
                           <th>Address</th>
                           <th>Phone</th>
                           <th>Email</th>
                        </tr>
                     </thead>
                     <tbody className="my-2 px-2">
                        {users.map((singleUserData, i) => {
                           return (
                              <Fragment key={i}>
                                 <tr
                                    onClick={() => {
                                       localStorage.setItem(
                                          "userInfo",
                                          JSON.stringify(singleUserData)
                                       );
                                       setUserInfoPopup(!userInfoPopup);
                                    }}
                                    className={`my-2  h-12 cursor-pointer hover:bg-green-600 hover:text-lime-300  ${
                                       i % 2 === 0
                                          ? "bg-lime-200"
                                          : "bg-lime-300"
                                    }`}
                                 >
                                    <td className="mx-3 m-auto border border-black px-3">
                                       <span>{i + 1}</span>
                                    </td>
                                    <td className="mx-3 m-auto border border-black px-3">
                                       <span>
                                          {capitalizeWord(singleUserData.name)}
                                       </span>
                                    </td>
                                    <td className="mx-3 m-auto border border-black px-3">
                                       <span>
                                          {capitalizeWord(
                                             singleUserData.gender
                                          )}
                                       </span>
                                    </td>
                                    <td className="mx-3 m-auto border border-black px-3">
                                       <span>{singleUserData.address}</span>
                                    </td>
                                    <td className="mx-3 m-auto border border-black px-3">
                                       <span>{singleUserData.phoneNumber}</span>
                                    </td>
                                    <td className="mx-3 m-auto border border-black px-3">
                                       <span>{singleUserData.email}</span>
                                    </td>
                                 </tr>
                              </Fragment>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
            )}
         </Suspense>
      </Fragment>
   );
};
