import frontCells from '../assets/front-cells.png';
import { Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import Hungry from '../assets/hungry.png';
import GooglePlay from '../assets/google-play.png';
import AppStore from '../assets/app-store.png';

const DownloadUs = () => {
  return (
    <Flex bgColor='gray.100' px='-20'>
      <Image src={frontCells} w='3900' h='800' />
      <Flex direction='column'>
        <Text
          pt='250'
          fontSize='5xl'
          fontFamily="'Patua One', cursive"
          fontWeight='bold'
          textAlign='left'
          pl='140'
        >
          <Image src={Hungry} pl='150' pb='9' />
          Honey, we're not
          <br /> cooking tonight!
        </Text>
        <Text pt='5' textAlign='left' pl='20'>
          <p>
            Get the Apple-awarded iWolt app and choose from 40,000 restaurants
            <br />
            and hundreds of stores in 20+ countries. <br />
            Discover and get what you want – our courier partners bring it to
            you.
          </p>
        </Text>
        <Flex direction='column' alignItems='center' pl='10'>
          <Flex p='2'>
            <Link href='https://www.apple.com/fi/app-store/' isExternal>
              <Button px='6' colorScheme='blackAlpha'>
                <Image src={AppStore} alt='icon' w='5' h='5' margin='2' />
                App Store
              </Button>
            </Link>
          </Flex>
          <Flex p='2'>
            <Link href='https://play.google.com/store' isExternal>
              <Button colorScheme='blackAlpha'>
                <Image
                  src={GooglePlay}
                  alt='icon'
                  w='5'
                  h='5'
                  margin='2'
                  pl='1'
                />
                Google Play
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DownloadUs;
