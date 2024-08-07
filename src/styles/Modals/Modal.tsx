import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
`;

export const StyledModal = styled.div`
  background: white;
  min-width: 30rem;
  max-width: 40vw;
  word-break: break-all;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
  & > svg {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  padding: 1rem 0.75rem;
  max-height: 70vh;
  overflow-y: auto;
  & > p {
    text-align: center;
    ${({ theme }) => theme.typography.font18Line22}
  }
`;
