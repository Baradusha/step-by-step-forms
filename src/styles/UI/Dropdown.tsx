import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;
  display: grid;
  width: fit-content;
  gap: 0.25rem;
  min-width: 12.25rem;
`;

export const DropdownButton = styled.button<{
  isOpen: boolean;
  error?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  height: 2.75rem;
  min-width: 12.5rem;
  padding: 0.75rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ theme, isOpen, error }) =>
      error
        ? theme.colors.red
        : isOpen
        ? theme.colors.royalBlue
        : theme.colors.gray};
  cursor: pointer;
  user-select: none;
  ${({ theme }) => theme.typography.font14Line20};
  font-weight: 400;
  & > svg {
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.royalBlue : theme.colors.textBlackLight};
    transform: ${({ isOpen }) => (isOpen ? "rotateX(180deg)" : "unset")};
  }
`;

export const DropdownMenu = styled.div`
  display: grid;
  position: absolute;
  top: 4.75rem;
  left: 0;
  z-index: 99;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  max-height: 240px;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.white};
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const DropdownItem = styled.div`
  padding: 0.75rem 0.75rem;
  cursor: pointer;
  & > p {
    ${({ theme }) => theme.typography.font14Line20};
    color: ${({ theme }) => theme.colors.textBlackLight};
  }
`;
