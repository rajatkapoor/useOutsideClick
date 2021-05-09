import { useEffect, useRef } from "react";
import "./styles.css";
import { useOutsideClick } from "./useOutsideClick";

export default function App() {
  const mainRef = useRef();
  useOutsideClick(mainRef, () => console.log("Cloicked outside"));
  return (
    <div className="App">
      <div className="main" ref={mainRef}>
        Click me
      </div>
    </div>
  );
}
