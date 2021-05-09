import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const mainRef = useRef();
  const onOutsideClick = (e) => {
    const inMain = mainRef.current.contains(e.target);
    const isOutside = !inMain;
    if (isOutside) {
      console.log("Clicked ouside");
    }
  };
  useEffect(() => {
    document.addEventListener("click", onOutsideClick);
    return () => {
      console.log("cleanup");
      document.removeEventListener("click", onOutsideClick);
    };
  }, [mainRef]);
  return (
    <div className="App">
      <div className="main" ref={mainRef}>
        Click me
      </div>
    </div>
  );
}
