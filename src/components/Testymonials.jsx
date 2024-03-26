import React from "react";
import { Stack, Text, Box, Card, Heading, Image } from "@chakra-ui/react";
import testmonialsPic from "../assests/testomoials.png";
import startsPic from "../assests/stars.png";
import MyButton from "../common/Button";

const Testymonials = () => {
  return (
    <Stack
      style={{ backgroundImage: `url(${testmonialsPic})` }}
      className="w-full h-[898px] bg-[#C98A40]"
    >
      <Text className="font-extrabold text-white mx-auto text-8xl my-16">
        Testymonials
      </Text>
      <Box className="flex flex-wrap">
        <Card maxW="sm" className="border bg-white m-auto p-2 rounded-xl px-5">
          <Text className="text-[#C98A40] text-xl font-bold"> Test</Text>
          <Stack mt="6" spacing="3">
            <Heading size="md" className="font-bold text-[#C98A40]"></Heading>
            <Text className="max-w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Text>
          </Stack>
          <Image src={startsPic} alt="..." className="w-[150px] my-4" />
        </Card>
        <Card maxW="sm" className="border bg-white m-auto p-2 rounded-xl px-5">
          <Text className="text-[#C98A40] text-xl font-bold"> Test</Text>
          <Stack mt="6" spacing="3">
            <Heading size="md" className="font-bold text-[#C98A40]"></Heading>
            <Text className="max-w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Text>
          </Stack>
          <Image src={startsPic} alt="..." className="w-[150px] my-4" />
        </Card>
      </Box>
      <Box className="flex flex-wrap">
        <Card maxW="sm" className="border bg-white m-auto p-2 rounded-xl px-5">
          <Text className="text-[#C98A40] text-xl font-bold"> Test</Text>
          <Stack mt="6" spacing="3">
            <Heading size="md" className="font-bold text-[#C98A40]"></Heading>
            <Text className="max-w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Text>
          </Stack>
          <Image src={startsPic} alt="..." className="w-[150px] my-4" />
        </Card>
        <Card maxW="sm" className="border bg-white m-auto p-2 rounded-xl px-5">
          <Text className="text-[#C98A40] text-xl font-bold"> Test</Text>
          <Stack mt="6" spacing="3">
            <Heading size="md" className="font-bold text-[#C98A40]"></Heading>
            <Text className="max-w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Text>
          </Stack>
          <Image src={startsPic} alt="..." className="w-[150px] my-4" />
        </Card>
      </Box>
      <Box className="mx-auto">
        <MyButton text="contact us" />
      </Box>
    </Stack>
  );
};

export default Testymonials;
