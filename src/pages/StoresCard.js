import { useState, useEffect } from 'react';
import { Text, Box, Badge, Image } from '@chakra-ui/react';

const StoresCard = ({ imageUrl, name }) => {
  const [stores, setStores] = useState([]);

  async function getStores() {
    await fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setStores(data));
  }

  useEffect(() => {
    getStores();
  }, []);

  return (
    <Box>
      <Text>{name}</Text>
      <Image src={imageUrl} />
    </Box>
  );
};

export default StoresCard;
