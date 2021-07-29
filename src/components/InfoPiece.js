import { Flex, Box, Text, SimpleGrid, Image } from '@chakra-ui/react';

const InfoPiece = () => {
  return (
    <Flex h='40vh' px={{ md: '10vw', lg: '30vw' }} py='10vh'>
      <Text color='black' fontSize='2xl'>
        <center>Did you know?</center>
        Getting home-delivered sushi is more than your life made easy. When you
        order with iWolt, you help thousands of hard-working restaurant and
        store owners and couriers make a living.
      </Text>
    </Flex>
  );
};

export default InfoPiece;
