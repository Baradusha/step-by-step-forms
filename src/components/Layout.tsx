import { FC, ReactNode } from "react";
import { Container } from "../styles/Containers";
import { FormWrapper } from "../styles/Wrappers";

type TLayout = {
  children: ReactNode;
};

const Layout: FC<TLayout> = ({ children }) => {
  return (
    <Container>
      <FormWrapper>{children}</FormWrapper>
    </Container>
  );
};

export default Layout;
