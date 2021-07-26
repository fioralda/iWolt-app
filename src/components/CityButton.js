import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const CityButton = ({ city }) => {
  return (
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme='teal'
      variant='outline'
    >
      {city}
    </Button>
  );
};
export default CityButton;
