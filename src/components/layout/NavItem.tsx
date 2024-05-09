import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  className?: string;
  children: ReactNode;
}

function NavItem({ children, href, className }: NavItemProps) {
  return (
    <li>
      <a href={href} className={className}>
        {children}
      </a>
    </li>
  );
}

export default NavItem;
