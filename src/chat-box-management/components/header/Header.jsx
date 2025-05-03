import { useEffect } from "react";
import "../../utils/utils.css";
import { useLinkClick } from "./useLinkClick.js";
import HeroCard from "./HeroCard.jsx";
import "./headerStyle.css";
import { useMenuClick } from "./useMenuClick.js";

export function Header() {
  useLinkClick();
  useMenuClick();
  useEffect(() => {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".header-menu");

    const handleOutsideClick = (event) => {
      if (!header.contains(event.target) && !menu.contains(event.target)) {
        header.classList.remove("active");
        menu.classList.remove("active");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <header>
      <div className="section-wrapper header-wrapper">
        <div className="header">
          <div className="logo">
            <span>
              <i className="fas fa-robot"></i>{" "}
            </span>
            <span>ChatBox</span>
          </div>

          <div className="header-nav center-flex cf-space-evenly">
            <ul className="navbar">
              <li className="active" data-tooltip="Dashboard">
                <i className="fas fa-home"></i> {/* Solid Home Icon */}
                <span>Dashboard</span>
              </li>
              <li data-tooltip="Chat Box">
                <i className="fas fa-comments"></i> {/* Solid Comments Icon */}
                <span>Chat Box</span>
              </li>
              <li data-tooltip="Users">
                <i className="fas fa-user"></i> {/* Solid User Icon */}
                <span>Users</span>
              </li>
              <li data-tooltip="Analytics">
                <i className="fas fa-chart-area"></i>{" "}
                {/* Solid Chart Area Icon */}
                <span>Analytics</span>
              </li>
              <li data-tooltip="Media">
                <i className="fas fa-image"></i> {/* Solid Image Icon */}
                <span>Media</span>
              </li>
            </ul>

            <div className="user-info">
              <div className="user-name">
                <span className="user-name-abbr">RA</span>{" "}
                <span>Rita Amide</span>
              </div>
              <i className="fa fa-cog"></i>
              <i className="fa fa-bell"></i>
            </div>
          </div>
          <button className="header-btt header-menu">
            <i className="fas fa-bars header-btt-i"></i>
          </button>
        </div>
        <div className="hero">
          <h1>Dashboard</h1>
          <div className="hero-short-info">
            <div className="center-flex cf-gap-2">
              <i className="hero-icon fas fa-robot"></i>
              <div>
                <p>
                  <strong>Create you first ChatBot</strong>
                </p>
                <p className="p">
                  ChatBox is a powerful tool that allows you to create and
                  manage your own chatBots. With ChatBox, you can easily create
                  a chatbot that can answer questions, provide support, and
                  engage with your users in real-time.
                </p>
              </div>
              <button className="hero-btt">Start Charting</button>
            </div>
          </div>

          <HeroCard />
        </div>
      </div>
    </header>
  );
}
