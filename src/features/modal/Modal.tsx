import React from 'react'

import { ModalWrapper } from '../../common/components'
import { useModalController } from '../../common/hooks'

import { ModalContent } from './components/modal-content/ModalContent'

export const Modal = () => {
  const { closeModal, header, isOpenType } = useModalController()

  return (
    <ModalWrapper closeModal={closeModal} isOpen={!!isOpenType} header={header}>
      <ModalContent />
    </ModalWrapper>
  )
}
