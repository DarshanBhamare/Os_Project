import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Graph({ steps }) {
  if (!steps) return null;

  const data = steps.map((s) => ({
    step: s.step,
    faults: s.fault ? 1 : 0,
  }));

  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="step" />
      <YAxis />
      <Tooltip />
      <Line dataKey="faults" stroke="red" />
    </LineChart>
  );
}