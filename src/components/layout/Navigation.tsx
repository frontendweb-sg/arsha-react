import { useContext, useState } from "react";
import NavItem from "./NavItem";
import { AppContext, useAppState } from "../../context";

/**
 * 1. window.location.hash
 * 2. problem when we are hitting any route not activating (re-render)
 * 3. state (local memory of component)
 * @returns
 */

export default function Navigation() {
  const [hashValue, setHasValue] = useState("#hero");

  const onChange = (value: string) => {
    setHasValue(() => value); // async
    console.log(hashValue, value, "-------");
  };

  const { cart } = useAppState();

  console.log(window.location.hash, hashValue, "value");
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <NavItem
          href="#hero"
          onClick={() => onChange("#hero")}
          className={hashValue === "#hero" ? "active" : ""}
        >
          Home
        </NavItem>
        <NavItem
          href="#about"
          onClick={() => onChange("#about")}
          className={hashValue === "#about" ? "active" : ""}
        >
          About
        </NavItem>
        <NavItem
          href="#services"
          onClick={() => onChange("#services")}
          className={hashValue === "#services" ? "active" : ""}
        >
          Services
        </NavItem>
        <NavItem
          href="#portfolio"
          onClick={() => onChange("#portfolio")}
          className={hashValue === "#portfolio" ? "active" : ""}
        >
          Portfolio
        </NavItem>
        <NavItem
          href="#team"
          onClick={() => onChange("#team")}
          className={hashValue === "#team" ? "active" : ""}
        >
          Team
        </NavItem>
        <NavItem
          href="#pricing"
          onClick={() => onChange("#pricing")}
          className={hashValue === "#pricing" ? "active" : ""}
        >
          Pricing
        </NavItem>
        <NavItem
          href="#contact"
          onClick={() => onChange("#contact")}
          className={hashValue === "#contact" ? "active" : ""}
        >
          Contact
        </NavItem>
        <li>
          <div className="text-white bg-primary p-2 rounded mr-2">
            cart:{cart.total}
          </div>
        </li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}
