import { useEffect } from "react";

export function useOutsideClick(ref: any, onDetect: () => void) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onDetect();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
