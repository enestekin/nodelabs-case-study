"use client";

import { useWWorkingCapital } from "@/hooks/useFinanceActions";
import { DownIcon } from "@/assets/Icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import WorkingCapitalSkeleton from "./skeletons/WorkingCapitalSkeleton";

export default function WorkingCapitalChart() {
  const { data, isLoading } = useWWorkingCapital();
  const chartData = data?.data.data;

  if (isLoading) {
    return <WorkingCapitalSkeleton />;
  }

  return (
    <div className="border border-[#F5F5F5] rounded-[10px] w-full h-[291px] pt-[15px] pl-[25px] pr-5 pb-[21px]">
      <div className="flex justify-between items-center mb-[29px]">
        <h2 className="text-xl font-semibold">Working Capital</h2>

        <div className="flex items-center gap-18">
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[9px]">
              <div className="w-2 h-2 rounded-full bg-[#29A073]"></div>
              <span className="text-[12px] text-[#1B212D]">Income</span>
            </div>
            <div className="flex items-center gap-[9px]">
              <div className="w-2 h-2 rounded-full bg-[#C8EE44]"></div>
              <span className="text-[12px] text-[#1B212D]">Expenses</span>
            </div>
          </div>

          <div className="flex items-center pt-[7px] pb-[7px] pr-1.5 pl-2.5 bg-gray-100 rounded-[5px] text-[12px] cursor-pointer">
            Last 7 days
            <DownIcon className="w-[9px] h-[5px] ml-5" />
          </div>
        </div>
      </div>

      <div className="w-full h-[193px]">
        <ResponsiveContainer width="100%" height="100%" className="-ml-6">
          <LineChart data={chartData}>
            <CartesianGrid
              stroke="#F5F4F8"
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis dataKey="month" tick={{ fill: "#929EAE" }} fontSize={12} />

            <YAxis
              tick={{ fill: "#929EAE" }}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
              fontSize={12}
            />

            <Tooltip
              cursor={{ fill: "rgba(56, 97, 251, 0.06)" }}
              content={<CustomTooltip />}
            />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#29A073"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#29A073" }}
              name="Income"
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#C8EE44"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#C8EE44" }}
              name="Expenses"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const value = payload[0].value;

    return (
      <div className="bg-white shadow-md rounded-md px-3 py-2 border">
        <p className="text-sm font-semibold">₺{value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
}
