import axios from "axios";
import React, { Fragment, Suspense, useEffect, useState } from "react";

export const DataTable = () => {
   const [users, setUsers] = useState([]);

   const fetchAllUsesFromApi = async () => {
      try {
         const config = {
            headers: {
               "Content-type": "application/json",
            },
         };
         const { data } = await axios.get("/api", config);
         setUsers(data.data);
      } catch (e) {
         console.log("Oops!! something went wron fetchChats function");
      }
   };
   useEffect(() => {
      fetchAllUsesFromApi();
   }, []);
   console.log(users);

   return (
      <Fragment>
         <Suspense fallback="loading..">
            <div className="flex flex-col justify-start rounded-md border border-green-800 overflow-x-auto w-[90%] h-[74vh] lg:w-full ">
               <table className="table-fixed rounded-md ">
                  <thead className="bg-green-700 text-lime-300">
                     <tr className="">
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th className="">Adress</th>
                        <th>Phone</th>
                        <th>Email</th>
                     </tr>
                  </thead>
                  <tbody className="my-2 px-2">
                     {users.map((singleUserData, i) => {
                        return (
                           <tr
                              className={`my-2  h-12  ${
                                 i % 2 === 0 ? "bg-lime-200" : "bg-lime-300"
                              }`}
                           >
                              <td className="mx-3 m-auto border border-black px-3">
                                 <span>{i + 1}</span>
                              </td>
                              <td className="mx-3 m-auto border border-black px-3">
                                 <span>{singleUserData.name}</span>
                              </td>
                              <td className="mx-3 m-auto border border-black px-3">
                                 <span>{singleUserData.gender}</span>
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
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </Suspense>
      </Fragment>
   );
};
