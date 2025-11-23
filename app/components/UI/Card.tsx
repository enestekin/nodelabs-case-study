"use client";

import clsx from "clsx";

interface CardProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
  variant?: "light" | "dark";
}

export default function Card({
  title,
  amount,
  icon,
  variant = "light",
}: CardProps) {
  return (
    <div
      className={clsx(
        "flex items-center py-6 px-5 rounded-[10px] min-w-[222px]",
        variant === "dark"
          ? "bg-[#363A3F] text-white"
          : "bg-[#f8f8f8] text-secondary"
      )}
    >
      <div className="mr-[15px]">{icon}</div>

      <div>
        <p
          className={clsx(
            "text-sm text-third",
            variant === "light" && "text-secondary"
          )}
        >
          {title}
        </p>

        <p
          className={clsx(
            "text-2xl font-bold mt-2.5",
            variant === "dark" ? "text-white" : "text-black"
          )}
        >
          {amount}
        </p>
      </div>
    </div>
  );
}
