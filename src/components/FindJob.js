import { Box, Image } from '@chakra-ui/react';

const FindJob = ({ imageUrl, titleChange }) => {
  const property = {
    image_one: imageUrl,
    title: titleChange,
    formattedApply: 'Apply now',
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      bgColor='gray.100'
    >
      <Image src={property.image_one} alt={property.imageAlt} />
      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Box
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          ></Box>
        </Box>

        <Box
          textAlign='center'
          mt='1'
          fontWeight='bold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>

        <Box textColor='Highlight' textAlign='center'>
          {property.formattedApply}
        </Box>
      </Box>
    </Box>
  );
};
export default FindJob;
