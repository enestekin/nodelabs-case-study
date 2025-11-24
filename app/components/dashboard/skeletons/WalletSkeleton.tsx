const SkeletonLine = ({ width = "w-full", height = "h-4", className = "" }) => (
  <div className={`bg-gray-200 rounded ${width} ${height} ${className}`}></div>
);

export default function WalletSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-between mb-[15px]">
        <SkeletonLine width="w-20" height="h-6" className="bg-gray-300" />
        <SkeletonLine width="w-4" height="h-4" className="bg-gray-300" />
      </div>

      <div className="">
        <div className="bg-[linear-gradient(to_right,#4A4A49,#20201F)] pt-[18px] pl-[30px] pr-[38px] rounded-xl min-w-[354px] pb-7">
          <div className="mb-[27px]">
            <SkeletonLine width="w-1/3" height="h-4" className="bg-gray-600" />
          </div>
          <div className="flex justify-between items-center mb-[21px]">
            <SkeletonLine
              width="w-8"
              height="h-8"
              className="bg-gray-600 rounded-full"
            />
            <SkeletonLine
              width="w-6"
              height="h-6"
              className="bg-gray-600 rounded-full"
            />
          </div>
          <div className="mb-2">
            <SkeletonLine width="w-3/4" height="h-5" className="bg-gray-600" />
          </div>
          <div className="flex justify-end">
            <SkeletonLine
              width="w-10"
              height="h-6"
              className="bg-gray-600 rounded"
            />
          </div>
        </div>

        <div className="px-[15px] -mt-18">
          <div className="bg-gray-100 border border-gray-200 min-[172px] py-[18px] pl-5 pr-3.5 rounded-xl">
            <div className="mb-[13px]">
              <SkeletonLine width="w-2/5" height="h-4" />
            </div>
            <div className="flex justify-between items-center mb-10">
              <SkeletonLine width="w-8" height="h-6" className="rounded-full" />
              <SkeletonLine width="w-6" height="h-5" className="rounded-full" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <SkeletonLine width="w-1/2" height="h-5" className="mb-[5px]" />
                <SkeletonLine width="w-1/4" height="h-3" />
              </div>

              <SkeletonLine width="w-10" height="h-6" className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
