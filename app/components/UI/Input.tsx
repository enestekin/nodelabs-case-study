import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default function Input({
  label,
  error,
  labelClassName,
  inputClassName,
  ...props
}: InputProps) {
  return (
    <>
      <label
        htmlFor={props.id}
        className={clsx("font-medium text-sm", labelClassName)}
      >
        {label}
      </label>

      <input
        {...props}
        className={clsx(
          "w-full rounded-lg border text-sm text-secondary outline-none transition",
          error ? "border-red-500" : "border-[#F2F2F2]",
          inputClassName
        )}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
}
