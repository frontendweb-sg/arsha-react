import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <NavItem className="active" href="/">
          Home
        </NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/portfolio">Portfolio</NavItem>
        <NavItem href="/team">Team</NavItem>
        <NavItem href="/pricing">Pricing</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}
