import React from "react";
interface ISearchInputProps {
    onChange: (value: string) => void;
    setSearchResult: (value: any[]) => void;
    placeholder: string;
}
export default function SearchInput({ onChange, setSearchResult, placeholder, }: ISearchInputProps): React.JSX.Element;
export {};
