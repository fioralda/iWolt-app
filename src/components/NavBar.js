import { useEffect } from 'react';
import { useHistory } from 'react-router';

import {
  InputGroup,
  Input,
  Flex,
  InputRightElement,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  useDisclosure,
  Image,
  Avatar,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo.png';
import LogIn from './Modals/LogIn';
import SignUp from './Modals/SignUp';
import useAuthStore from '../stores/use-auth';
const NavBar = () => {
  const login = useDisclosure();
  const signup = useDisclosure();
  const { isAuthenticated, email, logout } = useAuthStore();
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return (
    <Flex
      shadow='md'
      pb='2'
      alignItems='center'
      w='100vw'
      justifyContent='space-evenly'
      pt='2'
      pl='4'
    >
      <LogIn isOpen={login.isOpen} onClose={login.onClose} />
      <SignUp isOpen={signup.isOpen} onClose={signup.onClose} />
      <Box>
        <NavLink to={'/'}>
          <Image src={Logo} w='35' h='27' />
        </NavLink>
      </Box>
      <InputGroup w='15vw' pl='5'>
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
      {!isAuthenticated && (
        <Stack direction='row'>
          <Button variant='ghost' onClick={login.onOpen}>
            Login
          </Button>
          <Button variant='ghost' onClick={signup.onOpen}>
            Sign up
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
        </Stack>
      )}
      {isAuthenticated && (
        <Stack direction='row'>
          <Menu>
            <Menu size='sm'>
              <MenuButton>
                <Avatar name={email} src={''} size='sm' />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Menu>
        </Stack>
      )}
    </Flex>
  );
};

export default NavBar;
