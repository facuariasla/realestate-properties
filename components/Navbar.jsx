import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      px={6}
      py={4}
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Stack>
        <Link href="/" passHref>
          <Heading color="blue.400" fontWeight="bold" margin={0}>
            Realtor
          </Heading>
        </Link>
      </Stack>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant="outline"
        />
        <MenuList style={{ margin: 0 }}>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Stack>
  );
};

{
  /* <Flex p='2' borderBottom='1px' borderColor='gray.100'>
<Box fontSize='3xl' color='blue.400' fontWeight='bold'>
  <Link href='' paddingLeft='2'>Realtor</Link>
</Box>
<Spacer/>
<Box>
  
  <MenuButton as={IconButton} icon={<FcMenu/>} variant='outline' color='red.400'/>
  <MenuList>
    <Link href='/' passHref=''>
      <MenuItem icon={<FcHome/>}>Home</MenuItem>
    </Link>
    <Link href='/search' passHref=''>
      <MenuItem icon={<BsSearch/>}>Search</MenuItem>
    </Link>
    <Link href='/search?purpose=for-sale' passHref=''>
      <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
    </Link>
    <Link href='/search?purpose=for-rent' passHref=''>
      <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
    </Link>
  </MenuList>
</Box>
</Flex> */
}
