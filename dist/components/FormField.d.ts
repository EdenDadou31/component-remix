import type { ReactElement } from "react";
import React from "react";
interface FormFieldProps {
    htmlFor: string;
    label: string;
    type?: string;
    value: string;
    onChange?: (value: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    required?: boolean;
    placeholder?: string;
    rightIcon?: ReactElement;
    multiline?: boolean;
}
export default function FormField({ htmlFor, label, type, value, onChange, error, required, placeholder, rightIcon, multiline, }: FormFieldProps): React.JSX.Element;
export {};
