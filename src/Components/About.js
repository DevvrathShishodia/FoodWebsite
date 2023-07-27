import { Button, HStack, Heading, Stack, } from '@chakra-ui/react'
import React from 'react'
import image from '../Media/girl (lp).jpg'

const About = () => {
  return (
    <>
    
      <Stack className='area' id='area' backgroundColor="#f8fcfc" mt="370px">
        <HStack className='box' gap="200px" justify="space-evenly">
            <Stack  className='image'>
                <img src={image} alt="" />
            </Stack>
            <Stack className='about' maxW="447px" h="254px">
                <Heading mb="27.4" fontFamily= "Poppins" fontSize="45px" color="#0E2368">
                    About Us
                </Heading>
                <p style={{fontSize:"15px", fontFamily:"Open Sans" , color:"#666870", lineHeight:"27px"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
              
                <Button p={"26px"} w={"132px"} mt={"21px"} borderRadius="full" color={"white"} backgroundColor={"#E23744"} _hover={"none"}>Read More</Button>
            
  
            </Stack>
        </HStack>
      </Stack>
    </>
  )
}

export default About
