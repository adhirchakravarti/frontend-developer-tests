import React, { ChangeEvent } from 'react';
import './index.scss';

type DropdownOption = {
  label: string;
  value: string | undefined;
};

type SelectDropdownProps = {
  options: DropdownOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function SelectDropdown({
  options,
  onChange
}: SelectDropdownProps): JSX.Element {
  return (
    <div className="select-dropdown">
      <select className="select-dropdown__dropdown" onChange={onChange}>
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
