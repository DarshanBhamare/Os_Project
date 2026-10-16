export default function StatsPanel({ stats }) {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-3 gap-4 text-center">

      <div className="bg-red-500/20 p-4 rounded-xl">
        <p className="text-2xl font-bold">{stats.totalFaults}</p>
        <p>Faults</p>
      </div>

      <div className="bg-green-500/20 p-4 rounded-xl">
        <p className="text-2xl font-bold">{stats.hits}</p>
        <p>Hits</p>
      </div>

      <div className="bg-cyan-500/20 p-4 rounded-xl">
        <p className="text-2xl font-bold">
          {stats.hitRatio.toFixed(2)}
        </p>
        <p>Hit Ratio</p>
      </div>

    </div>
  );
}