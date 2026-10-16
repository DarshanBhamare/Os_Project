import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [pages, setPages] = useState("");
  const [frames, setFrames] = useState(3);
  const [algorithm, setAlgorithm] = useState("FIFO");

  return (
    <div className="space-y-3">

      <input
        className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 text-white"
        placeholder="Pages (e.g. 7,0,1,2,0,3)"
        onChange={(e) => setPages(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 text-white"
        value={frames}
        onChange={(e) => setFrames(Number(e.target.value))}
      />

      <select
        className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 text-white"
        onChange={(e) => setAlgorithm(e.target.value)}
      >
        <option>FIFO</option>
        <option>LRU</option>
        <option>Optimal</option>
      </select>

      <button
        onClick={() =>
          onSubmit({
            pages: pages.split(",").map(Number),
            frames,
            algorithm,
          })
        }
        className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-bold"
      >
        Run Simulation 🚀
      </button>
    </div>
  );
}