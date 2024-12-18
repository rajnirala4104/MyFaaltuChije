import React, { forwardRef } from "react";

const PageBannerWithTitle = forwardRef(({ title, backgroundImage, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full md:h-[374px] h-[150px] object-cover bg-center bg-no-repeat flex items-center justify-center ${className}`}
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <h1 className="text-center w-full flex flex-col items-center text-white">
        <span className="text-2xl md:text-4xl font-[Poppins] font-medium">
          {title}
        </span>
        <div className="md:h-[10px] md:w-[100px] h-[3px] w-[50px] bg-[#05A6F0] mb-8 md:mb-0 mt-3 rounded-lg"></div>
      </h1>
    </div>
  );
});

export default PageBannerWithTitle;
