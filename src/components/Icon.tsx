import Sprite from "../assets/sprites.svg";

interface IIcon {
  name: string;
  size?: number;
  onClick?: any;
}

export const Icon = ({ name, size, onClick }: IIcon) => {
  return (
    <svg
      {...(size && { width: size + "px", height: size + "px" })}
      onClick={onClick}
    >
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
};
