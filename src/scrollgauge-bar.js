import React, { useState, useEffect } from "react";

function ScrollGaugeBar() {
  const [gaugeWidth, setGaugeWidth] = useState("0%");

  useEffect(() => {
    function updateGaugeWidth() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const fillRatio = (scrollPosition / (pageHeight - windowHeight)) * 100;
      setGaugeWidth(`${fillRatio}%`);
    }

    window.addEventListener("scroll", updateGaugeWidth);
    return () => {
      window.removeEventListener("scroll", updateGaugeWidth);
    };
  }, []);

  return (
    <div>
      <div
        id="gauge-bar"
        style={{
          width: gaugeWidth,
          height: "5px",
          backgroundColor: "gray",
          position: "fixed"
        }}
      ></div>
    </div>
  );
}

export default ScrollGaugeBar;
