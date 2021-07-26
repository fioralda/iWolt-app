import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const CountryButton = ({ country }) => {
  return (
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme='whiteAlpha'
      variant='solid'
      border='1px'
      textColor='black'
    >
      {country}
    </Button>
  );
};
export default CountryButton;
