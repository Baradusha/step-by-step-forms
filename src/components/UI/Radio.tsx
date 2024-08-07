import { FC } from "react";
import { TRadio } from "../../utils/types";
import {
  StyledRadio,
  RadioGroupContainer,
  StyledRadioOption,
  RadioOptionsWrapper,
} from "../../styles/UI/Radio";

const Radio: FC<TRadio> = ({
  groupTitle,
  radioItems,
  checkedValue,
  onChange,
  error,
}) => {
  return (
    <RadioGroupContainer>
      <p className="title">{groupTitle}</p>
      <RadioOptionsWrapper>
        {radioItems.map((item) => (
          <StyledRadioOption key={item.value}>
            <StyledRadio
              id={item.value}
              type="radio"
              value={item.value}
              checked={checkedValue === item.value}
              onChange={onChange}
              error={error}
            />
            <label htmlFor={item.value} className="label">
              {item.label}
            </label>
          </StyledRadioOption>
        ))}
      </RadioOptionsWrapper>
      {error && <p className="error-text">{error}</p>}
    </RadioGroupContainer>
  );
};

export default Radio;
