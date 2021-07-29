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
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo.png';

export default function StoresSection() {
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
    <Stack w='full' h='full' pb='20'>
      <Flex direction='column' px='10' pt='20'>
        <Flex justifyContent='flex-start' pt='10'>
          <Text fontWeight='bold' fontSize='3xl' px={{ md: '0', lg: '21.5vw' }}>
            Categories
          </Text>
        </Flex>
        <Flex justifyContent='center' pt='10'>
          <SimpleGrid columns={3} spacing='5'>
            {stores.map((store) => {
              console.log(store);
              return (
                <StoresCard
                  imageUrl={store.imageUrl}
                  name={store.decsription}
                />
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Stack>
  );
}
