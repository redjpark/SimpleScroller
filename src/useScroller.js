import React from "react";

/**
 *
 * @returns A hook to manage scrolling
 *
 * {options} expects: { x: number, y: number, isSmooth: boolean }
 */
export function useScroller({ x, y, isSmooth = false }) {
  // check if 'window' exists
  // this function can run in NodeJS which does not have a global
  // 'window' variable.
  // NodeJS is required for unit testing

  if (!window) {
    return;
  }

  return function scroller() {
    // modern browers provide a scrolling interface!
    window.scrollTo({
      left: x,
      top: y,
      behavior: isSmooth ? "smooth" : "auto",
    });
  };
}
