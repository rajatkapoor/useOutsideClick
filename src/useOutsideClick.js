import { useEffect } from "react";

export const useOutsideClick = (componentRef, outsideClickHandler) => {
  const onOutsideClick = (e) => {
    if (!componentRef.current) {
      return;
    }
    const inMain = componentRef.current.contains(e.target);
    const isOutside = !inMain;
    if (isOutside) {
      outsideClickHandler();
    }
  };
  useEffect(() => {
    document.addEventListener("click", onOutsideClick);
    return () => {
      console.log("cleanup");
      document.removeEventListener("click", onOutsideClick);
    };
  }, [componentRef]);
};
