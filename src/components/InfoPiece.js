import { Flex, Box, Text, SimpleGrid, Image } from '@chakra-ui/react';

const InfoPiece = () => {
  return (
    <Flex h='30vh' px='30vw' py='10vh'>
      <Text
        color='black'
        fontSize='2xl'
        // pt='20'
        // pb='20'
        // pl='10'
        // pr='10'
      >
        <center>Did you know?</center>
        Getting home-delivered sushi is more than your life made easy. When you
        order with iWolt, you help thousands of hard-working restaurant and
        store owners and couriers make a living.
      </Text>

      {/* <Box h='70vh'>
        <Image src={Info} pt='50' pl='200' w='100' pb='20' />
      </Box> */}
    </Flex>
  );
};

export default InfoPiece;
