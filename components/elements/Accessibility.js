import React, { useEffect } from "react";

const Accessibility = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.userway.org/widget.js";
    script.setAttribute("data-account", "IPLbOdMJ9G");
    script.async = true;
    script.style.marginTop = '50px'; // Add marginTop here

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default Accessibility;