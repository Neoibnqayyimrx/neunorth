import NeunorthLogo from "../../components/NeunorthLogo";
import "./Navbar.css";
import Socials from "../../components/Socials";
import Sidebar from "../../components/Sidebar";
import { navRoutes } from "../../data";
import { Link } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { useEffect, useMemo, useState } from "react";
import { convertHexToRgba } from "../../util";
import gsap from "gsap";

const index = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropNavbar = () => {
    if (window.scrollY > 200) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  useMemo(() => {
    window.addEventListener("scroll", dropNavbar);
    return () => window.removeEventListener("scroll", dropNavbar);
  });
  useEffect(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo("#navbar .logo", { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo("#navbar .socials", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        "#navbar .route-wrapper .route",
        {
          x: -50,
          opacity: 0,
        },
        { x: 0, opacity: 1, stagger: 0.2 }
      );
  });

  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)} />
      )}
      <nav
        id="navbar"
        className={drop ? "blur drop" : ""}
        style={{ background: drop ? convertHexToRgba("--bg-base", 0.8):"transparent"}}
      >
        <NeunorthLogo />
        <div className="route-wrapper">
          {navRoutes.map((route, index) => (
            <Link
              to={route.id}
              className="route"
              smooth={true}
              spy={true}
              offset={-50}
              key={index}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <Socials />
        <div className="menu" onClick={() => setOpen(!open)}>
          <CgMenuRight />
        </div>
      </nav>
    </>
  );
};

export default index;
