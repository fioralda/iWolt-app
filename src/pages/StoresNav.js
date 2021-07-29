import React, { useEffect, useState } from 'react';

import useAuthStore from '../stores/use-auth';
import StoresCard from './StoresCard';
import {
  Button,
  HStack,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Image,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo.png';

export default function StoresNav() {
  const { email, logout, isAuthenticated } = useAuthStore();
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  const [stores, setStores] = useState([]);

  async function getStores() {
    await fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setStores(data));
  }

  useEffect(() => {
    getStores();
  }, []);
  return (
    <Stack>
      <Flex>
        <Flex>
          <Image
            src={Logo}
            alt='Logo'
            w='55'
            h='55'
            pl='50'
            pt='5'
            pb='2'
            ml='350'
          />
        </Flex>
        <Flex p='3'>
          <InputGroup w='9vw' ml='300'>
            <InputRightElement
              pointerEvents='none'
              children={
                <Flex alignItems='flex-end'>
                  <SearchIcon color='gray.300' />
                </Flex>
              }
            />
            <Input type='text' placeholder='Search' bgColor='white' />
          </InputGroup>
        </Flex>
        <HStack direction='row' spacing='4' ml='200'>
          <Button
            variant='ghost'
            onClick={() => {
              logout();
              history.push('/');
            }}
          >
            Logout
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              variant='ghost'
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              _expanded={{ bg: 'blue.100' }}
              _focus={{ boxShadow: 'outline' }}
            >
              Language <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>Greek</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
      <Flex>
        {stores.map((store) => {
          console.log(store);
          return (
            <StoresCard imageUrl={store.imageUrl} name={store.decsription} />
          );
        })}
      </Flex>
    </Stack>
  );
}
