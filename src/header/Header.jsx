import { Link } from "react-router-dom";
import "./header.css";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const links = document.querySelectorAll("header ul a");

    const removeActive = () => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
    };
    const addActive = function () {
      removeActive();
      this.classList.add("active");
    };
    links.forEach((link) => {
      link.addEventListener("click", addActive);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", addActive);
      });
    };
  });
  return (
    <header>
      <div className="logo">
        <h1>Logo</h1>
      </div>

      <section className="navbar-cont">
        <ul>
          <div className="indicator"></div>
          <li>
            <Link className="active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
