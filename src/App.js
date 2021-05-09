import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useOutsideClick } from "./useOutsideClick";

export default function App() {
  const mainRef = useRef();
  const [expanded, setExpanded] = useState(false);

  useOutsideClick(mainRef, () => setExpanded(false));
  return (
    <div className="App">
      <div className="main" ref={mainRef} onClick={() => setExpanded(true)}>
        Click me
      </div>
      {expanded && <div className="more">Lorem ipsum dolor sit amet</div>}
    </div>
  );
}
