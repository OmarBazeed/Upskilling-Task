import React from "react";
import { Button } from "@chakra-ui/react";
const MyButton = ({ text }) => {
  return (
    <>
      <Button className="rounded-full lg:w-[194px] sm:w-[75px] lg:h-[60px] sm:h-[20px] text-white font-bold myButton">
        {text}
      </Button>
    </>
  );
};

export default MyButton;
