import React from 'react';
import { Spinner as NativeBaseSpinner, Box } from 'native-base';

const Spinner: React.FC = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <NativeBaseSpinner color="primary.500" size="lg" />
    </Box>
  );
};

export default Spinner;
