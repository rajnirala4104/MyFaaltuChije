import React, { useRef, useState } from "react";
import Header from "../../../component/Header";
import PageBannerWithTitle from "../../../component/PageBannerWithTitle";
import { ImageWithLoader } from "../../../component/ImageLoader";
import icons from "../../../assets";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import PageMainTitle from "../../../component/PageMainTitle";
import Footer from "../../../component/Footer";
import OfferingsBlueGrid from "../../../component/OfferingsBlueGrid";
import { useNavigate } from "react-router-dom";
import OfferingsChemicalMenu from "../downstream/OfferingsChemicalMenu";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../../Recoil";
import { GiHamburgerMenu } from "react-icons/gi";
import { useScroll, useTransform,motion } from "framer-motion";

const Renewables = () => {
  const userData = useRecoilValue(userInfo);
  const [showChemicalMenu, setShowChemicalMenu] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = (item) => {
    navigate(`/offerings/renwable/${encodeURIComponent(item.cardTitle)}`);
  };

  const [renewanleServiecsCard, setRenewanleServiecsCard] = useState([
    {
      id: 0,
      logoSrc: icons.explorationSvg,
      cardTitle: `Well Cementing Additives`,
      cardDesc:
        "Elevating exploration and production frontiers in the energy landscape.",
    },
    {
      id: 1,
      logoSrc: icons.drillingSvg,
      cardTitle: "Speciality Chemicals",
      cardDesc:
        "Explore Suvira Energy&#39;s Industry-Leading Drilling Services ...",
    },
    {
      id: 2,
      logoSrc: icons.downholeSvg,
      cardTitle: "Speciality Chemicals",
      cardDesc:
        "Unleashing Potential Depth of Suvira Energy's Precision Solutions for Downhole",
    },
    {
      id: 3,
      logoSrc: icons.iotSvg,
      cardTitle: "Crude Additives",
      cardDesc: "Suvira Energy&#39;s cutting-edge services in IoT, IT, ...",
    },
  ]);

  const renewableHeroDesc =
    "Suvira Energy, headquartered in the dynamic metropolis of Mumbai, stands as a pioneering force in the realm of technology-driven solutions for the Energy sector in India. Renowned for our prowess in cutting-edge Project Management, Sales &amp; Marketing, and Services, we consistently cater to the diverse needs of our esteemed clientele.";

     const offeringsOilgasRef = useRef(null);
     
       const { scrollYProgress: oilGasScrollYProgress } = useScroll({
         target: offeringsOilgasRef,
         offset: ["start end", "end start"],
         smooth: 500,
       });
       const oilGasimageMove = useTransform(
         oilGasScrollYProgress,
         [0, 1],
         [1, -180]
       );
  return (
    <>
      <Header />
      <div className="page bannerve font-[Poppins]">
        <PageBannerWithTitle
          title="Offerings"
          backgroundImage={icons.AboutUs}
        />
        {/* herosection */}
        <div className="flex items-center gap-7 md:gap-20 xl:gap-[8rem] flex-col-reverse w-full lg:flex-row mt-12">
        <div className=" flex justify-center flex-col  rounded-lg lg:ml-[-4.5rem] md:w-[45%] w-[80%] h-[500px] lg:h-[715px]">
            <motion.div
              ref={offeringsOilgasRef}
              className="relative flex w-[100%] h-full bg-cover bg-no-repeat lg:rounded-l-xl rounded-xl"
              style={{
                backgroundImage: `url(${icons.offeringsOilandGas})`,
                backgroundPositionX: oilGasimageMove,
              }}
            >
              <div className="absolute flex items-start justify-start flex-col gap-5 right-[-1.5rem] top-[16%]">
                <div className="w-[50px] h-[50px] bg-[#05A6F0] rounded-full grid place-items-center">
                  <BiLeftArrowAlt className="size-7 text-white" />
                </div>
                <div className="w-[50px] h-[50px] bg-[#81BC06] rounded-full grid place-items-center">
                  <BiRightArrowAlt className="size-7 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex items-center justify-center">
              <PageMainTitle blackColorText="Renewable" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="flex font-normal mt-0 lg:mt-5 md:text-[1.25rem] text-base w-[90vw] md:w-[80vw] lg:w-[41vw] text-center items-center justify-center text-[#10100f] font-[Poppins] leading-6">
                {renewableHeroDesc}
              </p>
              <div className="flex items-center w-full justify-center mt-8">
                <button className="bg-[#05A6F01A] cursor-pointer hover:bg-[#05A6F0] hover:text-white transition-hover duration-300 ease-linear h-11 w-[40vw] md:w-[20vw]  lg:w-[11.6vw] rounded-md text-[#05A6F0]  border-[#05A6F0] border-solid border-2 font-medium text-xl leading-6 font-[Poppins]">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative">
          {userData && (
            <GiHamburgerMenu
              onClick={() => setShowChemicalMenu(true)}
              className=" cursor-pointer text-2xl absolute right-[2%] -top-[7%]"
            />
          )}
        </div>
      </div>
      <OfferingsBlueGrid
        items={renewanleServiecsCard}
        onCardClick={handleCardClick}
        bgColor="bg-[#05A6F0]"
      />
      <Footer />

      {showChemicalMenu && (
        <OfferingsChemicalMenu
          setShowChemicalMenu={setShowChemicalMenu}
          pageDecode="Renewable"
          services={renewanleServiecsCard}
          setServices={setRenewanleServiecsCard}
        />
      )}
    </>
  );
};

export default Renewables;
