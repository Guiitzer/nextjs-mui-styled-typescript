import React from 'react';
import Image from 'next/image';

import { Button, Divider, Input } from '@mui/material';

import SimpleModal from '../../shared/components/Modal';
import { Container, Title, ButtonsContainer, ImageContainer } from './styles';

export default function Index(): JSX.Element {
  const [counter, setCounter] = React.useState<number>(5);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState<string>('');

  return (
    <Container>
      <ImageContainer>
       <Image
        src='/mui.png'
        layout='intrinsic'
        height='100px'
        width='100px'
      />
       <Image
        src='/styled-types.png'
        layout='fixed'
        height='100px'
        width='300px'
      />
      </ImageContainer>
      <Title>Next.js/ Mui / Styled / Typescript</Title>
      <h2>{counter}</h2>
      <ButtonsContainer>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setCounter(counter - 1)}>
          Del
        </Button>
        <Divider orientation="vertical" />
        <Button
          color="primary"
          variant="contained"
          onClick={() => setCounter(counter + 1)}>
          Add
        </Button>
      </ButtonsContainer>
      <Input
        type="text"
        placeholder="Digite algo aqui e depois"
        onChange={(e) => setTextValue(e.currentTarget.value)}
      />
      <Button color="primary" onClick={() => setModalOpen(true)}>
        Clique aqui!
      </Button>
      <SimpleModal open={modalOpen} setOpen={() => setModalOpen(false)}>
        {textValue.length > 0 ? textValue : 'Digite algo no campo anterior' }
      </SimpleModal>
     
    </Container>
  );
}