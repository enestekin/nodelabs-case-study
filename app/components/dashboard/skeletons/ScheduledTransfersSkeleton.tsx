const SkeletonLine = ({ width = "", height = "h-3", className = "" }) => (
  <div className={`bg-gray-200 rounded ${width} ${height} ${className}`}></div>
);

const TransferItemSkeleton = () => (
  <div className="flex justify-between h-[39px] items-center">
    <div className="flex items-center gap-[15px]">
      <SkeletonLine
        width="w-[33px]"
        height="h-[33px]"
        className="rounded-full bg-gray-300"
      />

      <div>
        <SkeletonLine width="w-24" height="h-4" className="mb-1" />
        <SkeletonLine width="w-16" height="h-3" className="bg-gray-300" />
      </div>
    </div>

    <SkeletonLine width="w-12" height="h-4" />
  </div>
);

export function ScheduledTransfersSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between items-center mb-[25px]">
        <SkeletonLine width="w-40" height="h-6" className="bg-gray-300" />

        <div className="flex items-center gap-3">
          <SkeletonLine width="w-16" height="h-4" className="bg-gray-300" />
          <SkeletonLine width="w-3" height="h-3" className="bg-gray-300" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <TransferItemSkeleton />
        <TransferItemSkeleton />
        <TransferItemSkeleton />
        <TransferItemSkeleton />
      </div>
    </div>
  );
}
