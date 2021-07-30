import React from 'react';
import food from '../assets/food.jpg';
import DeliveryAddress from '../components/DeliveryAddress';
import Cities from '../components/Cities';
import InfoPiece from '../components/InfoPiece';
import AnimationText from '../components/AnimationText';

import {Flex, Stack, HStack, Text } from '@chakra-ui/react';
import DownloadUs from '../components/DownloadUs';
import FindJob from '../components/FindJob';

import card_one from '../assets/card_one.png';
import card_two from '../assets/card_two.png';
import card_three from '../assets/card-three.png';
import SpaceBetween from '../components/SpacerBetween';

export default function LandingPage() {
  return (
    <Stack w='100vw'>
      <Flex
        bgImage={food}
        h='85vh'
        justifyContent='flex-end'
        direction='column'
        p='350'
      >
        <>
          <AnimationText />
          <DeliveryAddress />
        </>
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
    </Stack>
  );
}
