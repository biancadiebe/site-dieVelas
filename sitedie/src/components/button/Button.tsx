"use client";
import Link from "next/link";
import styles from "./Button.module.css";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | "link";
  href?: string;
  className?: string;
  variant?: "primary" | "ghost" | "rounded";
  children?: React.ReactNode;
};

export default function Button({
  as = "button",
  href,
  className = "",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const cls = [styles.button, (styles as any)[variant], className]
    .filter(Boolean)
    .join(" ");

  if (as === "link" && href) {
    return (
      <Link href={href} className={cls} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
