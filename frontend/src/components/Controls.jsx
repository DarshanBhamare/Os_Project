export default function Controls({ index, setIndex, playing, setPlaying, total }) {
  return (
    <div className="flex justify-center gap-3">

      <button
        onClick={() => setIndex((i) => Math.max(i - 1, 0))}
        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
      >
        ⬅ Prev
      </button>

      <button
        onClick={() => setPlaying(!playing)}
        className="px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600"
      >
        {playing ? "Pause ⏸" : "Play ▶"}
      </button>

      <button
        onClick={() => setIndex((i) => Math.min(i + 1, total - 1))}
        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
      >
        Next ➡
      </button>

      <button
        onClick={() => {
          setIndex(0);
          setPlaying(false);
        }}
        className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
      >
        Reset 🔄
      </button>
    </div>
  );
}