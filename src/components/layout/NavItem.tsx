import { MouseEventHandler, ReactNode } from "react";

interface NavItemProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

function NavItem({ children, href, className, onClick }: NavItemProps) {
  href = href ?? "/";
  return (
    <li>
      <a onClick={onClick} href={href} className={className}>
        {children}
      </a>
    </li>
  );
}

export default NavItem;
