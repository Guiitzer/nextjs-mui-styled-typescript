import React, { Dispatch, SetStateAction } from "react"

import { Modal, Box, Typography } from "@mui/material";

import { ModalContainer } from "./styles";
import globalTheme from "../../../styles/globaltheme";

type ModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode
}

export default function SimpleModal({ open, setOpen, children }: ModalProps):JSX.Element {

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: globalTheme.background.default,
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };

  return (
    <div>
    <Modal
      open={open}
      onClose={setOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
          {children}
        </Typography>
      <ModalContainer>
        <h1>template by:</h1>
        <h1>Guilherme Tosta ´aka´ Guiitzer</h1>
        <h2>:)</h2>
      </ModalContainer>
      </Box>
    </Modal>
  </div>
  )
}