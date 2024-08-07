import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  variant?: "outlinedGray" | "outlinedBlue";
}>`
  padding: 0.75rem 3.5rem;
  min-width: max-content;
  max-height: 2.5rem;
  cursor: pointer;
  user-select: none;
  p {
    ${({ theme }) => theme.typography.font14Line14};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textBlack};
  }

  ${({ variant }) => {
    switch (variant) {
      case "outlinedGray":
        return OutlinedGrayButton;
      case "outlinedBlue":
        return OutlinedBlueButton;
      default:
        return OutlinedButton;
    }
  }};
`;

const OutlinedButton = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  &:active {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const OutlinedGrayButton = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.textGrayLighter};
  color: ${({ theme }) => theme.colors.textGrayLighter};
  p {
    color: ${({ theme }) => theme.colors.textGrayLighter};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.textRed};
    border-color: ${({ theme }) => theme.colors.textRed};
    p {
      color: ${({ theme }) => theme.colors.textRed};
    }
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.peach};
  }
`;

const OutlinedBlueButton = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.royalBlue};
  color: ${({ theme }) => theme.colors.royalBlue};
  p {
    color: ${({ theme }) => theme.colors.royalBlue};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.transparentRoyalBlue};
  }
`;
