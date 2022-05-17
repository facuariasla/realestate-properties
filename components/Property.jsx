import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/default-house.jpg";

export const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  const colorComp = useColorModeValue('gray.200', 'gray.700');

  return (
    <Link href={`/property/${externalID}`} passHref>
      <Stack padding={1}>
        <Flex
          flexWrap="wrap"
          w="420px"
          p={4}
          justifyContent="flex-start"
          cursor="pointer"
          border="1px"
          borderColor={colorComp}
          boxShadow="base"
          rounded="md"
          _hover={{ boxShadow: "2xl", rounded: "md" }}
          _active={{ boxShadow: "2xl", rounded: "md"}}
        >
          <Box>
            <Image
              src={coverPhoto ? coverPhoto.url : DefaultImage}
              alt="house"
              width={400}
              height={260}
            ></Image>
          </Box>
          <Box w="full">
            <Flex pt="2" alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                <Box paddingRight="3" color="green.400">
                  {isVerified && <GoVerified />}
                </Box>
                <Text fontWeight="bold" fontSize="lg">
                  AED {millify(price)}
                  {rentFrequency && `/$${rentFrequency}`}
                </Text>
              </Flex>
              <Box>
                <Avatar size="sm" src={agency?.logo?.url} />
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              p="1"
              justifyContent="space-between"
              w="250px"
              color="blue.400"
            >
              {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
            <Text fontSize="lg">
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Link>
  );
};

export default Property;
