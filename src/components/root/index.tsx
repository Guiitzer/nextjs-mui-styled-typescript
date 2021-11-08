import React from 'react';

import { Button, Divider, Input } from '@material-ui/core';

import SimpleModal from '../../shared/components/Modal';
import { Container, Title, ButtonsContainer } from './styles';

export default function Index(): JSX.Element {
  const [counter, setCounter] = React.useState<number>(5);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState<string>('');

  return (
    <Container>
      <Title>Contador</Title>
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