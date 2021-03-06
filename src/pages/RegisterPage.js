import { useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  Flex,
  Stack,
  Input,
  Text,
  Button,
  Box,
  chakra,
} from '@chakra-ui/react';
import useInput from '../components/hooks/use-input';
import useAuthStore from '../stores/use-auth';
import food from '../assets/food.jpg';

export default function RegisterPage() {
  const { register, isAuthenticated, error } = useAuthStore();
  const history = useHistory();

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.length > 1);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.length > 1);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.length > 7);

  const {
    value: enteredRepeatPassword,
    isValid: enteredRepeatPasswordIsValid,
    hasError: passwordRepeatInputHasError,
    valueChangeHandler: repeatPasswordChangedHandler,
    inputBlurHandler: repeatPasswordBlurHandler,
    reset: resetRepeatPassword,
  } = useInput((value) => value.length > 7);

  let formIsValid = false;

  if (
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredRepeatPasswordIsValid
  ) {
    formIsValid = true;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    await register(enteredEmail, enteredPassword);
    resetFirstName();
    resetLastName();
    resetEmailInput();
    resetPassword();
    resetRepeatPassword();
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/stores');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <Box h='100vh' bgImage={food} bgRepeat='no-repeat' bgPosition='center'>
      <Stack px='35vw' pt='165'>
        <Stack boxShadow='dark-lg' rounded='lg' bg='whiteAlpha.700' p='5'>
          <Stack>
            <Text pl='4' fontWeight='bold'>
              First Name
            </Text>
            <Input
              placeholder='First Name'
              type='text'
              borderColor='gray.300'
              bgColor='whiteAlpha.900'
              onChange={firstNameChangedHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
            />
            {firstNameInputHasError && (
              <chakra.p color='red'>Please enter a valid First Name!</chakra.p>
            )}
          </Stack>
          <Stack>
            <Text pl='4' fontWeight='bold'>
              Last Name
            </Text>
            <Input
              placeholder='Last Name'
              type='text'
              borderColor='gray.300'
              bgColor='whiteAlpha.900'
              onChange={lastNameChangedHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
            />
            {lastNameInputHasError && (
              <chakra.p color='red'>Please enter a valid Last Name!</chakra.p>
            )}
          </Stack>
          <Stack>
            <Text pl='4' fontWeight='bold'>
              Email
            </Text>
            <Input
              placeholder='Email'
              type='email'
              borderColor='gray.300'
              bgColor='whiteAlpha.900'
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputHasError && (
              <chakra.p color='red'>Please enter a valid e-mail!</chakra.p>
            )}
          </Stack>
          <Stack>
            <Text pl='4' fontWeight='bold'>
              Password
            </Text>
            <Input
              placeholder='Password'
              type='password'
              borderColor='gray.300'
              bgColor='whiteAlpha.900'
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && (
              <chakra.p color='red'>Please enter a valid Password!</chakra.p>
            )}
          </Stack>
          <Stack>
            <Text pl='4' fontWeight='bold'>
              Repeat Password
            </Text>
            <Input
              placeholder='Repeat Password'
              type='password'
              borderColor='gray.300'
              bgColor='whiteAlpha.900'
              onChange={repeatPasswordChangedHandler}
              onBlur={repeatPasswordBlurHandler}
              value={enteredRepeatPassword}
            />
            {passwordRepeatInputHasError && (
              <chakra.p color='red'>Please enter a valid password!</chakra.p>
            )}
          </Stack>
          <Flex justifyContent='flex-end'>
            <Button
              disabled={!formIsValid}
              bgColor='blue.100'
              onClick={handleSignUp}
            >
              Login
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}
