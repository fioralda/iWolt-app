import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Text,
  HStack,
  Image,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import icon from '../../assets/icon.png';

const LogIn = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center' fontWeight='bold' fontSize='2xl'>
          Create an account or log in
        </ModalHeader>
        <Text align='center' shadow='base'>
          Log in below or create a new iWolt account
        </Text>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup size='md'>
            <Flex>
              <HStack>
                <Flex direction='column' pl='20' pt='3'>
                  <Button
                    colorScheme='facebook'
                    leftIcon={<FaFacebook />}
                    margin='1'
                    padding='5'
                    pl='5'
                  >
                    <Text>Continue with Facebook</Text>
                  </Button>
                  <Button
                    colorScheme='twitter'
                    leftIcon={<FaTwitter />}
                    margin='1'
                    padding='5'
                    pl='1'
                  >
                    <Text>Continue with Twitter</Text>
                  </Button>
                  <Button margin='1' padding='5' pl='-1.5'>
                    <Image src={icon} alt='icon' w='5' h='5' margin='2' />
                    <Text Textalign='center'>Continue with Google</Text>
                  </Button>
                  <Text textAlign='center' padding='3'>
                    -or Log in with Email-
                  </Text>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' />
                    <Input type='email' placeholder='Email' p='2' />
                  </InputGroup>
                </Flex>
              </HStack>
            </Flex>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={170} onClick={onClose}>
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogIn;
