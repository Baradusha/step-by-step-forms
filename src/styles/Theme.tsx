import React from "react";
import { ThemeProvider } from "styled-components";

//Этот компонент можно изпользовать в корневом компоненте приложения (в моём случае в App.tsx). Обеспечивает доступность темы для всех дочерних компонентов использующих styled-components

export const theme = {
  colors: {
    textBlack: "#020202",
    textBlackLight: "#2A2A2A",
    textGray: "#3F3F3F",
    textGrayLight: "#757575",
    textGrayLighter: "#A3A3AC",
    textRed: "#B00020",
    textGreen: "#529755",
    red: "#A92525",
    bluredRed: "#C56D6D",
    peach: "#ffc4c456",
    white: "#FFF",
    gray: "#EDEDED",
    grayDark: "#c5c5c7",
    border: "#FCFBFC",
    black: "#000",
    yellow: "#FFDC3A",
    transparentYellow: "#ffdb3a89",
    yellowDark: "#D1AE0A",
    lemon: "#ffee9d",
    transparentLemon: "#ffef9d7f",
    brightYellow: "#FDF2C2",
    green: "#20A134",
    transparentGreen: "#5297553e",
    cultured: "#f9f8f6",
    royalBlue: "#3563e9",
    transparentRoyalBlue: "#3562e922",
  },
  fontFamily: "Inter, sans-serif",
  typography: {
    font12Line16: {
      "font-size": "0.75rem",
      "line-height": "1rem",
    },
    font12Line20: {
      "font-size": "0.75rem",
      "line-height": "1.25rem",
    },
    font13Line18: {
      "font-size": "0.8125rem",
      "line-height": "1.125rem",
    },
    font13Line20: {
      "font-size": "0.8125rem",
      "line-height": "1.25rem",
    },
    font13Line24: {
      "font-size": "0.8125rem",
      "line-height": "1.5rem",
    },
    font14Line14: {
      "font-size": "0.875rem",
      "line-height": "0.875rem",
    },
    font14Line18: {
      "font-size": "0.875rem",
      "line-height": "1.125rem",
    },
    font14Line20: {
      "font-size": "0.875rem",
      "line-height": "1.25rem",
    },
    font14Line24: {
      "font-size": "0.875rem",
      "line-height": "1.5rem",
    },
    font15Line20: {
      "font-size": "0.9375rem",
      "line-height": "1.25rem",
    },
    font15Line24: {
      "font-size": "0.9375rem",
      "line-height": "1.5rem",
    },
    font16Line20: {
      "font-size": "1rem",
      "line-height": "1.25rem",
    },
    font18Line22: {
      "font-size": "1.125rem",
      "line-height": "1.375rem",
    },
    font24Line20: {
      "font-size": "1.5rem",
      "line-height": "1.25rem",
    },
    font24Line31: {
      "font-size": "1.5rem",
      "line-height": "1.95rem",
    },
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

const Theme = (props: LayoutProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  // Использую ThemeProvider из styled-components для возможности использовать значения из "theme" без необходимости их повторного определения
);

export default Theme;
