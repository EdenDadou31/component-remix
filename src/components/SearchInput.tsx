import React from "react";
import { useState } from "react";
//TODO ADD ICON SVG
// import closeIcon from "./../styles/icons/close.svg";
// import searchIcon from "./../styles/icons/search.svg";

interface ISearchInputProps {
  onChange: (value: string) => void;
  setSearchResult: (value: any[]) => void;
  placeholder: string;
}

export default function SearchInput({
  onChange,
  setSearchResult,
  placeholder,
}: ISearchInputProps) {
  const [value, setValue] = useState("");

  function handleChangeSearch(value: string) {
    setValue(value);
    onChange(value);
  }

  return (
    <div className="relative">
      <input
        onChange={(e) => {
          handleChangeSearch(e.target.value);
        }}
        type="text"
        className="my-1 w-full rounded-md border-[1px] border-grey-medium p-2"
        value={value}
        placeholder={placeholder}
      />
      //TODO ADD ICON SVG
      {/* {value.length ? (
        <button
          type="button"
          className="absolute right-2 top-3"
          onClick={() => {
            setValue("");
            setSearchResult([]);
          }}
        >
          <img src={closeIcon} alt="clean-icon" />
        </button>
      ) : (
        <img
          src={searchIcon}
          alt="search-icon"
          className="absolute bottom-4 right-2 h-[20px] w-[20px]"
        />
      )} */}
    </div>
  );
}
