import React from "react";
import LeftPic from "../assests/leftPic.png";
import rightPic from "../assests/rightPic.png";
import FooterImg from "../assests/footerPic.png";
import icon1 from "../assests/ant-design_twitter-outlined.png";
import icon2 from "../assests/brandico_facebook-rect.png";
import icon3 from "../assests/bx_bxl-instagram-alt.png";
import icon4 from "../assests/bx_bxl-vk.png";
import bread from "../assests/bread.png";
import { Stack, Box, Text, Image } from "@chakra-ui/react";
import "../styles/home.css";
import MyButton from "../common/Button";

const Home = () => {
  return (
    <Stack className="flex flex-row mainHome">
      <Stack
        style={{ backgroundImage: `url(${LeftPic})` }}
        className="w-[1214px] h-[840px] relative leftCon"
      >
        <Text className="uppercase lg:translate-y-[26px] sm:translate-y-[15px]  lg:translate-x-[352px] sm:translate-x-[100px]  text-white xl:text-xl lg:text-lg md:text-lg sm:text-lg mw-[248px] ">
          Peachy Pup <br /> Bakery
        </Text>
        <Box className="innerContect lg:translate-y-[260px] sm:translate-y-[150px] lg:translate-x-[310px] sm:translate-x-[100px]  text-white xl:text-lg lg:text-lg md:text-md sm:text-sm flex flex-col gap-y-12">
          <Text className="xl:text-[74px] sm:text-lg font-[800] mw-[621px] tasty">
            Tasty pastries
          </Text>
          <Text className="lg:w-[550px] sm:w-[300px] loremP">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Text>

          <MyButton text="see more" />
        </Box>
        <Box className="footCon absolute left-0 lg:top-[77%] sm:top-[76%]  lg:w-[449px] sm:w-[300px] lg-h-[201px] sm:h-[75px] leftConPic">
          <Image src={FooterImg} alt="..." className="bg-white" />
          <Box className="absolute right-14 top-4 flex flex-col lg:gap-6 sm:gap-1">
            <Image src={icon4} alt="..." />
            <Image src={icon3} alt="..." />
            <Image src={icon2} alt="..." />
            <Image src={icon1} alt="..." />
          </Box>
        </Box>
      </Stack>
      <Stack
        style={{ backgroundImage: `url(${rightPic})` }}
        className="w-[689px] h-[840px] bg-white relative"
      >
        <Image
          src={bread}
          alt="..."
          className="absolute top-[273px] lg:-left-[300px] md:-left-[230px] sm:-left[120px] rightPic"
        />
      </Stack>
    </Stack>
  );
};

export default Home;
