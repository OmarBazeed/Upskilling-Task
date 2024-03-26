import React from "react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";

import leftPic from "../assests/rightPic.png";
import RightPic from "../assests/leftPic.png";

import n1 from "../assests/work_list/1.png";
import n2 from "../assests/work_list/2.png";
import n3 from "../assests/work_list/3.png";
import n4 from "../assests/work_list/4.png";
import MyButton from "../common/Button";

const Work = () => {
  return (
    <Stack className="flex relative" style={{ flexDirection: "row" }}>
      <Box
        style={{ backgroundImage: `url(${leftPic})` }}
        className="w-[689px] h-[840px]"
      >
        <Text className="w-[277px] absolute lg:left-[200px] sm:left-[75px] lg:top-[150px] sm:top-[250px] text-[#C98A40] lg:text-md sm:text-sm font-semibold loP">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </Text>
      </Box>
      <Stack className="mx-auto bg-transparent absolute z-50 w-3/4 lg:left-[200px] sm:left-[75px] lg:top-[450px] sm:top-[550px] stackedImgs ">
        <Box className="flex  items-start justify-between imgsContainer">
          <Image
            src={n2}
            alt="..."
            className="xl:w-[250px] lg:w-[200px] md:w-[100px] sm:w-[75px] lg:h-[260px] md:h-[170px] sm:h-[75px] rounded-xl"
          />
          <Image
            src={n1}
            alt="..."
            className="xl:w-[250px] lg:w-[200px] md:w-[100px] sm:w-[75px] lg:h-[260px] md:h-[170px] sm:h-[75px] rounded-xl"
          />
          <Image
            src={n3}
            alt="..."
            className="xl:w-[250px] lg:w-[200px] md:w-[100px] sm:w-[75px] lg:h-[260px] md:h-[170px] sm:h-[75px] rounded-xl"
          />
          <Image
            src={n4}
            alt="..."
            className="xl:w-[250px] lg:w-[200px] md:w-[100px] sm:w-[75px] lg:h-[260px] md:h-[170px] sm:h-[75px] rounded-xl"
          />
        </Box>
        <Box className="mx-auto my-2">
          <MyButton text="contact us" />
        </Box>
      </Stack>
      <Box
        style={{ backgroundImage: `url(${RightPic})` }}
        className="w-[1214px] h-[840px] relative"
      >
        <Text className="text-7xl font-[800] text-white absolute left-96 top-24 weWork">
          How we <br />
          work
        </Text>
      </Box>
    </Stack>
  );
};

export default Work;
