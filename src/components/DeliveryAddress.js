import { Input, Flex, Button, Text } from '@chakra-ui/react';

const DeliveryAddress = () => {
  return (
    <Flex
      w={{ md: '10vw', lg: '25vw' }}
      direction='column'
      alignItems='center'
      pt='14'
      boxShadow='dark-lg'
      p='6'
      rounded='lg'
      bg='whiteAlpha.700'
    >
      <Flex w='full'>
        <Text fontSize='xl' fontWeight='semibold' mb='8px' color='black'>
          Delivery address
        </Text>
      </Flex>
      <Flex w='full'>
        <Input
          type='text'
          placeholder='1 Example Street'
          bgColor='white'
        ></Input>
        <Button bgColor='blue.100' ml='5'>
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default DeliveryAddress;
