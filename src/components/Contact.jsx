import React from "react";
import {
  Stack,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
const Contact = () => {
  return (
    <Stack className="flex items-center justify-center">
      <Text className="font-extrabold text-[#C98A40] mx-auto text-8xl my-16">
        Contact Us
      </Text>
      <Stack className="flex gap-x-3" style={{ flexDirection: "row" }}>
        <Box>
          <FormControl isRequired>
            <FormLabel>Full name</FormLabel>
            <Input
              placeholder="First name"
              className="bg-[#C98A40] p-3 text-white outline-0 rounded-lg my-2 placeholder:text-white"
            />
            <FormLabel> Email</FormLabel>
            <Input
              placeholder="First name"
              className="bg-[#C98A40] p-3 text-white outline-0 rounded-lg my-2 placeholder:text-white"
            />
            <FormLabel> Number</FormLabel>
            <Input
              placeholder="First name"
              className="bg-[#C98A40] p-3 text-white outline-0 rounded-lg my-2 placeholder:text-white"
            />
            <Box>
              <Button variant="outline" colorScheme="teal" className="block">
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>
        <Box>
          <Text>upskilling.eg1@gmail.com</Text>
          <Text>+201095851070</Text>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
