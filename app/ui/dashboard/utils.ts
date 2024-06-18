"use client";

// Checks if the URL provided is valid for this project.
export const checkImageUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      // This code is running on the server, so resolve as false
      resolve(false);
      return;
    }

    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};
