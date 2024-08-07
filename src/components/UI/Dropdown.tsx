import { FC, useEffect, useRef, useState } from "react";
import { TDropdown, TOption } from "../../utils/types";
import useClickOutside from "../../hooks/useClickOutside";
import {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  StyledDropdown,
} from "../../styles/UI/Dropdown";
import { Icon } from "../Icon";

const Dropdown: FC<TDropdown> = ({
  label,
  placeholder,
  defaultValue,
  dropdownItems,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<TOption>();

  useEffect(() => {
    dropdownItems.map((item) => {
      if (item.value === defaultValue) {
        setSelectedValue(item);
      }
    });
  }, [defaultValue]);

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <StyledDropdown ref={ref}>
      <label
        className="label"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {label}
      </label>
      <DropdownButton
        isOpen={isOpen}
        error={error}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue ? selectedValue.label : placeholder}
        <Icon name="chevron-down" size={20} />
      </DropdownButton>
      {error && <p className="error-text">{error}</p>}
      {isOpen && (
        <DropdownMenu>
          {dropdownItems.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <p>{option.label}</p>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
