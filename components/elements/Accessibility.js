import React, { useEffect } from "react";

const AccessibilityButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://website-widgets.pages.dev/dist/sienna.min.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
        document.head.removeChild(script);
    };
}, []);
  return null;
};

export default AccessibilityButton;
