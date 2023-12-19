
import React, { forwardRef } from "react";
// import generateGUID from "../../utils";
// import { Icon } from "@components/Icons/FLATICON/FlatIconSprite";


import "./SelectWithIcon.css";

export const SelectWithIcon = forwardRef(({ placeholder, options, selectedValue }:any, ref : any) => {

    const id = "1";
    return (
        <div className="inputWithIcon">
            <label htmlFor={id}>
                {/* <Icon name={icon} color={"#6e7377"} size={16} /> */}
                {/* <i class="fa fa-chevron-down" aria-hidden="true"></i> */}
                
                {/* <span className={icon}></span> */}
            </label>
            <div className="select">
                <select id={id} name={id} autoFocus={true} defaultValue={""} ref={ref}>
                    <option  //value={selectedValue} 
                        disabled hidden>{placeholder}</option>
                    {
                        options && options.length > 0 && options.map(({ value, label }: any, index: number) => {
                            return <option key={index} value={value}>{label}</option>
                        })
                    }
                </select>
            </div>

        </div>

    );
})