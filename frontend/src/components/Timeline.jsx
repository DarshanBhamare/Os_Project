export default function Timeline({ steps, index, setIndex }) {
  return (
    <div className="bg-white/10 p-4 rounded-xl">

      <input
        type="range"
        min="0"
        max={steps.length - 1}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        className="w-full"
      />

      <div className="flex justify-between text-xs mt-2 text-gray-300">
        {steps.map((s, i) => (
          <span
            key={i}
            className={i === index ? "text-cyan-400 font-bold" : ""}
          >
            {s.page}
          </span>
        ))}
      </div>

    </div>
  );
}