"use client";

// Drop-in replacements for react-router-dom's <Link> and <NavLink>, backed by
// next/link. This lets the migrated CRA components keep their existing
// `to="..."` props and `className={({ isActive }) => ...}` callbacks unchanged —
// only the import source switches from "react-router-dom" to "@/lib/link".

import NextLink from "next/link";
import { usePathname } from "next/navigation";

export function Link({ to, href, children, ...props }) {
  return (
    <NextLink href={href ?? to ?? "#"} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({
  to,
  href,
  className,
  style,
  children,
  end = false,
  ...props
}) {
  const pathname = usePathname();
  const target = href ?? to ?? "#";

  const isActive =
    target === "/"
      ? pathname === "/"
      : end
      ? pathname === target
      : pathname === target || pathname.startsWith(target + "/");

  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;
  const resolvedStyle =
    typeof style === "function" ? style({ isActive }) : style;

  return (
    <NextLink
      href={target}
      className={resolvedClassName}
      style={resolvedStyle}
      {...props}
    >
      {typeof children === "function" ? children({ isActive }) : children}
    </NextLink>
  );
}

export default Link;
