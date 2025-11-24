interface RecentTransactionSkeletonProps {
  isLastRow?: boolean;
}

export default function RecentTransactionSkeleton({
  isLastRow = false,
}: RecentTransactionSkeletonProps) {
  const paddingBottomClass = isLastRow ? "pt-4" : "pb-[13px] pt-4";

  return (
    <tr
      className={`items-center ${
        !isLastRow ? "border-b border-[#F5F5F5]" : ""
      }`}
    >
      <td className={`text-sm font-medium ${paddingBottomClass}`}>
        <div className="flex gap-3.5 items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          <div>
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </td>

      <td className={`text-sm ${paddingBottomClass}`}>
        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>

      <td className={`text-sm ${paddingBottomClass}`}>
        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>

      <td className={`text-sm ${paddingBottomClass}`}>
        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
    </tr>
  );
}
