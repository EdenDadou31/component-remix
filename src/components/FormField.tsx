import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import React from "react";

interface FormFieldProps {
  htmlFor: string;
  label: string;
  type?: string;
  value: string;
  onChange?: (
    value:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rightIcon?: ReactElement;
  multiline?: boolean;
}

export default function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {},
  error,
  required = false,
  placeholder,
  rightIcon,
  multiline = false,
}: FormFieldProps) {
  const [errorText, setErrorText] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (error?.length) {
      setErrorText(error);
    }
  }, [error]);

  return (
    <div className="mb-2 flex flex-col">
      <label
        htmlFor={htmlFor}
        className="mb-2 text-sm text-bluenight opacity-60"
      >
        {label}
      </label>
      <div className="relative">
        {!multiline ? (
          <input
            onChange={(e) => {
              onChange(e);
              setErrorText(undefined);
            }}
            required={required}
            type={type}
            id={htmlFor}
            name={htmlFor}
            className="w-full rounded-md border-[1px] border-grey-medium p-2"
            value={value}
            placeholder={placeholder}
          />
        ) : (
          <textarea
            onChange={(e) => {
              onChange(e);
              setErrorText(undefined);
            }}
            required={required}
            id={htmlFor}
            name={htmlFor}
            className="w-full rounded-md border-[1px] border-grey-medium p-2"
            value={value}
            placeholder={placeholder}
          />
        )}
        {rightIcon ? rightIcon : null}
      </div>
      {errorText?.length ? (
        <p className="w-full text-left text-xs font-semibold tracking-wide text-primary-red-default">
          {errorText}
        </p>
      ) : null}
    </div>
  );
}
