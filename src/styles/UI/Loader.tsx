import styled from "styled-components";

export const StyledLoader = styled.div<{ size: number }>`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-top: 2px solid ${({ theme }) => theme.colors.royalBlue};
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
