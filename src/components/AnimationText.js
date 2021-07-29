import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Flex } from '@chakra-ui/react';

const TEXTS = [
  'Feeling lazy?',
  'Discover and get great food.',
  'Looking for something healthy?',
  'Time for something new!',
  'You deserve this.',
];

const AnimationText = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Flex pb='10' fontSize='5xl' fontWeight='extrabold'>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </Flex>
  );
};

export default AnimationText;
