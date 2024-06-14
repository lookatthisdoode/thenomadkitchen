import { useEffect, useState, useCallback } from "react";

interface MouseData {
  x: number;
  y: number;
  hoveredElement: HTMLElement | null;
  url: string | null;
}

const useMousePosition = () => {
  const [mouseData, setMouseData] = useState<MouseData>({
    x: 0,
    y: 0,
    hoveredElement: null,
    url: null,
  });

  const updateMousePosition = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    const element = document.elementFromPoint(clientX, clientY);

    let url = null;
    let parentElement: HTMLElement | null = null;

    if (element && element instanceof HTMLElement) {
      parentElement = element.parentElement;
      if (parentElement && parentElement.classList.contains("foodelement")) {
        url = parentElement.getAttribute("data-url");
      }
    }

    setMouseData({
      x: clientX,
      y: clientY,
      hoveredElement: parentElement,
      url,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return mouseData;
};

export default useMousePosition;
