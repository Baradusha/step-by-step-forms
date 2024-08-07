import { FC } from "react";
import { StyledInput, StyledInputWrapper } from "../../styles/UI/Input";
import { TInput } from "../../utils/types";

//Тут использовал библиотеку react-input-mask из за простоты использования, возможности гибкой настройки масок и автоматического форматирования
//Можно было обойтись без использования библиотеки (через replace форматировать вводимые пользователем данные), но с её помощью это всё делается парой строк

const Input: FC<TInput> = ({
  label,
  placeholder,
  type,
  value,
  required,
  error,
  onChange,
}) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={label} className="label">
        {label}
      </label>
      <StyledInput
        mask={type === "tel" ? "0 999 999 999" : ""} //Маска формата 999 999 999 пропускает ввод только числовые значения
        maskChar="-"
        id={label}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        error={error}
      />
      {error && <p className="error-text">{error}</p>}
    </StyledInputWrapper>
  );
};

export default Input;
