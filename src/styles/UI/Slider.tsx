import styled from "styled-components";

export const SliderContainer = styled.div`
  display: grid;
  gap: 0.25rem;
  padding: 0.375rem 0;
`;

export const StyledSlider = styled.input`
  width: 100%;
  margin: 0;
`;

export const SliderTitel = styled.p`
  ${({ theme }) => theme.typography.font14Line20};
  font-weight: 400;
`;
