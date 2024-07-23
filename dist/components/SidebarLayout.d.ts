import React from "react";
interface SidebarLayoutOverlayProps {
    children: React.ReactNode;
    isOpen: boolean;
    onHide: () => void;
    size?: "sm" | "lg";
}
export default function SidebarLayout({ children, isOpen, onHide, size, }: SidebarLayoutOverlayProps): React.JSX.Element;
export {};
