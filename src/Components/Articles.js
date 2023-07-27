import React, { useState } from 'react'
import { Heading, Button, Stack, HStack, ButtonGroup } from '@chakra-ui/react'
import ArticleSlide1 from './ArticleSlide1'
import Articleslide2 from './ArticleSlide2'
const Articles = () => {
  const [state, setState] = useState(<ArticleSlide1/>)
  const [page, setPage] = useState('1/2')
  function handleNextclick(){
    console.log("handleNext")
      setState(<Articleslide2/>)
      setPage('2/2')
  }

  function handlePreviousclick(){
    console.log("handlePrev")
      setState(<ArticleSlide1/>)
      setPage('1/2')
  }
  return (
    <>
    <Stack id='cards' textAlign={"left"}>

    <Heading color={"#0E2368"} fontSize={"56px"} fontWeight={"semibold"} fontFamily= "Source Sans Pro" mb={"42px"} ml={"108px"} mt={"158px"}>Latest Articles</Heading>
   <Stack id='labels'>
   <HStack mt={"41px"} gap={"41px"} justify={"space-evenly"}>
    {state} 
    </HStack>
    <HStack mt={"41px"} gap={"41px"} justify={"space-evenly"}>
    {setState}
    </HStack>
   </Stack>
    <ButtonGroup mt={"65px"} gap={"14px"}>
    <Button onClick={handlePreviousclick} variant={"outline"} color="black" size='xs'>
    &#60;
  </Button>
  <span style={{fontSize:"22px", fontFamily:"Source Sans Pro"}}>{page}</span>
    <Button onClick={handleNextclick} variant={"outline"} color="black" size='xs'>
    &#62;
  </Button>
    </ButtonGroup>
    </Stack>
    </>
  )
}

export default Articles
