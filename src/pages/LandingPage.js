import React from 'react';
import Logo from '../assets/logo.png';
import food_one from '../assets/food_one.jpg';
import NavBar from '../components/NavBar';
import DeliveryAddress from '../components/DeliveryAddress';
import Cities from '../components/Cities';
import InfoPiece from '../components/InfoPiece';
import AnimationText from '../components/AnimationText';

import { Image, Flex, Spacer, Stack, HStack, Text } from '@chakra-ui/react';
import DownloadUs from '../components/DownloadUs';
import FindJob from '../components/FindJob';

import card_one from '../assets/card_one.png';
import card_two from '../assets/card_two.png';
import card_three from '../assets/card-three.png';
import Footer from '../components/Footer';
import SpaceBetween from '../components/SpacerBetween';

export default function LandingPage() {
  return (
    <Stack w='full' spacing='2'>
      <Flex w='full' px='380'>
        <Image src={Logo} alt='Logo' w='55' h='55' pl='50' pt='5' pb='2' />
        <NavBar />
      </Flex>
      <Flex
        bgImage={food_one}
        h='800'
        justifyContent='flex-end'
        direction='column'
        p='250'
        m='10'
      >
        <Flex w='full' justifyContent='left' direction='column'>
          <AnimationText />
          <DeliveryAddress />
        </Flex>
      </Flex>
      <Flex p='6' alignItems='center' bgColor='white'>
        <Flex
          direction='column'
          justifyContent='center'
          justifyItems='center'
          alignItems='center'
        ></Flex>
        <Spacer />
      </Flex>
      <Cities />
      <SpaceBetween />
      <InfoPiece />
      <DownloadUs />
      <Flex justifyContent='center'>
        <Text
          pb='10'
          pt='40'
          fontSize='5xl'
          fontFamily="'Patua One', cursive"
          fontWeight='bold'
          textAlign='center'
        >
          Hungry from more than food?
        </Text>
      </Flex>
      <HStack spacing='5' justifyContent='center' pb='20'>
        <FindJob
          imageUrl={card_one}
          titleChange='Get paid as courier partner'
        />
        <FindJob
          imageUrl={card_two}
          titleChange='Serve more people as a restaurant partner'
        />
        <FindJob
          imageUrl={card_three}
          titleChange='Enter a new chapter and find a job at Wolt'
        />
      </HStack>
      <Footer />
    </Stack>
  );
}
