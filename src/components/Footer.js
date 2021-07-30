import { Image, Flex, Text, Box, Spacer, Link, Button } from '@chakra-ui/react';
import { List, ListItem, Stack } from '@chakra-ui/react';

import Logo from '../assets/logo.png';
import AppStore from '../assets/app-store.png';
import GooglePlay from '../assets/google-play.png';

import footer_facebook from '../assets/footer_facebook.svg';
import footer_instagram from '../assets/footer_instagram.svg';
import footer_linkedin from '../assets/footer_linkedin.svg';
import footer_twitter from '../assets/footer_twitter.svg';

const Footer = () => {
  return (
    <Box>
      <Flex bgColor='gray.100' direction='column' pl='400' pt='20' pb='10'>
        <Image src={Logo} alt='Logo' w='20' h='30' />
        <Spacer />
        <Flex>
          <Flex fontWeight='bold' fontSize='md' pt='8'>
            <Text>Download the app</Text>
          </Flex>
          {/* <Spacer /> */}
          <Flex pl='60'>
            <List fontSize='sm'>
              <Text fontWeight='bold' pb='2' fontSize='md' pt='8' pb='5'>
                Let's do this together
              </Text>
              <ListItem>For couriers</ListItem>
              <ListItem>For restaurants</ListItem>
              <ListItem>For stores</ListItem>
              <ListItem>For companies</ListItem>
              <ListItem>For Jobs</ListItem>
            </List>
          </Flex>
          <Flex pl='60'>
            <List fontSize='sm'>
              <Text fontWeight='bold' pb='2' fontSize='md' pt='8' pb='5'>
                iWolt links
              </Text>
              <ListItem>Contact</ListItem>
              <ListItem>Media</ListItem>
              <ListItem>Support</ListItem>
              <ListItem>iWolt blog</ListItem>
              <ListItem>Engineering blog</ListItem>
              <ListItem>Responsibility</ListItem>
              <ListItem>Security</ListItem>
              <ListItem>About us</ListItem>
            </List>
          </Flex>
        </Flex>
        <Flex direction='column'>
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
        <Flex p='10'>
          <p>&copy; iWolt 2021</p>
          <Text pr='25' pl='237' pr='8'>
            Accessibility statement
          </Text>
          <Text pr='20'>Terms and conditions</Text>
          <Stack direction='row' spacing='6' pl='-1.5'>
            <Image src={footer_facebook} w='7' h='7' />
            <Image src={footer_instagram} w='7' h='7' />
            <Image src={footer_linkedin} w='7' h='7' />
            <Image src={footer_twitter} w='7' h='7' />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Footer;
