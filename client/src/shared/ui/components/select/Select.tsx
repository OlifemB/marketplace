import React from "react";
import style from './Select.module.scss'

export interface Option {
  value: string,
  name: string
}

export interface SelectProps {
  options: Option[],
  defaultValue: string,
  value: string,
  onChange: (e: string) => void
}

const Select: React.FC<SelectProps> = ({options, defaultValue, value, onChange}) => {
  return (
      <select className={style.select} value={value} onChange={(e) => onChange(e.target.value)}>

        <option disabled value={"title"}>
          {defaultValue}
        </option>

        {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
        ))}
      </select>
  );
};

export default Select
