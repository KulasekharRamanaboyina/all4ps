"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 90 },
  { name: "May", value: 80 },
  { name: "Jun", value: 120 },
];

export default function GrowthChart() {
  return (
    <div className="mt-16 max-w-5xl mx-auto h-64 hidden md:block opacity-80">
      {/* <div className="mt-16 max-w-5xl mx-auto hidden md:block opacity-80">
     <div className="h-64 w-full"></div> */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#800080" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#800080" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#800080"
            strokeWidth={4}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <p className="text-xs text-center text-brand-purple mt-2 uppercase tracking-widest">
        Actual Client Growth Trajectory (No Fluff)
      </p>
    </div>
  );
}
