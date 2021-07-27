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
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';

import LogIn from './Modals/LogIn';
import SignUp from './Modals/SignUp';
const NavBar = () => {
  const login = useDisclosure();
  const signup = useDisclosure();

  return (
    <Flex alignItems='center' w='100vw' justifyContent='space-around' px='100'>
      <LogIn isOpen={login.isOpen} onClose={login.onClose} />
      <SignUp isOpen={signup.isOpen} onClose={signup.onClose} />
      <InputGroup w='20vw' ml='150'>
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
      <Stack direction='row' spacing='4' ml='150' >
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
    </Flex>
  );
};

export default NavBar;
