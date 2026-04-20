import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Global image fade-in for any <img> on the page (perf + UX)
if (typeof window !== "undefined") {
  const applyFade = () => {
    document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      if (img.dataset.fadeBound === "1") return;
      img.dataset.fadeBound = "1";
      if (!img.getAttribute("decoding")) img.setAttribute("decoding", "async");
      img.style.transition = "opacity 0.4s ease";
      if (img.complete && img.naturalWidth > 0) {
        img.style.opacity = "1";
      } else {
        img.style.opacity = "0";
        img.addEventListener(
          "load",
          () => {
            img.style.opacity = "1";
          },
          { once: true }
        );
        img.addEventListener(
          "error",
          () => {
            img.style.opacity = "1";
          },
          { once: true }
        );
      }
    });
  };

  // Run after first paint, then keep observing for new images
  window.addEventListener("load", applyFade);
  setTimeout(applyFade, 300);

  const mo = new MutationObserver(() => applyFade());
  mo.observe(document.documentElement, { childList: true, subtree: true });

  // Viewport dynamique Android Chrome
  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setVH();
  window.addEventListener("resize", setVH);
  window.addEventListener("orientationchange", () => setTimeout(setVH, 300));
}
