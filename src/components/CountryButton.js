import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const CountryButton = ({ country }) => {
  return (
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme='teal'
      variant='outline'
    >
      {country}
    </Button>
  );
};
export default CountryButton;
