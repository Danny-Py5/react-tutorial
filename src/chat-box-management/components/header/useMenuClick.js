import { useEffect } from "react";

export function useMenuClick() {
  useEffect(() => {
    const menu = document.querySelector(".header-menu");
    const header = document.querySelector(".header");

    const handleMenuClick = () => {
      header.classList.toggle("active");
      menu.classList.toggle("active");
    };

    // const handleOutsideClick = (event) => {
    //   if (!header.contains(event.target) && !menu.contains(event.target)) {
    //     header.classList.remove("active");
    //     menu.classList.remove("active");
    //   }
    // };

    menu.addEventListener("click", handleMenuClick);

    return () => {
      menu.removeEventListener("click", handleMenuClick);
    };
  }, []);
}
