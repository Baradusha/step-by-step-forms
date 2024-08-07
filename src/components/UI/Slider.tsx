import { FC } from "react";
import {
  SliderContainer,
  SliderTitel,
  StyledSlider,
} from "../../styles/UI/Slider";
import { TSlider } from "../../utils/types";
import { pluralizeDays } from "../../utils/helpers";

const Slider: FC<TSlider> = ({
  title,
  step,
  min,
  max,
  value,
  type,
  required,
  onChange,
  error,
}) => {
  return (
    <SliderContainer>
      <p className="title">{title}</p>
      <div>
        <SliderTitel>
          {type === "moneyAmount" ? `${value} $` : pluralizeDays(value)}
        </SliderTitel>
        <StyledSlider
          type="range"
          required={required}
          onChange={onChange}
          step={step}
          min={min}
          max={max}
          value={value}
        />
      </div>
      {error && <p className="error-text">{error}</p>}
    </SliderContainer>
  );
};

export default Slider;
