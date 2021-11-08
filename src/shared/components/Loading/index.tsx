import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

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