import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const CityButton = ({ city }) => {
  return (
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme='whiteAlpha'
      variant='solid'
      border='1px'
      textColor='black'
    >
      {city}
    </Button>
  );
};
export default CityButton;
