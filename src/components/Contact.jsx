import React, { useState } from "react";
import {
  Stack,
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Confetti from "react-confetti";
const Contact = () => {
  // const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const toast = useToast();
  const [play, setPlay] = useState(false);

  const handleSubmit = async () => {
    try {
      let res = await axios.post("http://upskilling-egypt.com:3001/contact", {
        email: email,
        name: name,
        phone: phone,
      });
      setPlay(true);
      toast({
        title: res.data.message,
        position: "top-right",
        isClosable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.errors[0].msg,
      });
    }
  };

  return (
    <Stack className="flex items-center justify-center relative">
      <Box className="absolute top-0 left-0">
        {play && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
      </Box>
      <Text className="font-extrabold text-[#C98A40] mx-auto text-8xl my-16">
        Contact Us
      </Text>
      <Stack
        className="flex contactCon"
        style={{ flexDirection: "row", gap: "150px" }}
      >
        <Box>
          <FormControl isRequired>
            <FormLabel>Full name</FormLabel>
            <input
              placeholder="Full Name"
              type="text"
              className="px-6 py-3 font-bold outline-0 rounded-full my-2 bg-[#C98A40] placeholder:text-white"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
            />

            <FormLabel> Email</FormLabel>
            <input
              placeholder="Email"
              type="text"
              className="emailInput px-6 py-3 font-bold outline-0 rounded-full my-2 bg-[#C98A40] placeholder:text-white"
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormLabel>Phone Number</FormLabel>
            <input
              type="text"
              placeholder="Phone Number"
              className="emailInput px-6 py-3 font-bold outline-0 rounded-full  bg-[#C98A40] placeholder:text-white"
              onChange={(e) => setPhone(e.target.value)}
            />

            <Box className="my-3">
              <Button
                variant="outline"
                colorScheme="orange"
                onClick={() => handleSubmit()}
                className="rounded-full"
              >
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>
        <Box
          className="flex gap-4 flex-col"
          style={{ justifyContent: "center" }}
        >
          <Text className="text-lg">
            <EmailIcon color="orange.500" className="me-3" />
            upskilling.eg1@gmail.com
          </Text>
          <Text className="text-lg">
            <PhoneIcon color="orange.500" className="me-3" /> +201154932137
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
