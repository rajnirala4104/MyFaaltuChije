import { useEffect, useRef, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import icons from "../assets";
import CutomerCard from "../component/CutomerCard";
import ServiceCard from "../component/ServiceCard";
import FeedbackCard from "../component/FeedbackCard";
import { GiHamburgerMenu } from "react-icons/gi";
import ClientMenu from "../component/ClientMenu";
import ServiceMenu from "../component/ServiceMenu";
import FeedbackMenu from "../component/FeedbackMenu";
import BlogCardMenu from "../component/BlogCardMenu";
import oilGasImage from "../assets/image/oil&gas.jpg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  Blogs,
  clientClicked,
  Clients,
  Feedbacks,
  Products,
  selectedIndustries,
  serviceClicked,
  ServiceReadMore,
  Services,
  testimonalClicked,
  userInfo,
} from "../Recoil";
import { Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import TypeWriter from "../component/TypeWriter";
import { MdClose } from "react-icons/md";
import SlideShow from "../component/SlideShow";
import { ImageWithLoader } from "../component/ImageLoader";
import WorldMapComponent from "../component/WorldMapComponent";
import ServicesCard from "../component/ServicesCard";
import AddOfferingSector from "../component/AddOfferingSector";
import { serviceCard as initialCards } from "../mockData/chemicalsData";
import Banner from "../component/Banner";
import Slder from "../component/Slder";
import PartnerSlider from "../component/PartnerSlider";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [clientClick, setclientClick] = useRecoilState(clientClicked);
  const [serviceClick, setserviceClick] = useRecoilState(serviceClicked);
  const setSelectedIndustryState = useSetRecoilState(selectedIndustries);
  const [testimonalClick, settestimonalClick] =
    useRecoilState(testimonalClicked);
  const [readMore, setReadMore] = useRecoilState(ServiceReadMore);
  const targetDivRef = useRef(null);
  const testimonialDivRef = useRef(null);
  const serviceDivRef = useRef(null);
  const clientDivRef = useRef(null);
  const userData = useRecoilValue(userInfo);
  const Blogss = useRecoilValue(Blogs);
  const services = useRecoilValue(Services);
  const PartnerShips = useRecoilValue(Clients);
  const Feebacks = useRecoilValue(Feedbacks);
  const product = useRecoilValue(Products);

  const [currentProduct, setCurrentProduct] = useState(undefined);
  const [selectedIndustry, setSelectedIndustry] = useState("Renewable Sector");
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [showOfferingsMenu, setShowOfferingsMenu] = useState(false);
  const [serviceCards, setServiceCards] = useState(initialCards);
  const [showClientMenu, setShowClientMenu] = useState(false);
  const [showBlogCardMenu, setShowBlogCardMenu] = useState(false);
  const [showFeedbackCardMenu, setShowFeedbackCardMenu] = useState(false);
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const navigate = useNavigate();
  const partnerlength = 20;
  const clientlength = 20;

  const Industries1 = [
    { name: "Renewable Sector" },
    { name: "Water Treatment & Filtration" },
    { name: "Downhole & Wellbore" },
    { name: "Exploration & Production" },
  ];

  const Industries2 = [
    { name: "Chemical" },
    { name: "IO / IOT" },
    { name: "Pipeline Division" },
    { name: "Drilling Services" },
  ];

  const handleExploreClick = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleTestimonialClick = () => {
    if (testimonialDivRef.current) {
      testimonialDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleServiceClick = () => {
    if (serviceDivRef.current) {
      serviceDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClientClick = () => {
    if (clientDivRef.current) {
      clientDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + blogsPerPage < Blogss.length) {
      setCurrentIndex(currentIndex + blogsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - blogsPerPage >= 0) {
      setCurrentIndex(currentIndex - blogsPerPage);
    }
  };

  const handleIndustryClick = (industryName) => {
    setSelectedIndustry(industryName);
    setSelectedIndustryState(industryName);
    updateCurrentProduct(industryName);
  };

  const updateCurrentProduct = (industryName) => {
    const filteredProducts = product?.filter((p) => p.sector === industryName);
    if (filteredProducts?.length > 0) {
      const latestProduct = filteredProducts.reduce((latest, current) =>
        new Date(latest.date) > new Date(current.date) ? latest : current
      );
      setCurrentProduct(latestProduct);
    } else {
      setCurrentProduct(null);
    }
  };

  useEffect(() => {
    handleIndustryClick("Renewable Sector");
  }, []);

  const ProductMoveForward = () => {
    const newArr = Industries1.concat(Industries2);
    const newIndex = (currentProductIndex + 1) % newArr.length;
    setCurrentProductIndex(newIndex);
    const data = newArr[newIndex];
    handleIndustryClick(data?.name);
  };

  const ProductMoveBackward = () => {
    const newArr = Industries1.concat(Industries2);
    const newIndex = (currentProductIndex - 1 + newArr.length) % newArr.length;
    setCurrentProductIndex(newIndex);
    const data = newArr[newIndex];
    setCurrentProduct(data);
    handleIndustryClick(data?.name);
  };

  const Slides = [
    {
      id: 1,
      video: icons.bannerVideo,
    },
  ];

  useEffect(() => {
    if (clientClick) {
      handleClientClick();
      setclientClick(false);
    }
    if (serviceClick) {
      handleServiceClick();
      setserviceClick(false);
    }
    if (testimonalClick) {
      handleTestimonialClick();
      settestimonalClick(false);
    }
  }, [clientClick, serviceClick, testimonalClick]);

  const handleAddCard = (newCard) => {
    setServiceCards((prevCards) => [...prevCards, newCard]);
  };

  const cuboidRef = useRef(null);
  const productRef = useRef(null);

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
    smooth: 500,
  });
  const icosahedronRotate = useTransform(
    cubeScrollYProgress,
    [0, 1],
    [10, -105]
  );

  const { scrollYProgress: ProductProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
    smooth: 20,
  });
  const productMovment = useTransform(ProductProgress, [0, 1], [10, -130]);

  return (
    <>
      <Header />
      <div className=" relative">
        <SlideShow Slides={Slides} />
        <div className="w-full flex items-center justify-center font-[Poppins] relative">
          <div className="lg:px-5 px-1 absolute w-full lg:w-[95vw] flex flex-col md:flex-row justify-between items-end bottom-[10rem]">
            <div className=" text-white text-xl  lg:text-2xl xl:text-4xl flex text-left items-start font-bold  w-[95vw] md:w-[70vw] text-wrap">
              Suvira Energy:
              <TypeWriter />
            </div>
            <button
              className=" grid place-items-center text-white hover:text-black size-10 rounded-full duration-500 ease-in-out hover:bg-[#D0F729] bg-[#81BC06] cursor-pointer"
              onClick={handleExploreClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={12}
                  strokeDashoffset={12}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M12 19l-7 -7M12 19l7 -7">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.795s"
                      values="12;0"
                    ></animate>
                  </path>
                  <path d="M12 13l-7 -7M12 13l7 -7">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.795s"
                      dur="0.795s"
                      values="12;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={targetDivRef}
        className="flex justify-center items-center w-full py-20"
      >
        <div className="flex  items-center w-full">
          <div className="flex items-center gap-7 md:gap-20 xl:gap-[8rem] flex-col-reverse w-full lg:flex-row overflow-x-clip">
            <div className=" flex  lg:ml-[-4.5rem] md:w-[45%]  w-[80%] h-[500px] lg:h-[715px]  ">
              <motion.div
                ref={cuboidRef}
                className="relative flex w-[100%] h-full bg-cover bg-no-repeat lg:rounded-r-xl rounded-xl"
                style={{
                  backgroundImage: `url(${icons.OilEngiWithLap})`,
                  backgroundPositionX: icosahedronRotate,
                }}
              >
                <div className="absolute flex items-start justify-start flex-col gap-5 right-[-1.5rem] top-[16%]">
                  <div className="w-[50px] h-[50px] bg-[#81BC06] rounded-full"></div>
                  <div className="w-[50px] h-[50px] bg-[#05A6F0] rounded-full"></div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col items-center justify-start">
              <div className="flex items-center justify-center">
                <h1 className="text-center w-full flex flex-col items-center">
                  <span className="md:text-4xl text-2xl  font-[Poppins] font-medium">
                    <span className="text-[#81BC06] ">Who</span> are we ?
                  </span>
                  <div className="h-[5px] w-[100px] bg-[#05A6F0] mb-8 mt-3 rounded-lg"></div>
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="flex font-normal mt-5 md:text-[1.25rem] text-sm w-[90vw] text-justify lg:w-[41vw] md:text-center items-center justify-center text-[#10100f] font-[Poppins] leading-6">
                  Suvira Energy, headquartered in the dynamic metropolis of
                  Mumbai, stands as a pioneering force in the realm of
                  technology-driven solutions for the Energy sector in India.
                  Renowned for our prowess in cutting-edge Project Management,
                  Sales &amp; Marketing, and Services, we consistently cater to
                  the diverse needs of our esteemed clientele.
                </p>
                <div className="flex items-center w-full justify-center mt-8">
                  <Link to={"/aboutus"}>
                    <button className="bg-[#05A6F01A] cursor-pointer hover:bg-[#05A6F0] hover:text-white transition-hover duration-300 ease-linear h-11 w-[40vw] md:w-[20vw]  lg:w-[11.6vw] rounded-md text-[#05A6F0]  border-[#05A6F0] border-solid border-2 font-medium text-xl leading-6 font-[Poppins]">
                      Read More
                    </button>
                  </Link>
                </div>
                <div className="flex  items-start sm:items-center justify-center w-auto mt-10 sm:w-full font-[Poppins] flex-col gap-4 sm:flex-row sm:gap-2 md:gap-5 ">
                  <div className="flex items-center justify-between gap-4">
                    <div className="bg-[#FFBA08] rounded-full size-[60px] flex justify-center items-center">
                      <img
                        src={icons.partner}
                        alt="partner"
                        className="size-7"
                      />
                    </div>
                    <span>
                      <span className="text-[20px] lg:text-[26px]">
                        Partners
                      </span>
                      <br />
                      <span className="text-[#878787]">{`${partnerlength}+`}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="bg-[#F35325] rounded-full size-[60px] flex justify-center items-center">
                      <img src={icons.client} alt="client" className="size-7" />
                    </div>
                    <span>
                      <span className="text-[20px] lg:text-[26px]">
                        Clients
                      </span>
                      <br />
                      <span className="text-[#878787]">{`${clientlength}+`}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full bg-[#F8F8F8] py-14 relative">
        <h1 className="text-center w-full flex flex-col items-center">
          <span className="text-4xl  font-[Poppins] font-medium">
            Our <span className="text-[#81BC06] ">Services</span>
          </span>
          <div className="h-[5px] w-[100px] bg-[#05A6F0] mb-8 mt-3 rounded-lg"></div>
        </h1>
        {userData && (
          <GiHamburgerMenu
            onClick={() => setShowOfferingsMenu(true)}
            className="ml-20 mt-5 cursor-pointer flex items-center justify-center text-2xl absolute right-[10%] top-[4%]"
          />
        )}
        <div className=" w-full flex items-center justify-center ">
          <div className=" lg:w-[70%] md:w-[80%] w-[95%]">
            <ServicesCard serviceCard={serviceCards} />
          </div>
        </div>
      </div>

      <div className="w-full mt-12 font-[Poppins] overflow-x-clip">
        <h1 className="text-center w-full flex flex-col items-center">
          <span className="md:text-4xl text-2xl   font-medium">
            <span className="text-[#81BC06] ">Our </span>
            Product Range
          </span>
          <div className="h-[5px] w-[100px] bg-[#05A6F0] mb-8 mt-3 rounded-lg"></div>
        </h1>

        <div className="flex  items-center w-full">
          <div className="flex items-center gap-7 mb-10 md:gap-20 xl:gap-[8rem] flex-col-reverse w-full lg:flex-row-reverse">
            <div className=" flex  lg:ml-[-4.5rem]  md:w-[45%] w-[80%] h-[500px] lg:h-[715px]">
              <motion.div
                ref={productRef}
                className="relative flex w-[100%] h-full bg-cover bg-no-repeat lg:rounded-l-xl rounded-xl"
                style={{
                  backgroundImage: `url(${icons.lubricantsImg})`,
                  backgroundPositionX: productMovment,
                }}
              >
                <div className="absolute flex items-start justify-start flex-col gap-5 left-[-1.5rem] top-[16%]">
                  <div className="w-[50px] h-[50px] bg-[#81BC06] rounded-full"></div>
                  <div className="w-[50px] h-[50px] bg-[#05A6F0] rounded-full"></div>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="flex items-center justify-center">
                <h1 className="text-center w-full flex flex-col items-center">
                  <span className="text-lg md:text-2xl lg:text-4xl  font-[Poppins] font-medium">
                    <span className="text-[#81BC06] ">
                      NANO-GRAPHENE BASED LUBRICANT
                    </span>
                  </span>
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="flex font-normal mt-5  md:text-[1.25rem] text-sm w-[90vw] leading-5 lg:w-[41vw] pb-4 text-center items-center justify-center text-[#10100F] font-[Poppins] md:leading-7">
                  Introducing Suvira Energy's Nano-Graphene Based Lubricant: the
                  next-generation solution for the oil and gas industry.
                  Engineered with cutting-edge nano-graphene technology, our
                  lubricant offers unparalleled performance, exceptional heat
                  resistance, and superior friction reduction. Designed to meet
                  the toughest demands, it ensures longer equipment life,
                  enhanced operational efficiency, and reduced maintenance
                  costs. Safe for the environment and compatible with various
                  drilling systems, Suvira Energy's Nano-Graphene Based
                  Lubricant is the perfect choice for modern energy solutions.
                  Experience the future of lubrication with Suvira Energy.
                </p>
                <div className="flex items-center w-full justify-center lg:mt-8 mt-4 ">
                  <Link to={"/products"}>
                    <button className="bg-[#05A6F01A] cursor-pointer hover:bg-[#05A6F0] hover:text-white transition-hover duration-300 ease-linear h-11 w-[40vw] md:w-[20vw]  lg:w-[11.6vw] rounded-md text-[#05A6F0]  border-[#05A6F0] border-solid border-2 font-medium text-xl leading-6 font-[Poppins]">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={serviceDivRef}
        className="  flex-col items-center justify-center hidden"
      >
        <span className="text-5xl flex items-center justify-center font-semibold text-center mt-20 mb-10">
          Exploring Our Cutting-edge Services
          {userData && (
            <GiHamburgerMenu
              onClick={() => setShowServiceMenu(true)}
              className="ml-20 mt-5 cursor-pointer flex items-center justify-center text-2xl"
            />
          )}
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 w-[1030px] mt-10 mb-20">
          {services &&
            services?.map((e, index) => (
              <ServiceCard
                key={index}
                id={e._id}
                index={index}
                services={services}
                icon={e.logo}
                heading={e.title}
                detail={e.desc}
              />
            ))}
        </div>
        {readMore && (
          <div
            key={readMore.heading}
            className="w-[355px] transition-opacity duration-1000 absolute mt-32 py-10 px-2 min-h-[300px] h-[500px] rounded-xl gap-5 bg-[#81BC06] cursor-pointer flex flex-col justify-start opacity-100 animate-fadeIn "
          >
            <div className="flex items-end justify-end p-1 w-full">
              <MdClose
                onClick={() => setReadMore(undefined)}
                className="text-2xl rounded-full border-2"
              />
            </div>
            <div className="flex items-center justify-center flex-col text-center">
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#05A6F0] rounded-full">
                <img
                  src={readMore.icon}
                  alt="icon"
                  className="w-[50px] h-[50px] object-cover"
                />
              </div>
              <p className="font-semibold text-xl mt-4 mb-2">
                {readMore.heading}
              </p>
              <p className="text-justify flex flex-col items-center justify-center text-[#10100F] px-5">
                {readMore.detail}
                <span
                  className="text-left mt-5 border-2 p-2 w-[126px] hover:bg-[#81BC06] rounded-lg flex items-center justify-center h-[39px] border-[#878787] text-black cursor-pointer"
                  onClick={() => {
                    setReadMore(undefined);
                    navigate(
                      `/services/${encodeURIComponent(readMore.heading)}`
                    );
                  }}
                >
                  Explore
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white hidden">
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="text-5xl font-bold w-[1048px] mb-7 leading-snug">
            <span className="text-[#81BC06]">
              Ingenious Creations:
              <span className="text-black">
                {" "}
                Explore the Brilliance of Our Product Range
              </span>
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[1048px]">
            {Industries1 &&
              Industries1.map((e, index) => {
                return (
                  <span
                    key={index}
                    className={`${
                      selectedIndustry === e.name ? "bg-[#FFBA08]" : "border-2"
                    } text-center cursor-pointer hover:bg-[#FFBA08] border-[#878787] p-2 rounded-lg h-[39px] flex items-center justify-center`}
                    onClick={() => handleIndustryClick(e.name)}
                  >
                    {e.name}
                  </span>
                );
              })}
          </div>
          <div className="flex items-center justify-center mt-7">
            <div className="w-[1048px] flex items-start justify-center">
              <div className="w-[65%]">
                <div className="flex gap-5">
                  {Industries2 &&
                    Industries2.map((e, index) => {
                      return (
                        <span
                          key={index}
                          className={`${
                            selectedIndustry === e.name
                              ? "bg-[#FFBA08]"
                              : "border-2"
                          }
                         text-center cursor-pointer hover:bg-[#FFBA08] mt-[-10px] border-[#878787] p-2 rounded-lg mb-10 min-w-[118px] h-[39px] flex items-center justify-center`}
                          onClick={() => handleIndustryClick(e.name)}
                        >
                          {e.name}
                        </span>
                      );
                    })}
                </div>
                <span className="font-bold text-[2rem]">
                  <span className="text-[#81BC06]">
                    {currentProduct
                      ? `${currentProduct?.name
                          .split(" ")
                          .slice(0, 2)
                          .join(" ")}`
                      : "SolarShine Pro: "}
                  </span>
                  <span>
                    {currentProduct
                      ? ` ${currentProduct?.name
                          ?.split(" ")
                          .slice(2)
                          .join(" ")}`
                      : "Unleashing the Power of Effective Solar Cleaning"}
                  </span>
                </span>
                <br />
                <br />
                <span className="font-normal text-[1.2rem] text-[#10100f]">
                  {currentProduct
                    ? currentProduct?.desc?.slice(0, 450)
                    : "Step into the future of solar maintenance with SolarShine Pro, our cutting-edge solution designed to elevate the performance of your solar panels. Join us for an exclusive product demo where we showcase the seamless efficiency and unparalleled cleaning power of SolarShine Pro."}
                  {currentProduct &&
                    currentProduct?.desc?.length > 450 &&
                    "..."}
                </span>
                <br />
                <br />
                <Link ref={clientDivRef} to={"/products"}>
                  <button className="bg-[#81BC06] text-white min-w-[150px] cursor-pointer hover:bg-[#D0F729] p-2 rounded-lg">
                    Explore More
                  </button>
                </Link>
              </div>
              <div className="relative flex items-center justify-center flex-col ml-10 rounded-lg">
                <img
                  src={currentProduct ? currentProduct?.image : icons.solar}
                  alt="Product Img"
                  className="rounded-lg object-cover w-[369.38px] h-[487.5px]"
                />
                <div className="absolute flex items-start justify-start flex-col w-full mr-14 mb-[35vh] gap-5">
                  <BiLeftArrowAlt
                    onClick={ProductMoveBackward}
                    className={`p-2 cursor-pointer hover:bg-[#C5F200] text-5xl rounded-full bg-[#81BC06] select-none text-white `}
                  />
                  <BiRightArrowAlt
                    onClick={ProductMoveForward}
                    className={`p-2 select-none text-white cursor-pointer hover:bg-blue-500 text-5xl rounded-full bg-[#05A6F0] z`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20  h-[243px] md:h-[391px] border-t-black border-b-0 border-[1px] w-full relative">
            <div className="partnersClipDiv bg-[#05A6F0] absolute left-0 md:w-[288px] md:h-[391px] h-[243px] w-[110px]"></div>
            <div className="flex items-center justify-center">
              <span className="font-semibold text-[3rem] w-[70%] text-center mt-6">
                <h1 className="text-center w-full flex flex-col items-center">
                  <span className=" text-2xl md:text-4xl  font-[Poppins] font-medium">
                    Our <span className="text-[#81BC06] ">client</span>
                  </span>
                  <div className="md:h-[5px] md:w-[100px] h-[3px] w-[50px] bg-[#05A6F0] mb-8 mt-3 rounded-lg"></div>
                </h1>

                {userData && (
                  <span className="w-full flex items-end justify-end absolute right-[10%] top-[4%]">
                    <GiHamburgerMenu
                      onClick={() => setShowClientMenu(true)}
                      className="cursor-pointer flex items-center justify-center text-2xl"
                    />
                  </span>
                )}
              </span>
            </div>
            <div className="flex items-center   justify-center mt-5 mb-5 absolute bottom-[10%] w-full">
              <div className="w-[100%]">
                {PartnerShips ? (
                  <PartnerSlider PartnerShips={PartnerShips} />
                ) : (
                  <h1 className="text-center w-full flex flex-col items-center text-red-600">
                    Partners Error
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#F8F8F8] relative">
        <div className="w-full flex items-center justify-between mt-14">
          <div className=" w-full">
            <h1 className="text-center w-full flex flex-col items-center">
              <span className=" text-2xl md:text-4xl  font-[Poppins] font-medium">
                Blogs
              </span>
              <div className="md:h-[5px] md:w-[100px] h-[3px] w-[50px] bg-[#05A6F0] mb-8 mt-3 rounded-lg"></div>
            </h1>
            {userData && (
              <span className="w-full  flex items-end justify-end absolute right-[10%] top-[4%]">
                <GiHamburgerMenu
                  onClick={() => setShowBlogCardMenu(true)}
                  className="cursor-pointer flex items-center justify-center text-2xl"
                />
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 mb-28 flex items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[80%] mt-10 mb-10 place-items-center relative">
            {Blogss &&
              Blogss.slice(currentIndex, currentIndex + blogsPerPage).map(
                (e, index) => (
                  <CutomerCard
                    blogsPerPage={blogsPerPage}
                    length={Blogss.length}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    Blogss={e}
                    key={index}
                    index={index}
                    img={e.blogImg}
                    name={e.author}
                    profileIcon={e.authorImg}
                    desc={e.title}
                    date={e.Date}
                    time={e.time}
                    showOrHide={true}
                    navigateTo={"/blogs"}
                    className={" w-[90%] md:w-[95%] xl:w-[98%]"}
                  />
                )
              )}
          </div>
        </div>
      </div>

      <div className=" w-full">{/* <Slder/> */}</div>

      {/* Feedback Div */}
      <div
        ref={testimonialDivRef}
        className="bg-white w-full md:py-20 py-10 flex items-center justify-center relative "
      >
        <div className="flex items-center justify-center flex-col w-full ">
          <h1 className="text-center w-full flex flex-col items-center">
            <span className="text-2xl md:text-4xl  font-[Poppins] font-medium">
              <span className="text-[#81BC06] ">Voices</span> of Delight
            </span>
            <div className="md:h-[5px] md:w-[100px] h-[3px] w-[50px] bg-[#05A6F0] mb-8 mt-3 rounded-lg"></div>
          </h1>
          {userData && (
            <span className="w-full  flex items-end justify-end  absolute right-[10%] top-[4%]">
              <GiHamburgerMenu
                onClick={() => setShowFeedbackCardMenu(true)}
                className="cursor-pointer flex items-center justify-center text-2xl"
              />
            </span>
          )}
          <div className="flex items-center justify-center flex-col w-[90%] lg:w-[80%]">
            {Feebacks &&
              Feebacks.map((e, index) => {
                return (
                  <>
                    {feedbackIndex === index && (
                      <FeedbackCard
                        key={index}
                        index={index}
                        setFeedbackIndex={setFeedbackIndex}
                        Feebacks={Feebacks}
                        img={e.img}
                        desc={e.feedback}
                        author={e.author}
                        rating={e.rating}
                      />
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#E6F6FD] h-full flex flex-col items-center justify-center pt-12">
        <h1 className="text-center w-full flex flex-col items-center">
          <span className="text-4xl  font-[Poppins] font-medium">
            <span className="text-[#81BC06] ">Our Stand</span>, Our Presence
          </span>
          <div className="h-[5px] w-[100px] bg-[#05A6F0] mb-8 mt-3 rounded-lg"></div>
        </h1>
        <WorldMapComponent />
      </div>
      <Footer />

              

      {showServiceMenu && (
        <ServiceMenu
          setShowServiceMenu={setShowServiceMenu}
          services={services}
        />
      )}
      {showOfferingsMenu && (
        <AddOfferingSector
          serviceCards={serviceCards}
          setServiceCards={setServiceCards}
          setShowChemicalMenu={setShowOfferingsMenu}
          pageDecode="Services"
        />
      )}
      {showFeedbackCardMenu && (
        <FeedbackMenu
          setShowFeedbackCardMenu={setShowFeedbackCardMenu}
          feedbacks={Feebacks}
        />
      )}
      {showBlogCardMenu && (
        <BlogCardMenu
          setShowBlogCardMenu={setShowBlogCardMenu}
          Blogss={Blogss}
        />
      )}
      {showClientMenu && (
        <ClientMenu
          setShowClientMenu={setShowClientMenu}
          Clientss={PartnerShips}
        />
      )}
    </>
  );
};

export default Home;
