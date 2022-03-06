import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import "../styles/burger-menu.scss";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 950;

  let pages = [
    ["/", "Barocas Academy"],
    ["/football", "Football"],
    ["/basketball", "Basketball"],
    ["/handball", "Handball"],
    ["/about", "About Barocas"],
  ];

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <>
      <header>
        {isMobile ? (
          <button className="burger-menu" onClick={openMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        ) : (
          <Navbar pages={pages} />
        )}
      </header>
      <aside className="sidebar">
        <h3> Shopping Categories</h3>
        <button className="close-burger-menu" onClick={closeMenu}>
          X
        </button>
        <ul>
          {pages.map((page) => (
            <li key={page[0]}>
              <Link to={page[0]}>{page[1]}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Header;
