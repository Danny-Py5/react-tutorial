import { useEffect } from "react";

export function useLinkClick() {
  useEffect(() => {
    const links = document.querySelectorAll(".navbar li");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);
}
