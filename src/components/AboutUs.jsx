import React from "react";
import { Stack, Box, Text, Image } from "@chakra-ui/react";
import MyButton from "../common/Button";
import leftPic from "../assests/leftPic.png";
import chief from "../assests/chief.png";

const AboutUs = () => {
  return (
    <Stack className="flex flex-row mainHome">
      <Stack
        style={{ backgroundImage: `url(${leftPic})` }}
        className="w-[1214px] h-[840px] relative"
      >
        <Text className="uppercase lg:translate-y-[26px] sm:translate-y-[15px]  lg:translate-x-[352px] sm:translate-x-[100px]  text-white xl:text-9xl lg:text-5xl md:text-5xl sm:text-2xl max-w-[475px] font-[800] aboutHead ">
          About <br /> Us
        </Text>
        <Box className="innerContect lg:translate-y-[100px] sm:translate-y-[250px] lg:translate-x-[310px] sm:translate-x-[100px]  text-white xl:text-lg lg:text-lg md:text-md sm:text-sm flex flex-col gap-y-4">
          <Text className="lg:w-[400px] sm:w-[300px] aboutText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <MyButton text="contact us" />
        </Box>
      </Stack>
      <Stack
        style={{ backgroundImage: `url()` }}
        className="w-[683px] h-[710px] relative"
      >
        <Image
          src={chief}
          alt="..."
          className=" absolute top-[90px] lg:-left-[115px] md:-left-[230px] sm:-left[120px] cheifPic"
        />
      </Stack>
    </Stack>
  );
};

export default AboutUs;
