import { FC, ReactNode } from "react";
import {
  ModalBody,
  ModalHeader,
  ModalOverlay,
  StyledModal,
} from "../../styles/Modals/Modal";
import { Icon } from "../Icon";
import useClickOutside from "../../hooks/useClickOutside";

type TModal = {
  isOpen: boolean;
  children: ReactNode;
  title: string;
  onClose: () => void;
};

const Modal: FC<TModal> = ({ isOpen, title, onClose, children }) => {
  const ref = useClickOutside(() => onClose());

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <StyledModal ref={ref}>
        <ModalHeader>
          <h2>{title}</h2>
          <Icon name="cross" size={24} onClick={onClose} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </StyledModal>
    </ModalOverlay>
  );
};
export default Modal;
