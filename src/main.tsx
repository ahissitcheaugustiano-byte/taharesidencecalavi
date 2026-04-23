import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Global process polyfill for production environment
if (typeof window !== "undefined") {
  // @ts-expect-error - polyfilling process
  window.process = window.process || { env: { NODE_ENV: import.meta.env.MODE } };
  
  console.log("TAHA RESIDENCE: App is loading...");
  console.log("BUILD SIGNATURE: 2026-04-21-15-14-10");

  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.height = '';
  });

  // Make all touch listeners passive: true on the main document level
  const makePassive = (e: Event) => {};
  document.addEventListener('touchstart', makePassive, { passive: true });
  document.addEventListener('touchmove', makePassive, { passive: true });
}

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Root element not found");
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Critical rendering error:", error);
  if (typeof window !== "undefined") {
    const errorDiv = document.createElement("div");
    errorDiv.style.padding = "20px";
    errorDiv.style.color = "red";
    errorDiv.style.background = "white";
    errorDiv.style.position = "fixed";
    errorDiv.style.inset = "0";
    errorDiv.style.zIndex = "10000";
    errorDiv.innerHTML = `<h1>Critical Error</h1><pre>${error instanceof Error ? error.stack : error}</pre>`;
    document.body.appendChild(errorDiv);
  }
}

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
