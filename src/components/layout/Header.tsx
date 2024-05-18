import { useAppState } from "../../context";
import Button from "../ui/Button";
import Logo from "./Logo";

import Navigation from "./Navigation";

export default function Header() {
  const { onConfirm } = useAppState();

  const handleDelete = (id: string) => {
    console.log("hi");
    onConfirm({
      title: "Do you want to delte header item",
      subtitle: "Yes, i am ",
      onSubmit: async () => {
        alert("Deletre" + id);
      },
    });
  };
  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Logo />
        <Navigation />

        <Button onClick={() => handleDelete("12")} size="sm" color="success">
          Get Started
        </Button>
      </div>
    </header>
  );
}
