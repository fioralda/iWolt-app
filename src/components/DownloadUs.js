import frontCells from '../assets/front-cells.png';
import { Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import Hungry from '../assets/hungry.png';
import GooglePlay from '../assets/google-play.png';
import AppStore from '../assets/app-store.png';

const DownloadUs = () => {
  return (
    <Flex bgColor='orange.100'>
      <Image src={frontCells} w='2500' h='800' margin='50' padding='20' />
      <Flex direction='column'>
        <Text
          pt='250'
          fontSize='5xl'
          fontFamily="'Patua One', cursive"
          fontWeight='bold'
          textAlign='left'
        >
          <Image src={Hungry} pl='150' pb='9' />
          Honey, we're not
          <br /> cooking tonight!
        </Text>
        <Text pt='5' textAlign='left'>
          <p>
            Get the Apple-awarded Wolt app and choose from 40,000 restaurants
            <br />
            and hundreds of stores in 20+ countries. <br />
            Discover and get what you want – our courier partners bring it to
            you.
          </p>
        </Text>
        <Flex direction='column' alignItems='center'>
          <Flex p='2'>
            <Link
              href='https://apps.apple.com/fi/app/wolt/id943905271'
              isExternal
            >
              <Button px='6' colorScheme='blackAlpha'>
                <Image src={AppStore} alt='icon' w='5' h='5' margin='2' />
                App Store
              </Button>
            </Link>
          </Flex>
          <Flex p='2'>
            <Link
              href='https://play.google.com/store/apps/details?id=com.wolt.android'
              isExternal
            >
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
