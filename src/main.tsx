import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";

const cursor = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", (event) => {
  cursor.x =
    ((window.innerWidth / 2 - window.innerWidth + event.clientX) /
      window.innerWidth) *
    2;
  cursor.y =
    ((window.innerHeight / 2 - window.innerHeight + event.clientY) /
      window.innerHeight) *
    -2;
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App cursor={cursor} />
  </StrictMode>
);
