import React, { useMemo, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import ReadMoreBtn from "./ReadMoreBtn";
import { MdDeleteOutline } from "react-icons/md";

function AddOfferingSector({
  serviceCards,
  setServiceCards,
  setShowChemicalMenu,
  pageDecode,
}) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState(null);
  const [description, setDescription] = useState("");

  const [showAddBox, setShowAddBox] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [showDeleteDialogBox, setShowDeleteDialogBox] = useState(undefined);
  const [pdf, setPdf] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setLogo(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
      e.target.value = "";
    }
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdf(file);
    } else {
      alert("Please upload a valid PDF file.");
      e.target.value = "";
    }
  };

  

// edit

const handleEdit = (cardId) => {
  const card = serviceCards.find((item) => item.id === cardId);
  if (card) {
    setName(card.cardTile);
    setDescription(card.cardDesc);
    setLogo(card.background);
    setIsEditMode(true);
    setCurrentEditId(cardId);
  }
};

const handleSubmit = () => {
  if (!name || !description || !logo) {
    alert("Please fill all fields and upload required files.");
    return;
  }

  if (isEditMode) {
    const updatedCards = serviceCards.map((card) =>
      card.id === currentEditId
        ? {
            ...card,
            background: logo,
            cardTile: name,
            cardDesc: description,
          }
        : card
    );
    setServiceCards(updatedCards);
    setIsEditMode(false);
  } else {
    const newCard = {
      id: serviceCards.length,
      background: logo,
      cardTile: name,
      cardDesc: description,
      cardLinks: [],
    };
    setServiceCards([...serviceCards, newCard]);
  }

  setShowChemicalMenu(false);
};



  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className=" lg:w-[56rem] md:w-[80vw] w-[95%] bg-white relative p-5 pt-10">
        <div className="flex items-center justify-between ">
          <h2 className="font-bold text-2xl">Services Menu</h2>
          <span className="text-5xl flex items-center justify-center font-semibold text-center ">
            <img
              src="/add.png"
              onClick={() => setShowAddBox(true)}
              alt="add"
              className="cursor-pointer text-[#81BC06] flex items-center justify-center text-4xl"
            />
          </span>
        </div>

        <div className="absolute right-1 top-1">
          <IoIosCloseCircle
            onClick={() => setShowChemicalMenu(false)}
            className="cursor-pointer text-3xl text-black hover:text-gray-400"
          />
        </div>
        <div className=" overflow-x-scroll max-h-[60vh] relative mt-5 ">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className=" text-black">
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {serviceCards.map((card, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {card.cardTile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {card.cardDesc?.slice(0,15) + "..."}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setIsEditMode(true)}
                      className="text-white px-2 py-1 rounded hover:bg-blue-100"
                    >
                      <img loading="lazy" src="/edit.png" alt="edit" />
                    </button>
                    <button
                      onClick={() => setShowDeleteDialogBox(true)}
                      className="px-2 py-1 rounded hover:bg-red-100"
                    >
                      <MdDeleteOutline className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showAddBox && (
        <div className="p-7 bg-white w-[95%] lg:w-[50%] fixed rounded-md">
          <div className="absolute right-1 top-1">
            <IoIosCloseCircle
              onClick={() => setShowAddBox(false)}
              className="cursor-pointer text-3xl text-black hover:text-gray-400"
            />
          </div>
          <h3 className="text-4xl mb-4 w-full text-center">
          {isEditMode ? "Edit Sector" : `Add Sector to ${pageDecode}`}
        </h3>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-[#05A6F0] rounded-3xl bg-[#05A6F01A] focus:outline-none focus:ring-1 focus:ring-[#0c8ce9]"
            />
          </div>

          {/* Logo Upload */}
          <div className="mb-4">
            <label
              htmlFor="logo"
              className="flex items-center justify-center gap-5 cursor-pointer w-full p-2 border border-[#05A6F0] rounded-3xl bg-[#05A6F01A] focus:outline-none focus:ring-1 focus:ring-[#0c8ce9] text-center"
            >
              <LuUpload className="text-2xl text-[#10100f]" />
              Upload backgroundImage
              {logo && (
                <div className="mt-2">
                  <img
                    src={logo}
                    alt="Logo Preview"
                    className="h-16 w-16 object-contain border border-gray-300 rounded-full"
                  />
                </div>
              )}
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange}
              className="hidden"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full p-2 border h-40 border-[#05A6F0] rounded-3xl bg-[#05A6F01A] focus:outline-none focus:ring-1 focus:ring-[#0c8ce9]"
            ></textarea>
          </div>

          {/* PDF Upload */}
          <div className="mb-4 p-2 border border-[#05A6F0] rounded-3xl bg-[#05A6F01A] focus:outline-none focus:ring-1 focus:ring-[#0c8ce9]">
            <label
              htmlFor="pdf"
              className="flex items-center justify-center gap-5 cursor-pointer h-full"
            >
              <LuUpload className="text-2xl text-[#10100f]" />
              Upload PDF
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept="application/pdf"
              onChange={handlePdfChange}
              className="hidden h-full"
            />
            {pdf && (
              <div className="mt-2 text-sm text-gray-600">
                Uploaded File: {pdf.name}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full grid place-items-center mt-9">
          <ReadMoreBtn text={isEditMode ? "Update" : "Submit"} onClick={handleSubmit} />
          </div>
        </div>
      )}

      {/* Edit model */}


   
    </div>
  );
}

export default AddOfferingSector;
