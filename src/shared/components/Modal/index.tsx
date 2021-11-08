import {  Box, Modal, Typography } from "@material-ui/core"
import React, { Dispatch, SetStateAction } from "react"

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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {children}
        </Typography>
      </Box>
    </Modal>
  </div>
  )
}