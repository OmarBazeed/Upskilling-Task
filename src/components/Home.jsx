import React from "react";
// import LeftPic from "../assests/Rectangle 264.png";
import RightPic from "../assests/Mask Group (2).png";
import FooterImg from "../assests/Mask Group (3).png";

const Home = () => {
  return (
    <section className="">
      <div
        className="leftPart"
        style={{ backgroundImage: "url('../assests/Rectangle 264.png')" }}
      >
        {/* <img src={LeftPic} alt="..." className="w-[1214px] h-[840px]" /> */}
        <h2 className="uppercase text-white text-lg translate-y-[26px] translate-x-[352px] font-bold">
          peachy pup <br /> beakary
        </h2>
        <div className="text-white translate-y-[288px] translate-x-[352px] absolute">
          <p className="uppercase  text-[74px]  font-[800] ">Tasty pastries</p>
          <p className="w-[552px] h-[78px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="uppercase font-bold bg-[#fdba10] rounded-full w-[194px] h-[60px]">
            see more
          </button>
        </div>
        <img
          className="footerImg absolute top-[800px] left-0"
          src={FooterImg}
          alt="..."
        />
      </div>

      <div className="rightPart inline-block ">
        <img src={RightPic} alt="..." className="z-[-1] w-[689px] h-[840px]" />
      </div>
    </section>
  );
};

export default Home;
