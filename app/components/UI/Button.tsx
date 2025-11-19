import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  loading,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={clsx(
        "cursor-pointer w-full py-3 rounded-lg font-medium transition active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2",
        className
      )}
    >
      {loading ? "Loading..." : <>{children}</>}
    </button>
  );
}
