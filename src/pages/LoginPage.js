import React, { useState } from 'react';
import useInput from '../components/hooks/use-input';

import {
  Flex,
  Stack,
  Input,
  Text,
  Button,
  Box,
  chakra,
} from '@chakra-ui/react';
import food2 from '../assets/food2.jpg';

export default function LoginPage() {
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
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 7);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <Box h='100vh' bgImage={food2} bgRepeat='no-repeat' bgPosition='center'>
      <Stack px='35vw' pt='30vh'>
        <Stack boxShadow='dark-lg' rounded='lg' bg='whiteAlpha.700' p='4'>
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
              <chakra.p color='red'>Please enter a valid password!</chakra.p>
            )}
          </Stack>
          <Flex justifyContent='flex-end'>
            <Button
              disabled={!formIsValid}
              bgColor='blue.100'
              onClick={handleLogin}
            >
              Login
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}
