import React from "react";
interface SelectFieldProps {
    htmlFor: string;
    label?: string;
    options: {
        value: string;
        label: string;
    }[];
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
export default function SelectDropdown({ htmlFor, label, options, value, onChange, defaultValue, error, disabled, position, clearable, onReset, }: SelectFieldProps): React.JSX.Element;
export {};
