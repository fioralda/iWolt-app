import { Image, Flex, Text, Box, Spacer, Link, Button } from '@chakra-ui/react';
import { List, ListItem } from '@chakra-ui/react';

import Logo from '../assets/logo.png';
import AppStore from '../assets/app-store.png';
import GooglePlay from '../assets/google-play.png';

const Footer = () => {
  return (
    <Box>
      <Flex bgColor='gray.100' direction='column' pl='400'>
        <Image src={Logo} alt='Logo' boxSize='100px' />
        <Spacer />
        <Flex>
          <Flex fontWeight='bold' fontSize='md'>
            <Text>Download the app</Text>
          </Flex>
          {/* <Spacer /> */}
          <Flex pl='60'>
            <List spacing='2' fontSize='sm'>
              <Text fontWeight='bold' pb='2' fontSize='md'>
                Title 1
              </Text>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </List>
          </Flex>
          <Flex pl='60'>
            <List spacing='2' fontSize='sm'>
              <Text fontWeight='bold' pb='2' fontSize='md'>
                Title 2
              </Text>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </List>
          </Flex>
        </Flex>
        <Flex direction='column'>
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
    </Box>
  );
};
export default Footer;
