import Info from '../assets/info.png';

import { Flex, Box, Text, SimpleGrid } from '@chakra-ui/react';
const InfoPiece = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Flex direction='column' p='100'>
        <Text color='black' fontSize='2xl' pt='100'>
          <center>Did you know?</center>
          Getting home-delivered sushi is more than your life made easy. When
          you order with Wolt, you help thousands of hard-working restaurant and
          store owners and couriers make a living.
        </Text>
      </Flex>
      <Box
        bgImage={Info}
        backgroundRepeat='no-repeat'
        h='70vh'
      ></Box>
    </SimpleGrid>
  );
};

export default InfoPiece;
