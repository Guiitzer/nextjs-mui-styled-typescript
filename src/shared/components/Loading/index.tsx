import React from 'react';

import { CircularProgress } from '@mui/material';

import { BackdropContainer } from './styles';

export default function Loading(): JSX.Element {
   return (
    <div>
      <BackdropContainer open>
        <CircularProgress color="inherit" />
      </BackdropContainer>
    </div>
  );
}