import React, { FC } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import { Box, Container, Divider, Modal, Typography } from '@mui/material'

import {
  closeExitIconSx,
  containerChildSx,
  dividerSx,
  titleModalContainerSx,
  titleModalSx,
} from './modal.style'

interface ModalProps {
  children: React.ReactNode
  header: string
  isOpen: boolean
  closeModal: () => void
}

export const ModalWrapper: FC<ModalProps> = ({ closeModal, isOpen, header, children }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={closeModal}
    >
      <>
        {isOpen && (
          <Container sx={containerChildSx}>
            <Box sx={titleModalContainerSx}>
              <Typography component="h2" sx={titleModalSx}>
                {header}
              </Typography>
              <CloseIcon onClick={closeModal} sx={closeExitIconSx} />
            </Box>
            <Divider variant="middle" sx={dividerSx} />
            {children}
          </Container>
        )}
      </>
    </Modal>
  )
}
