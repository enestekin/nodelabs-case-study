import clsx from "clsx";

interface CardSkeletonProps {
  variant?: "light" | "dark";
}

export const CardSkeleton = ({ variant = "light" }: CardSkeletonProps) => {
  return (
    <div
      className={clsx(
        "flex items-center py-6 px-5 rounded-[10px] min-w-[222px] min-h-[110px] animate-pulse",
        variant === "dark" ? "bg-[#363A3F]" : "bg-[#f8f8f8]"
      )}
    >
      <div className="mr-[15px]">
        <div
          className={clsx(
            "w-12 h-12 rounded-full",
            variant === "dark" ? "bg-gray-600" : "bg-gray-300"
          )}
        />
      </div>

      <div className="flex-1">
        <div
          className={clsx(
            "h-4 w-24 rounded mb-2.5",
            variant === "dark" ? "bg-gray-600" : "bg-gray-300"
          )}
        />

        <div
          className={clsx(
            "h-7 w-32 rounded",
            variant === "dark" ? "bg-gray-600" : "bg-gray-300"
          )}
        />
      </div>
    </div>
  );
};
