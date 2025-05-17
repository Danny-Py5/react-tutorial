import { useEffect } from "react";

export const useWindowResize = () => {
  const handleWindowResize = (e) => {
    if (e.target.innerWidth > 860) {
      const menu = document.querySelector(".header-menu");
      const header = document.querySelector(".header");
      menu.classList.remove("active");
      header.classList.remove("active");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
};
