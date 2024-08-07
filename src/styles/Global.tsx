import * as styled from "styled-components";

// Функция styled.createGlobalStyle (styled-components) позволяет определить глобальные стили для всего приложения
const GlobalStyle = styled.createGlobalStyle`
  :root {
    --rt-opacity: 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textBlack};
    background-color: ${({ theme }) => theme.colors.white};
    line-height: 1;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  svg {
    display: flex;
  }

  ul li {
    list-style: none;
  }

  .label,
  .title {
    ${({ theme }) => theme.typography.font15Line24};
    color: ${({ theme }) => theme.colors.textGray};
    font-weight: 400;
  }

  .error-text {
    ${({ theme }) => theme.typography.font12Line16}
    color: ${({ theme }) => theme.colors.red};
    font-weight: 400;
  }
`;

export default GlobalStyle;
