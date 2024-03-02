"use client";

import ReactDOM  from "react-dom";

export function PreloadResources() {
  ReactDOM.preconnect("https://player.vimeo.com");
  ReactDOM.preconnect("https://i.vimeocdn.com");
  ReactDOM.preconnect("https://f.vimeocdn.com");

  return null;
}