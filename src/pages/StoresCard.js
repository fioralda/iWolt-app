import { Box, Image, Flex, useColorModeValue, Link } from '@chakra-ui/react';

const StoresCard = ({ imageUrl, name }) => {
  return (
    <Flex w='full' alignItems='center' justifyContent='center'>
      <Box
        w='xs'
        bg={useColorModeValue('white', 'gray.800')}
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        mx='auto'
      >
        <Image w='full' h={56} fit='cover' src={imageUrl} alt='avatar' />

        <Box py={5} textAlign='center'>
          <Link
            display='block'
            fontSize='lg'
            color={useColorModeValue('black', 'white')}
            fontWeight='semi-bold'
          >
            {name}
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default StoresCard;
