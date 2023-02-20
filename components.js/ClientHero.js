import React from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials2 from './Testimonials2';

const ClientHero = () => {
  return (
    <div>
      <div className="bg-[#151516] w-full md:h-[500px] py-[2rem] px-[3rem] ">
        <div className="pt-[6rem] md:pt-[12rem] flex justify-center flex-col items-center">
          <h1 className="text-white font-Poppins text-[19px] md:text-[40px] font-semibold">
            Clients
          </h1>
          <h3 className="text-white leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[22px] font-semibold opacity-90">
            For us, success is being respected, being trusted, being liked and
            creating solutions that we are proud of.don&apos;t
          </h3>
        </div>
      </div>
      <div className="bg-[#151516]">
        <div className="flex justify-center items-center py-7 ">
          <h1 className="text-[#56E3E7] font-Poppins text-[19px] md:text-[40px] font-semibold">
            So... What's Included?
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-[4rem] bg-[#151516] md:grid-cols-2 px-4 md:px-[9rem]">
          <section>
            <p className="bg-[#151516] text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] font-semibold">
              ✔ Start For FREE, With our Reactivation Campaign.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              🆓 We'll help you reactivate old clients and get them back through
              the door for treatment again.
            </p>
            <p className="text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] pt-[2rem] font-semibold">
              ✔ Ads ran by ELITE Ads Specialist.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              🔊 Our team of Marketing Genius' have spent R5M on ads. They are
              the best the industry has to offer. We don't let inexperienced
              people gamble with your marketing here.
            </p>
            <p className="text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] pt-[2rem] font-semibold">
              ✔Appointments and High-quality & High-volume lead generation.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              🤝🏻 Get full access to our team. Whenever you have questions talk
              to a person that knows everything about your practice and
              marketing strategy.
            </p>
            <p className="text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] pt-[2rem] font-semibold">
              ✔ Access to Dedicated Account Manager.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              📈 Your practice will undoubtable grow faster than ever.
            </p>
          </section>
          <section>
            <p className="text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] font-semibold">
              ✔ Fully Customized Landing Pages.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              Everything is custom branded to fit YOUR practice.
            </p>
            <p className="text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] pt-[2rem] font-semibold">
              ✔ Branded & Custom tailored ads.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              💯 All of our ads are made to your specifications.
            </p>
            <p className="text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] pt-[2rem] font-semibold">
              ✔ Pipelines built to suit YOUR business needs.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              📊 Whatever your patient journey looks like, we will create a
              fully customized pipeline to match it. Your team will operate more
              efficiently than ever before
            </p>
            <p className="text-[#56E3E7] font-Poppins text-[16px] md:text-[20px] pt-[2rem] font-semibold">
              ✔ Organic text / email marketing.
            </p>
            <p className="text-white font-Poppins text-[14px] md:text-[14px] pt-2 font-semibold">
              📲 Other marketing agencies may disagree - but running ads isn't
              the only way to market your business. Our team is experience with
              paid & organic marketing - and we'll help generate as much free
              traffic as possible for your practice.
            </p>
          </section>
        </div>

        <h1 className="text-center pt-[6rem] text-white font-Poppins text-[19px] md:text-[40px] font-semibold">
          REAL RESULTS FROM REAL CHIROPRACTORS…
        </h1>
        <p1 />
        <div className="relative md:ml-[14rem] flex justify-center items-center mt-[3rem] w-full md:h-[500px] md:w-[900px] ">
          <Image
            className="background-no-repeat absolute z-index-10 rounded-lg"
            src="/test3.png"
            width={300}
            height={300}
            layout="fill"
            alt="our-seo-processes-image"
          />
        </div>

      

       

        
      </div>
   
    </div>
  );
};

export default ClientHero;