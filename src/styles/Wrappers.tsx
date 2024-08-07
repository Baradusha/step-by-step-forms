import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 30%;
  height: fit-content;
  padding: 1.5rem 1.125rem;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldsWrapper = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
`;
