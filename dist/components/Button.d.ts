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
export default function Button({ onPress, title, type, name, value, disabled, leftIcon, className, loading, }: IButtonProps): React.JSX.Element;
export {};
