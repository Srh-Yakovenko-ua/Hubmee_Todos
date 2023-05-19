import { useAppDispatch, useAppSelector } from '../../app/store/store';
import { MODAL_TYPE, setCloseModal, setOpenModal } from '../../features/modal/modal-slice';
import { headerModal, openTypeSelector } from '../selectors';

export const useModalController = () => {
  const dispatch = useAppDispatch();
  const isOpenType = useAppSelector(openTypeSelector);
  const header = useAppSelector(headerModal);

  const closeModal = () => {
    dispatch(setCloseModal({ header: '', type: '' as MODAL_TYPE, todoId: '' }));
  };

  const openModal = (typeModal: MODAL_TYPE, header: string, todoId: string) => {
    dispatch(setOpenModal({ type: typeModal, header, todoId }));
  };

  return { closeModal, openModal, isOpenType, header };
};
