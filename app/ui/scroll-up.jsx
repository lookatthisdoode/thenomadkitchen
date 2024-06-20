"use client";
import { useEffect, useState } from "react";
import { Button } from "@/app/ui/button";
import { TbSquareChevronsUp } from "react-icons/tb";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);
  const [area, setArea] = useState(null);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (area.scrollTop > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    area &&
      area.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    const handlePageLoad = () => {
      const area = window.document.querySelector("#scrollable-area");
      setArea(area);
    };

    if (document.readyState === "complete") {
      // If the page is already loaded, call the handler immediately
      handlePageLoad();
    } else {
      // Otherwise, wait for the load event
      window.addEventListener("load", handlePageLoad);
    }
    // Cleanup function
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    isVisible && (
      <Button
        onClick={scrollToTop}
        className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] bg-background text-white rounded-full shadow-lg hover:bg-gray-300 transition p-3"
      >
        <TbSquareChevronsUp size={"2em"} />
      </Button>
    )
  );
}
