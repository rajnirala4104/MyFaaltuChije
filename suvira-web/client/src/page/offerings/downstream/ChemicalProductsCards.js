import React from "react";

const ChemicalProductsCards = ({
  cardData,
  navigate,
  splitTextInSpans,
  sectorSection,
  sector
}) => {
  const { logoSrc, cardTitle, stateAppereance } = cardData;

  return (
    <div
      className="bg-white p-5 flex flex-col items-center justify-evenly rounded-xl gap-4 shadow-md hover:bg-[#05A6F01A] transition-all ease-in-out duration-500 cursor-pointer border-[1px] border-black hover:border-[#05A6F0] hoverChemCard"
      onClick={() =>
        navigate(
          `/offerings/${sector}/${encodeURIComponent(sectorSection)}/${encodeURIComponent(cardTitle)}`,
          { state: { logoSrc, cardTitle } }
        )
      }
    >
      <img
        src={logoSrc}
        alt={cardTitle}
        className="w-full aspect-square rounded-md object-cover"
      />
      <div className="w-full h-[1px] bg-black hoverGridborder"></div>
      <h1 className="text-lg font-[Poppins] font-medium text-left w-full">
        {splitTextInSpans(
          stateAppereance,
          "text-black hovertext",
          "text-black"
        )}
      </h1>
      <div className="w-full h-[1px] bg-black hoverGridborder"></div>
      <p className=" text-[#10100F] w-full text-xl">
        {splitTextInSpans(
           (cardTitle.split(" ").length > 5 ) ?
          cardTitle.split(" ").slice(0, 15).join(" ") + "..." : cardTitle,
          "text-black hovertextGreen",
          "text-black",
          2
        )}
      </p>
    </div>
  );
};

export default ChemicalProductsCards;
