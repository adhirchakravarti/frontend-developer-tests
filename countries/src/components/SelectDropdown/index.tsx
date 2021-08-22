import React, { ChangeEvent } from 'react';
import './index.scss';

type DropdownOption = {
  label: string;
  value: string;
};

type SelectDropdownProps = {
  options: DropdownOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: string | undefined;
};

function SelectDropdown({
  options,
  onChange,
  selectedValue
}: SelectDropdownProps): JSX.Element {
  return (
    <div className="select-dropdown">
      <select
        className="select-dropdown__dropdown"
        onChange={onChange}
        value={selectedValue}
      >
        {options &&
          options.map((option) => {
            return (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default SelectDropdown;
