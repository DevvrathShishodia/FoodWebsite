import { HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { RiFacebookFill } from 'react-icons/ri'
import logo from '../Media/Screenshot_669 1.png'

const Footer = () => {
  return (
    <div>
      <HStack pt={"86px"} pb={"92px"} mt={"65px"} backgroundColor={"#f8fcfc"}>
        <Stack display="flex" textAlign={"left"}   align={"center"} flexDir={"row"} gap={"192px"} justifyContent={"space-evnly"}>
        <Stack> <img src={logo} alt="" /></Stack>
        <Stack gap={"14px"} maxW={"232px"}>
            <Heading  color={"#0E2368"} lineHeight={"27.2px"} fontFamily= "Source Sans Pro" fontWeight={"semibold"} fontSize="18.84px">Contact Us</Heading>
            <Text fontFamily= "Source Sans Pro" >Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
            <Text fontFamily= "Source Sans Pro">example2020@gmail.com</Text>
            <Text fontFamily= "Source Sans Pro">(904) 443-0343</Text>
            </Stack>
        <Stack gap={"14px"} maxW={"232px"}>
            <Heading color={"#0E2368"} fontFamily= "Source Sans Pro" lineHeight={"27.2px"} fontWeight={"semibold"} fontSize="18.84px">More</Heading>
            <Text fontFamily= "Source Sans Pro">About Us</Text>
            <Text fontFamily= "Source Sans Pro">Products</Text>
            <Text fontFamily= "Source Sans Pro">Career</Text>
            <Text fontFamily= "Source Sans Pro">Contact Us</Text>
            </Stack>

            <Stack gap={"103px"} justify={"space-between"}>      
        <Stack>
            <Heading color={"#0E2368"} lineHeight={"27.2px"} fontFamily= "Source Sans Pro" fontWeight={"semibold"} fontSize="18.84px" >Social Links</Heading>
        <HStack gap={6}>
        <Icon fontSize={"30px"} as={IoLogoInstagram}/>
        <Icon fontSize={"30px"} as={BsTwitter} />
        <Icon fontSize={"30px"} as={RiFacebookFill}/>
        </HStack>
        </Stack>
        <Stack>
            <Text fontFamily= "Source Sans Pro">© 2022 Food Truck Example</Text>
        </Stack>
            </Stack>

        </Stack>
      </HStack>
    </div>
  )
}

export default Footer
