import React from 'react'

import { ModalContent, ModalWrapper } from '../../common/components'
import { useModalController } from '../../common/hooks'

export const Modal = () => {
  const { closeModal, header, isOpenType } = useModalController()

  return (
    <ModalWrapper closeModal={closeModal} isOpen={!!isOpenType} header={header}>
      <ModalContent />
    </ModalWrapper>
  )
}
