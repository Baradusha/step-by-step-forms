import ReactInputMask from "react-input-mask";
import styled, { css } from "styled-components";

export const StyledInputWrapper = styled.div`
  display: grid;
  gap: 0.25rem;
  padding: 0.375rem 0;
`;

export const StyledInput = styled(ReactInputMask)<{ error?: string }>`
  width: 100%;
  padding: 0.75rem;
  ${({ theme }) => theme.typography.font14Line20};
  font-weight: 400;
  outline: none;
  max-height: 2.75rem;
  ${({ error }) => (error ? ErrorInput : DefaultInput)};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.royalBlue};
  }
`;

const ErrorInput = css`
  border: 1px solid ${({ theme }) => theme.colors.red};
  outline-color: ${({ theme }) => theme.colors.red};
`;

const DefaultInput = css`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  outline-color: ${({ theme }) => theme.colors.yellow};
`;
