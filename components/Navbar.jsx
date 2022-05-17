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
  Icon,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const iconMode = useColorModeValue(BsMoonStarsFill, BsFillSunFill);
  const colorComp = useColorModeValue('gray.100', 'gray.700');

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      px={6}
      py={4}
      borderBottom="1px"
      borderColor={colorComp}
    >
      <Stack>
        <Link href="/" passHref>
          <Heading color="blue.400" fontWeight="bold" margin={0} cursor='pointer' >
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
          <MenuItem onClick={toggleColorMode} justifyContent='center' pt={3}>
            <Icon as={iconMode} cursor='pointer'  fontSize={20}/>
          </MenuItem>

          
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
