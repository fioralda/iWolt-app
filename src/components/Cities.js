import { useState } from 'react';

import {
  Stack,
  Flex,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  Box,
  chakra,
} from '@chakra-ui/react';
import CityButton from './CityButton';
import CountryButton from './CountryButton';

const cities = [
  'Athens',
  'Heraklion',
  'Larissa',
  'Patras',
  'Thessaloniki',
  'Volos',
];

const countries = [
  'Azerbaijan',
  'Croatia',
  'Cyprus',
  'Denmark',
  'Estonia',
  'Finland',
  'Georgia',
  'Germany',
  'Greece',
  'Hungary',
  'Israel',
  'Japan',
  'Latvia',
  'Lithuania',
  'Malta',
];

const Cities = () => {
  const [show, setShow] = useState(false);

  return (
    <Box h='70vh'>
      <Text
        fontSize='5xl'
        fontFamily="'Patua One', cursive"
        fontWeight='bold'
        textAlign='center'
        mt='40'
      >
        Explore cities where you find iWolt
      </Text>
      <Text fontSize='3xl' fontWeight='semibold' textAlign='center'>
        {!show && 'Gr Greece'}
      </Text>
      <Flex justifyContent='center'>
        <Flex direction='column'>
          <Tabs variant='enclosed'>
            <Flex justifyContent='center' mt={`${show ? '52' : '40'}`}>
              <TabList>
                <Tab onClick={() => setShow(false)}>Greece</Tab>
                <Tab onClick={() => setShow(true)}>All countries</Tab>
              </TabList>
            </Flex>
            <Flex justifyContent='center'>
              {!show && (
                <Flex justifyContent='space-between'>
                  <SimpleGrid columns={2} spacing={6}>
                    {cities.map((city) => (
                      <CityButton city={city} />
                    ))}
                  </SimpleGrid>
                </Flex>
              )}
              {show && (
                <SimpleGrid columns={4} spacing={4}>
                  {countries.map((country) => (
                    <CountryButton country={country} />
                  ))}
                </SimpleGrid>
              )}
            </Flex>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Cities;
