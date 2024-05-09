import Button from "../ui/Button";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Logo />
        <Navigation />

        <Button size="sm" color="success">
          Get Started
        </Button>
      </div>
    </header>
  );
}
