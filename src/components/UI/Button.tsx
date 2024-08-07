import { FC, ReactNode } from "react";
import { StyledButton } from "../../styles/UI/Button";
import { StyledLoader } from "../../styles/UI/Loader";

interface IButton {
  onClick: () => void;
  children?: ReactNode;
  variant?: "outlinedGray" | "outlinedBlue";
  loading?: boolean;
}

export const Button: FC<IButton> = ({
  onClick,
  children,
  variant,
  loading,
}) => {
  const handleOnButtonClick = () => {
    if (!loading) onClick();
  };

  return (
    <StyledButton onClick={handleOnButtonClick} variant={variant}>
      {loading ? <StyledLoader size={16} /> : <p>{children}</p>}
    </StyledButton>
  );
};
