import React from 'react'
import './Home.css'
import logo from '../Media/Screenshot_669 1.png'
import { Button, HStack, Heading, Stack, WrapItem } from '@chakra-ui/react'
const Home = () => {
  return (
    <>
    <div className="bg"></div>
    <div className='home'>
    <HStack className='content' justify="space-between">
    <Stack mt="33px" ml="100px">
      <img height="83px" width="107px"  src={logo} alt="" />
    </Stack>
    <Stack mt="32px" mr="41px" direction='row' spacing={4} align='center'>
  <Button borderRadius="full"  color="white" variant='outline' _hover="none">
    Get In Touch
  </Button>
</Stack>
    </HStack>
    <Heading lineHeight="69px" fontSize="62px" mt="111px" ml="100px" color="#0E2368">
    Discover the <br /> <span style={{color:"#E23744"}}>Best</span> Food<br /> and Drinks
    </Heading>
    <p style={{maxWidth:"345px", fontFamily:"Open Sans" , marginLeft:"100px", marginTop:"26px", fontSize:"16.44px", color:"#666870"}} >Naturally made Healthcare Products for the better care & support of your body.</p>
    <WrapItem mt="41px" ml="97px">
      <Button w="190px" p="35px" borderRadius="full" _hover={"none"} color={"white "} backgroundColor="#E23744">Explore Now!</Button>
    </WrapItem>
    </div>
    </>
  )
}

export default Home
