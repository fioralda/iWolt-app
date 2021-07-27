import React from 'react';
import Logo from '../assets/logo.png';
import food from '../assets/food.jpg';
import NavBar from '../components/NavBar';
import DeliveryAddress from '../components/DeliveryAddress';
import Cities from '../components/Cities';
import InfoPiece from '../components/InfoPiece';
import AnimationText from '../components/AnimationText';

import { Image, Box, Flex, Spacer, Stack } from '@chakra-ui/react';
import DownloadUs from '../components/Modals/DownloadUs';
export default function LandingPage() {
  return (
    <Stack w='full'>
      <Flex w='full' px='250'>
        <Image src={Logo} alt='Logo' w='100' h='100' pl='20' pb='10px' />
        <NavBar />
      </Flex>
      <Flex
        bgImage={food}
        h='800'
        justifyContent='flex-end'
        direction='column'
        p='200'
        m='10'
        mt='-0.5'
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
        >
          {/* <DeliveryAddress /> */}
        </Flex>
        <Spacer />
      </Flex>
      <Cities />
      <InfoPiece />
      <DownloadUs />
    </Stack>
  );
}
