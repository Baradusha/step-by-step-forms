import styled, { css } from "styled-components";

export const RadioGroupContainer = styled.div`
  display: grid;
  gap: 0.25rem;
  padding: 0.375rem 0;
`;

export const RadioOptionsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const StyledRadioOption = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;

export const StyledRadio = styled.input<{ error?: string }>`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayDark};
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: ${({ theme }) => theme.colors.royalBlue};
  }

  &:after {
    content: "";
    position: absolute;
    top: 0.125rem;
    left: 0.375rem;
    width: 0.375rem;
    height: 0.75rem;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 0.125rem 0.125rem 0;
    transform: rotate(45deg);
    display: ${({ checked }) => (checked ? "block" : "none")};
  }

  ${({ error }) => error && ErrorRadio}
`;

const ErrorRadio = css`
  border: 1px solid ${({ theme }) => theme.colors.red};
`;
