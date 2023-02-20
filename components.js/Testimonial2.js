import React from "react";
import Image from "next/image";
import Link from "next/link";
const Testimonials2 = () => {
  return (
    <div className="bg-[#151516]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-[2rem] pl-[3rem] md:pl-[6rem] py-[4rem] justify-center items-center margin-auto">
        <div className="relative flex justify-center items-center mt-[3rem] h-[400px] w-[300px]">
          <Image
            src="/assets/test1.jpg"
            width={300}
            height={300}
            layout="fill"
            alt="our-seo-processes-image"
            className="background-no-repeat absolute z-index-10 rounded-lg"
          />
        </div>
        <div className="relative flex justify-center items-center mt-[3rem] h-[400px] w-[320px]">
          <Image
            src="/assets/test8.jpg"
            width={300}
            height={300}
            layout="fill"
            alt="our-seo-processes-image"
            className="background-no-repeat absolute z-index-10 rounded-lg"
          />
        </div>
        <div className="relative flex justify-center items-center mt-[3rem] h-[380px] w-[340px]">
          <Image
            src="/assets/test3.jpg"
            width={200}
            height={300}
            layout="fill"
            className="background-no-repeat absolute z-index-10 rounded-lg"
            alt="our-seo-processes-image"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-[2rem] py-[4rem]">
        <div>
          <video
            controls
            src={"/assets/vid2.mp4"}
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div>
          <video
            controls
            src={"/assets/vid1.mp4"}
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div>
          <video
            controls
            src={"/assets/vid3.mp4"}
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>
     
    </div>
  );
};

export default Testimonials2;