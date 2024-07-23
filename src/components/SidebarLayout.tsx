import React from "react";

interface SidebarLayoutOverlayProps {
  children: React.ReactNode;
  isOpen: boolean;
  onHide: () => void;
  size?: "sm" | "lg";
}

export default function SidebarLayout({
  children,
  isOpen,
  onHide,
  size = "lg",
}: SidebarLayoutOverlayProps) {
  return (
    <>
      {isOpen ? (
        <div
          onClick={onHide}
          className="z-49 fixed bottom-0 left-0 right-0 top-0 h-screen min-h-screen w-full bg-primary-black opacity-10"
          role="button"
          onKeyDown={onHide}
          tabIndex={-1}
        />
      ) : null}
      <div
        className={`fixed bottom-0 left-0 z-50 flex w-full justify-center overflow-y-auto bg-primary-white duration-300 ease-in-out no-scrollbar lg:bottom-[inherit] lg:left-[inherit] lg:right-0 lg:top-0  
            ${
              isOpen
                ? "top-0 translate-y-0 lg:translate-x-0 lg:translate-y-[inherit]"
                : "translate-y-full lg:translate-x-full lg:translate-y-[inherit] "
            }
            ${size === "sm" ? "lg:w-[400px]" : "lg:w-9/12"}`}
      >
        {children}
      </div>
    </>
  );
}
