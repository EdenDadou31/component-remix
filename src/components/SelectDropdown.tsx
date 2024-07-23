import React from "react";
import { useState, useEffect, useRef } from "react";
// import { useOnClickOutside } from "usehooks-ts";
//TODO ADD ICON SVG
// import chevronDown from "./../styles/icons/chevron-down.svg";
// import closeIcon from "./../styles/icons/close.svg";

interface SelectFieldProps {
  htmlFor: string;
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  defaultValue: string;
  error?: string;
  required?: boolean;
  position?: string;
  clearable?: boolean;
  onReset?: () => void;
}

export default function SelectDropdown({
  htmlFor,
  label,
  options,
  value,
  onChange,
  defaultValue,
  error = "",
  disabled = false,
  position,
  clearable = false,
  onReset = () => {},
}: SelectFieldProps) {
  let refDropdown = useRef(null);

  const [errorText, setErrorText] = useState(error);
  const [showDropDown, setShowDropDown] = useState(false);

  // useOnClickOutside(refDropdown, () => setShowDropDown(false));

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return (
    <div className="relative flex flex-col" ref={refDropdown}>
      {label ? (
        <label htmlFor={htmlFor} className="mb-2 text-sm text-bluenight100">
          {label}
        </label>
      ) : null}
      <div
        className={`inline-flex w-full items-center gap-4 rounded-md border-2 border-grey-light p-2 ${
          disabled ? "bg-grey-light" : "bg-primary-white"
        } ${defaultValue || value ? "justify-between" : "justify-end"}`}
      >
        <button
          onClick={() => setShowDropDown(!showDropDown)}
          type="button"
          disabled={disabled}
          className="w-full text-left"
        >
          {!value ? defaultValue : value}
        </button>
        <div className="flex flex-row">
          //TODO ADD ICON SVG
          {/* {clearable && value && value !== defaultValue && !disabled ? (
            <div
              onKeyDown={() => onReset()}
              onClick={() => onReset()}
              role="button"
              tabIndex={-1}
            >
              <img src={closeIcon} alt="clean-icon" className="w-5" />
            </div>
          ) : null} */}
          <button
            onClick={() => setShowDropDown(!showDropDown)}
            type="button"
            disabled={disabled}
            className="w-max"
          >
            //TODO ADD ICON SVG
            {/* <img
              src={chevronDown}
              alt="chevron-down"
              className="rounded-full bg-beige p-2"
            />  */}
            V
          </button>
        </div>
      </div>
      <div className="text-red-500 w-full text-center text-xs font-semibold tracking-wide">
        {errorText || ""}
      </div>
      {showDropDown && options && !disabled ? (
        <div
          className={`absolute z-40 flex h-auto max-h-[200px] w-full flex-col gap-4 overflow-y-auto rounded-md border-[0.7px] border-grey-medium bg-primary-white p-4 shadow-inner ${
            position ? position : "top-20"
          }`}
        >
          {options.map((item) => (
            <button
              key={item.label}
              className={`text-left text-bluenight hover:bg-beige`}
              type="button"
              onClick={() => {
                onChange(item.value);
                setShowDropDown(false);
              }}
            >
              <p
                className={` p-2 ${
                  disabled ? "bg-grey-medium" : "text-bluenight"
                }`}
              >{`${item.label}`}</p>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
