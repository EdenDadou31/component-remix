import type { ReactElement } from "react";
import React from "react";
//TODO ADD ICON SVG
// import CloseIcon from "./../styles/icons/close.svg";

interface IModalProps {
  onHide: () => void;
  content: ReactElement;
}

export default function Modal({ onHide, content }: IModalProps) {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 flex h-full min-h-screen w-full items-center justify-center bg-backmodal lg:h-fit"
      onClick={() => onHide()}
      onKeyUp={onHide}
      tabIndex={-1}
      role="button"
    >
      <main className="relative my-10 flex h-auto  w-auto flex-col items-center justify-center gap-4 rounded-xl bg-beige p-5 px-10 text-center shadow-lg lg:left-[50px] lg:max-w-[60%]">
        <button onClick={() => onHide()} type="button">
          //TODO ADD ICON SVG
          {/* <img
            src={CloseIcon}
            alt="close-icon"
            className="absolute right-3 top-3"
          /> */}
        </button>
        {content}
      </main>
    </div>
  );
}
