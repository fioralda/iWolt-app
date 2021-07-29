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
  Flex,
  Text,
  HStack,
  Image,
  Link,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import icon from '../../assets/icon.png';
import { useHistory } from 'react-router-dom';

const SignUp = ({ isOpen, onClose }) => {
  const history = useHistory();

  const signUpHandler = (e) => {
    onClose();
    e.preventDefault();
    history.push('/signup');
  };
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
                  <Link href='https://www.facebook.com/' isExternal>
                    <Button
                      colorScheme='facebook'
                      leftIcon={<FaFacebook />}
                      margin='1'
                      padding='5'
                      pl='5'
                    >
                      Continue with Facebook
                    </Button>
                  </Link>
                  <Link href='https://twitter.com/?lang=en'>
                    <Button
                      colorScheme='twitter'
                      leftIcon={<FaTwitter />}
                      margin='1'
                      padding='5'
                      pl='5'
                      pr='10'
                    >
                      Continue with Twitter
                    </Button>
                  </Link>
                  <Link href='https://accounts.google.com/' isExternal>
                    <Button margin='1' padding='5' pl='3' pr='8'>
                      <Image src={icon} alt='icon' w='5' h='5' margin='2' />
                      Continue with Google
                    </Button>
                  </Link>
                  <Text textAlign='center' padding='3'>
                    -or Log in with Email-
                  </Text>
                </Flex>
              </HStack>
            </Flex>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Flex direction='column' pb='4' pt='-1.5'>
            <Button
              onClick={signUpHandler}
              colorScheme='red'
              mr={82}
              alignContent='center'
              bgColor='red.700'
              pl='12'
              pr='10'
            >
              Continue with Email
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignUp;
