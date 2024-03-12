"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preconnect("https://player.vimeo.com", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://i.vimeocdn.com", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://f.vimeocdn.com", { crossOrigin: "anonymous" });

  return null;
}
