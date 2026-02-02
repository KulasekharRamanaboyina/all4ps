"use client";

import { useEffect, useRef } from "react";

const VisibilityTitle = () => {
  const currentTitleRef = useRef<string>("");

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // store current SEO title
        currentTitleRef.current = document.title;
        document.title = "We are waiting for you";
      } else {
        // restore page-specific SEO title
        document.title = currentTitleRef.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; // UI em ledu
};

export default VisibilityTitle;
