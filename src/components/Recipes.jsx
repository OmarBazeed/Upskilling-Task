import React, { useCallback, useEffect, useState } from "react";
import {
  Stack,
  Text,
  Box,
  Card,
  CardBody,
  Image,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

const Recipes = () => {
  let [recs, setRecs] = useState([]);

  const fetchingData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
      );
      setRecs(res.data.meals);
      console.log(res.data.meals);
    } catch (error) {}
  }, []);
  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  return (
    <Stack className="flex file:before:justify-center items-center container-fluid w-full ">
      <Text className="xl:text-8xl lg:text-4xl sm:text-lg font-extrabold text-[#C98A40] uppercase">
        Recipes
      </Text>
      <Box className="flex flex-row flex-wrap gap-4">
        {recs.length > 0 &&
          recs.map((rec) => {
            return (
              <Card
                maxW="sm"
                key={rec.idMeal}
                className="border border-[#C98A40] m-auto p-2"
              >
                <CardBody>
                  <Image
                    src={rec.strMealThumb}
                    alt="..."
                    borderRadius="lg"
                    className="w-[380px] h-[297px] rounded-xl"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" className="font-bold text-[#C98A40]">
                      {rec.strMeal}
                    </Heading>
                    <Text className="max-w-[300px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
      </Box>
    </Stack>
  );
};

export default Recipes;
