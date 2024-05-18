import classNames from "classnames";
import React from "react";

type Color =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "danger"
  | "link"
  | "light"
  | "success";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
}

export default function Button({
  children,
  size = "md",
  color = "primary",
  ...rest
}: ButtonProps) {
  const classes = classNames("btn", {
    ["btn-" + color]: color,
    ["btn-" + size]: size,
  });
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
