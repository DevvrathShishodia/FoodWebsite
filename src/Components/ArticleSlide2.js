import React from 'react'
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import card1 from '../Media/corn.jpg'
import card2 from '../Media/crunch (1).jpg'
import card3 from '../Media/brcolli.jpg'
const Articleslide2 = () => {
  return (
    <>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={card1}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize={"21px"}  fontFamily= "Poppins" fontWeight={"bold"} color={"#0E2368"}>How To Grill Corn</Heading>
      <Text>
      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button variant='outline' borderRadius={"full"} color={"#424961"}>
        Read More
      </Button>
  </CardFooter>
</Card>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={card2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize={"21px"}  fontFamily= "Poppins" fontWeight={"bold"} color={"#0E2368"}>Crunchwrap Supreme</Heading>
      <Text>
      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button variant='outline' borderRadius={"full"} color={"#424961"}>
        Read More
      </Button>
  </CardFooter>
</Card>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={card3}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize={"21px"}  fontFamily= "Poppins" fontWeight={"bold"} color={"#0E2368"}>Broccoli Cheese Soup</Heading>
      <Text>
      PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button variant='outline' borderRadius={"full"} color={"#424961"}>
        Read More
      </Button>
  </CardFooter>
 </Card>
    </>
  )
}

export default Articleslide2
