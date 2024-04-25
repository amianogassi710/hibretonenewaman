/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import EvidenceLedResearchMUISearch from "./EvidenceLedResearchMUISearch";

function useLockBodyScroll(open) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);
}

export default function EvidenceLedResearchMUISearchFrame() {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);

  return (
    <>
        <div className="background-random-industry-intelligence">
          <section className="section-box mt-25 mb-25">
                <div className="container">
                    <div className="banner-hero1">
                        <div className="block-banner1">
                            {<EvidenceLedResearchMUISearch />}
                        </div>
                    </div>
                </div>
            </section>

       
        </div>
    </>
  );
}