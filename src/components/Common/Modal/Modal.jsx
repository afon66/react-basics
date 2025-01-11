import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, open }) => {
  
  const modal = useRef();
  useEffect(() => {
    if (open) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={modal}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};
