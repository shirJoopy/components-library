import React, { forwardRef, Ref } from "react";
// import generateGUID from "../../utils";
// import { Icon } from "@components/Icons/FLATICON/FlatIconSprite";
import { ReactComponent as TenantSvg } from '../componenets/Icons/sources/tenat.svg';

import "./SelectWithIcon.css";

interface Option {
  value: string;
  label: string;
}

interface SelectWithIconProps {
  placeholder: string;
  options: Option[];
  selectedValue?: string;
}

// export const SelectWithIcon = forwardRef(
//   ({ placeholder, options, selectedValue }: SelectWithIconProps, ref: Ref<HTMLSelectElement>) => {
export const SelectWithIcon = forwardRef(({ placeholder, options, selectedValue }:any, ref : any) => {
    const id = "1";

    return (
      <div className="inputWithIcon">
        <label htmlFor={id}>
          {/* <Icon name={icon} color={"#6e7377"} size={16} /> */}
          {/* <i class="fa fa-chevron-down" aria-hidden="true"></i> */}
          {/* <span className={icon}></span> */}
          <TenantSvg style={{ height: "20px", width: "20px" }} />
        </label>
        <div className="select">
          <select id={id} name={id} autoFocus={true} defaultValue={""} ref={ref}>
            <option disabled hidden>
              {placeholder}
            </option>
            {options &&
              options.length > 0 &&
              options.map(({ value, label }: Option, index: number) => {
                return <option key={index} value={value}>{label}</option>;
              })}
          </select>
        </div>
      </div>
    );
  }
);
