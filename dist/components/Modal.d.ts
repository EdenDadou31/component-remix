import type { ReactElement } from "react";
import React from "react";
interface IModalProps {
    onHide: () => void;
    content: ReactElement;
}
export default function Modal({ onHide, content }: IModalProps): React.JSX.Element;
export {};
