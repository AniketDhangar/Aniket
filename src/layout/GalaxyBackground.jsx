import React from "react";

export default function GalaxyBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen">
      {/* Galaxy background image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/galaxy.png')" }}
      ></div>

      {/* Optional dark overlay */}
      <div className="fixed inset-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen">{children}</div>
    </div>
  );
}
