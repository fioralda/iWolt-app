import { useState } from 'react';

import { Flex, Text, SimpleGrid, Tabs, TabList, Tab } from '@chakra-ui/react';
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
    <Flex direction='column' pt='250' bgColor='blackAlpha.100' py='-1.5'>
      <Text
        pt='10'
        fontSize='5xl'
        fontFamily="'Patua One', cursive"
        fontWeight='bold'
        textAlign='center'
      >
        Explore cities where you find iWolt
      </Text>
      <Text fontSize='3xl' fontWeight='semibold' textAlign='center'>
        Gr Greece
      </Text>
      <Flex justifyContent='flex-end' w='full'>
        <Flex direction='column' w='full'>
          <Tabs variant='enclosed'>
            <Flex justifyContent='flex-end' pr='10vw'>
              <TabList>
                <Tab onClick={() => setShow(false)}>Greece</Tab>
                <Tab onClick={() => setShow(true)}>All countries</Tab>
              </TabList>
            </Flex>
            <Flex justifyContent='flex-end' pr='5vw' pt='5vh'>
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
      <Flex
        justifyContent={{ md: 'space-between', lg: 'space-around' }}
        px='150'
        pt='5'
        pb='80'
      ></Flex>
    </Flex>
  );
};

export default Cities;
