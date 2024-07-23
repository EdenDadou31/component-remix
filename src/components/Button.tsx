import Loader from "./Loader";
import React from "react";

interface IButtonProps {
  onPress?: () => void;
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  name?: string;
  value?: string;
  disabled?: boolean;
  leftIcon?: string;
  className?: string;
  loading?: boolean;
}

export default function Button({
  onPress,
  title,
  type,
  name,
  value,
  disabled = false,
  leftIcon,
  className = "",
  loading = false,
}: IButtonProps) {
  return (
    <button
      className={`${
        disabled ? "bg-grey-dark" : "bg-bluenight"
      } relative flex w-full flex-row items-center justify-around rounded-full px-5 py-2 text-[white] ${className}`}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      onClick={onPress}
    >
      {leftIcon ? (
        <img src={leftIcon} alt="btn-icon" className="mr-3 w-[20px]" />
      ) : null}
      {!loading ? title : <Loader />}
    </button>
  );
}
